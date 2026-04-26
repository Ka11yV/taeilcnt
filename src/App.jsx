import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  ChevronDown,
  Factory,
  FileText,
  HardHat,
  Landmark,
  Leaf,
  MapPinned,
  Menu,
  Newspaper,
  PlayCircle,
  ShieldCheck,
  Store,
  Users2,
  X,
} from 'lucide-react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import {
  brand,
  getNewsDetailPath,
  featuredProjects,
  getProjectDetailPath,
  homeSections,
  navigation,
  newsItems,
  pages,
  partnerShowcase,
  projectCategories,
  projectDetailPages,
  projects,
  videos,
} from './data/siteData';
import tomorrowHeroImage from '../static/tomorrow.png';

const sectionIcons = {
  company: Building2,
  performance: HardHat,
  pr: Newspaper,
  esg: ShieldCheck,
  recruit: Users2,
  admin: FileText,
};

const categoryIcons = {
  housing: Landmark,
  office: BriefcaseBusiness,
  'education-medical': FileText,
  plant: Factory,
  'high-rise': Building2,
  retail: Store,
  others: HardHat,
};

const heroHotspots = [
  {
    id: 'plant',
    title: '플랜트 시공',
    description: '산업시설과 플랜트 구조물 공정 수행 역량',
    top: '34%',
    left: '24%',
  },
  {
    id: 'residential',
    title: '주택·초고층',
    description: '도심 주거와 고층 복합개발 프로젝트 경험',
    top: '34%',
    left: '72%',
  },
  {
    id: 'office',
    title: '수원연무동 주상복합',
    description: '도심 복합개발 현장의 주거·상업 복합 시공 프로젝트',
    top: '56%',
    left: '68%',
  },
  {
    id: 'logistics',
    title: '다이소 세종 온라인센터',
    description: '대형 온라인 물류 거점 시공 수행 프로젝트',
    top: '64%',
    left: '88%',
  },
];

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const toDateTimeValue = (dateText) => dateText?.replaceAll('.', '-');

function getHomeHeroMotion() {
  if (typeof window === 'undefined') {
    return {
      progress: 0,
      introOpacity: 1,
      introOffset: 0,
      immersiveOpacity: 0,
      immersiveOffset: 32,
      ctaOpacity: 0,
      ctaOffset: 20,
      cueOpacity: 1,
      mediaStyle: undefined,
      mediaShadeOpacity: 0.16,
    };
  }

  const viewportHeight = window.innerHeight || 900;
  const viewportWidth = window.innerWidth || 1440;
  const scrollY = window.scrollY || 0;
  const progress = clamp(scrollY / (viewportHeight * 0.92));
  const eased = 1 - ((1 - progress) ** 3);
  const introOpacity = clamp(1 - progress * 1.55);
  const immersiveOpacity = clamp((progress - 0.16) / 0.36);
  const ctaOpacity = clamp((progress - 0.24) / 0.38);

  const initialTopInset = Math.max(160, viewportHeight * 0.6);
  const initialSideInset = Math.max(24, viewportWidth * 0.085);
  const initialBottomInset = Math.max(26, viewportHeight * 0.065);
  const radius = Math.round(30 * (1 - eased));
  const topInset = Math.round(initialTopInset * (1 - eased));
  const sideInset = Math.round(initialSideInset * (1 - eased));
  const bottomInset = Math.round(initialBottomInset * (1 - eased));
  const clipPath = `inset(${topInset}px ${sideInset}px ${bottomInset}px ${sideInset}px round ${radius}px)`;

  return {
    progress,
    introOpacity,
    introOffset: -48 * progress,
    immersiveOpacity,
    immersiveOffset: 28 * (1 - immersiveOpacity),
    ctaOpacity,
    ctaOffset: 22 * (1 - ctaOpacity),
    cueOpacity: clamp(1 - progress * 2.4),
    mediaStyle: {
      clipPath,
      WebkitClipPath: clipPath,
      transform: `scale(${1.08 - (0.08 * eased)})`,
    },
    mediaShadeOpacity: 0.12 + (0.34 * immersiveOpacity),
  };
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/performance/order-status/:projectName" element={<Layout><ProjectDetailPage /></Layout>} />
      <Route path="/pr/news/:newsSlug" element={<Layout><NewsDetailPage /></Layout>} />
      <Route path="/:section" element={<Layout><SectionPage /></Layout>} />
      <Route path="/:section/:slug" element={<Layout><SectionPage /></Layout>} />
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  );
}

function Layout({ children }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const previousPathRef = useRef(location.pathname);

  useEffect(() => {
    setMobileMenuOpen(false);

    const previousPath = previousPathRef.current;
    const currentPath = location.pathname;

    const previousParts = previousPath.split('/').filter(Boolean);
    const currentParts = currentPath.split('/').filter(Boolean);

    const isSameSectionSubnavChange =
      previousParts.length >= 1 &&
      currentParts.length >= 1 &&
      previousParts[0] === currentParts[0] &&
      previousParts[0] === 'company';

    if (!isSameSectionSubnavChange) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    previousPathRef.current = currentPath;
  }, [location.pathname, location.hash]);

  return (
    <div className="site-shell">
      <Header isHome={isHome} isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header({ isHome, isMobileMenuOpen, setMobileMenuOpen }) {
  const [homeHeaderMode, setHomeHeaderMode] = useState(isHome ? 'home-intro-header' : '');

  useEffect(() => {
    if (!isHome) {
      setHomeHeaderMode('');
      return undefined;
    }

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setHomeHeaderMode('');
        return;
      }

      const scrollY = window.scrollY;
      const immersiveThreshold = (window.innerHeight || 900) * 0.34;
      const heroEnd = (window.innerHeight || 900) * 1.02;

      if (scrollY < immersiveThreshold) {
        setHomeHeaderMode('home-intro-header');
        return;
      }

      if (scrollY < heroEnd) {
        setHomeHeaderMode('home-immersive-header');
        return;
      }

      setHomeHeaderMode('');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHome, isMobileMenuOpen]);

  return (
    <header className={`site-header ${homeHeaderMode}`}>
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="태일씨앤티 홈으로 이동">
          <img src={brand.logo} alt="태일씨앤티 로고" />
          <span>
            <strong>{brand.name}</strong>
            <small>{brand.englishName}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((group) => (
            <div key={group.section} className="nav-group">
              <NavLink className="nav-trigger" to={`/${group.section}`}>
                {group.label}
                {group.items.length > 0 ? <ChevronDown size={16} /> : null}
              </NavLink>
              {group.items.length > 0 ? (
                <div className="dropdown-panel">
                  {group.items.map((item) => (
                    <NavLink key={item.slug} className="dropdown-link" to={`/${group.section}/${item.slug}`}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="mobile-nav-panel">
          <div className="container mobile-nav-inner">
            {navigation.map((group) => (
              <details key={group.section} open={group.items.length === 0}>
                <summary>
                  <NavLink to={`/${group.section}`}>{group.label}</NavLink>
                </summary>
                {group.items.length > 0 ? (
                  <div className="mobile-subnav">
                    {group.items.map((item) => (
                      <NavLink key={item.slug} to={`/${group.section}/${item.slug}`}>
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </details>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HomePage() {
  const [heroMotion, setHeroMotion] = useState(getHomeHeroMotion);

  useEffect(() => {
    let frameId = 0;

    const handleMotion = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        setHeroMotion(getHomeHeroMotion());
      });
    };

    handleMotion();
    window.addEventListener('scroll', handleMotion, { passive: true });
    window.addEventListener('resize', handleMotion);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleMotion);
      window.removeEventListener('resize', handleMotion);
    };
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-pin">
          <div className="hero-canvas">
            <div className="hero-media-reveal" style={heroMotion.mediaStyle}>
              <img className="hero-media-asset hero-media-poster" src={tomorrowHeroImage} alt="태일씨앤티 메인 비주얼" />
              <div className="hero-hotspot-layer" aria-label="메인 비주얼 주요 사업영역 안내">
                {heroHotspots.map((spot) => (
                  <button
                    key={spot.id}
                    type="button"
                    className="hero-hotspot"
                    style={{ top: spot.top, left: spot.left }}
                    aria-label={`${spot.title}: ${spot.description}`}
                  >
                    <span className="hero-hotspot-dot" aria-hidden="true" />
                    <span className="hero-hotspot-tooltip">
                      <strong>{spot.title}</strong>
                      <small>{spot.description}</small>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-scroll-cue" style={{ opacity: heroMotion.cueOpacity }}>
              <span />
              Scroll Down
            </div>
          </div>
        </div>
      </section>

      <section className="section-block home-news-section">
        <div className="container home-news-layout">
          <article className="home-news-visual">
            <div className="home-news-media-frame">
              {videos[0].embedUrl ? (
                <iframe
                  className="home-news-video"
                  src={videos[0].embedUrl}
                  title={videos[0].title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <video className="home-news-video" autoPlay muted loop playsInline preload="metadata">
                  <source src={videos[0].src} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="home-news-visual-copy">
              <span className="home-news-kicker">PR CENTER</span>
              <strong>{videos[0].title}</strong>
              <p>{videos[0].description}</p>
              <a className="home-news-play" href={videos[0].youtubeUrl ?? '/pr/youtube'} target={videos[0].youtubeUrl ? '_blank' : undefined} rel={videos[0].youtubeUrl ? 'noreferrer' : undefined}>
                <PlayCircle size={18} /> 영상 보기
              </a>
            </div>
          </article>

          <div className="home-news-board">
            <div className="home-news-board-head">
              <div>
                <p className="eyebrow">NEWS</p>
                <h2>홍보센터 소식</h2>
              </div>
              <Link className="home-news-more" to="/pr/news">
                더보기 <ArrowRight size={16} />
              </Link>
            </div>

            <div className="home-news-board-list">
              {newsItems.slice(0, 3).map((item) => (
                <Link
                  key={`${item.title}-${item.date}`}
                  className="home-news-board-item"
                  to={getNewsDetailPath(item.slug)}
                >
                  <span className="news-meta">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="home-news-board-foot">
                    <time dateTime={toDateTimeValue(item.date)}>{item.date}</time>
                    <span className="home-news-board-more">
                      기사 보기 <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block accent-surface">
        <div className="container section-heading split">
          <div>
            <p className="eyebrow">PROJECTS</p>
            <h2>대표 사업실적</h2>
          </div>
          <Link className="text-link" to="/performance/order-status">
            전체 사업실적 보기 <ArrowRight size={16} />
          </Link>
        </div>
        <div className="container project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="section-block dual-highlight">
        <div className="container dual-highlight-grid">
          <Link className="highlight-banner esg" to="/esg">
            <Leaf size={22} />
            <div>
              <p className="eyebrow">ESG MANAGEMENT</p>
              <h3>지속가능한 미래를 위한 책임 있는 경영</h3>
              <span>ESG경영 보기</span>
            </div>
          </Link>
          <Link className="highlight-banner recruit" to="/recruit">
            <Users2 size={22} />
            <div>
              <p className="eyebrow">CAREERS</p>
              <h3>함께 성장하며 미래를 설계할 인재를 기다립니다</h3>
              <span>인재채용 보기</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section-block partner-strip-block">
        <div className="container partner-network-panel">
          <div className="section-heading split partner-network-heading">
            <div>
              <p className="eyebrow">NETWORK</p>
              <h2>주거래 시공사 네트워크</h2>
            </div>
            <p className="section-summary">주요 시공사와의 협업 경험을 바탕으로 현장 대응력과 안정적인 공정 운영 체계를 구축하고 있습니다.</p>
          </div>
          <PartnerLogoWall partners={partnerShowcase} />
        </div>
      </section>
    </>
  );
}

function PartnerLogoWall({ partners }) {
  return (
    <div className="partner-logo-wall" aria-label="주요 파트너사 목록">
      <div className="partner-marquee-track">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="partner-marquee-group"
            aria-hidden={groupIndex === 1 ? 'true' : undefined}
          >
            {partners.map((partner) => (
              <article key={`${partner.name}-${groupIndex}`} className="partner-logo-tile">
                <div className="partner-logo-frame">
                  <img
                    className="partner-logo-image"
                    src={partner.logo}
                    alt={partner.alt ?? `${partner.name} 로고`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <strong>{partner.name}</strong>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const legacySectionMeta = {
  company: { english: 'COMPANY', korean: '회사소개' },
  performance: { english: 'Construction information', korean: '사업실적' },
  pr: { english: 'PR center', korean: '홍보센터' },
  esg: { english: '환경(Environment), 사회(Social), 지배구조(Governance)', korean: 'ESG' },
  recruit: { english: 'Careers', korean: '인재채용' },
  admin: { english: 'ADMIN', korean: '관리자' },
};

function getLegacyVisualSource(section, pageKey, page) {
  if (section === 'performance') {
    if (pageKey && projectCategories[pageKey]) {
      return projects.find((project) => project.category === pageKey)?.image ?? featuredProjects[0]?.image;
    }

    return featuredProjects[0]?.image ?? projects[0]?.image;
  }

  const directImage = page.blocks.find((block) => block.image)?.image;
  if (directImage) {
    return directImage;
  }

  const projectImage = page.blocks
    .find((block) => block.type === 'projectList' && block.items?.[0]?.image)
    ?.items?.[0]?.image;

  if (projectImage) {
    return projectImage;
  }

  switch (section) {
    case 'company':
      return featuredProjects[2]?.image ?? featuredProjects[0]?.image;
    case 'pr':
      return featuredProjects[1]?.image ?? featuredProjects[0]?.image;
    case 'esg':
      return featuredProjects[3]?.image ?? featuredProjects[0]?.image;
    case 'recruit':
      return featuredProjects[4]?.image ?? featuredProjects[0]?.image;
    default:
      return featuredProjects[0]?.image;
  }
}

function LegacyTopVisual({ section, navGroup, visualSource }) {
  const meta = legacySectionMeta[section] ?? { english: navGroup.label, korean: navGroup.label };

  return (
    <section className={`legacy-top-visual legacy-top-visual-${section}`}>
      <div className="container legacy-top-visual-inner">
        <div className="legacy-page-title">
          <h2>{meta.english}</h2>
          <h3>{meta.korean}</h3>
        </div>

        {navGroup.items.length > 0 ? (
          <nav className="legacy-sub-nav" aria-label={`${navGroup.label} 서브 메뉴`}>
            <ul className={`legacy-sub-nav-list columns-${Math.min(navGroup.items.length, 9)}`}>
              {navGroup.items.map((item) => (
                <li key={item.slug}>
                  <NavLink className="legacy-sub-nav-link" to={`/${section}/${item.slug}`}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </section>
  );
}

function SectionPage() {
  const { section, slug } = useParams();
  const navGroup = navigation.find((item) => item.section === section);

  if (!navGroup || !pages[section]) {
    return <NotFoundPage />;
  }

  const pageKey = slug ?? 'overview';
  const page = pages[section][pageKey] ?? null;

  if (!page) {
    return <NotFoundPage />;
  }

  const currentLabel = slug ? navGroup.items.find((item) => item.slug === slug)?.label ?? page.title : navGroup.label;
  const visualSource = getLegacyVisualSource(section, pageKey, page);
  const hasSummaryTitle = Boolean(page.title?.trim()) && page.title !== currentLabel;
  const hasSummaryDescription = Boolean(page.description?.trim());

  return (
    <div className={`subpage-shell legacy-page-shell legacy-section-${section}`}>
      <LegacyTopVisual section={section} navGroup={navGroup} visualSource={visualSource} />

      <div className="container legacy-container-box">
        <header className="legacy-title-header">
          <h2>{currentLabel}</h2>
        </header>

        <div className="legacy-contents">
          {hasSummaryTitle || hasSummaryDescription ? (
            <div className="legacy-summary-box">
              {hasSummaryTitle ? <strong>{page.title}</strong> : null}
              {hasSummaryDescription ? <p>{page.description}</p> : null}
            </div>
          ) : null}

          <PageBlocks blocks={page.blocks} />
        </div>
      </div>
    </div>
  );
}

function ProjectDetailPage() {
  const { projectName } = useParams();
  const navGroup = navigation.find((item) => item.section === 'performance');
  const project = projects.find((item) => item.name === projectName);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [projectName]);

  if (!navGroup || !project) {
    return <NotFoundPage />;
  }

  const detail = projectDetailPages[project.name];
  const gallery = detail.gallery?.length > 0
    ? detail.gallery
    : (project.image ? [{ src: project.image, alt: project.imageAlt ?? `${project.name} 대표 이미지` }] : []);

  const infoRows = [
    { label: '유 형', value: detail.detailType ?? detail.typeLabel ?? '.' },
    { label: '주 소', value: detail.address ?? '.' },
    { label: '발주처 / 자', value: project.client },
    { label: '시 공 사', value: project.contractor },
    { label: '규 모', value: detail.scale ?? '.' },
    { label: '공 사 기 간', value: detail.duration ?? project.duration.replaceAll(' ', '') },
    { label: '공 법', value: detail.method ?? '.' },
    { label: '공 사 범 위', value: detail.scope ?? '.' },
    { label: '시 공 자 재', value: detail.materials ?? '.' },
  ];

  const overviewItems = [
    { icon: HardHat, label: '분야', value: projectCategories[project.category] ?? '사업실적' },
    { icon: MapPinned, label: '지역', value: project.region },
    { icon: CalendarRange, label: '공사기간', value: detail.duration ?? project.duration },
    { icon: Building2, label: '상태', value: project.status },
  ];

  const activeGalleryImage = gallery[activeImageIndex] ?? null;

  return (
    <div className="subpage-shell legacy-page-shell legacy-section-performance">
      <LegacyTopVisual section="performance" navGroup={navGroup} visualSource={project.image} />

      <div className="container legacy-container-box">
        <header className="legacy-title-header">
          <h2>수주현황</h2>
        </header>

        <div className="legacy-contents">
          <section className="legacy-order-view">
            <div className="legacy-order-image">
              <div className="legacy-order-heading">
                <span className="legacy-order-type-badge">{projectCategories[project.category] ?? '사업실적'}</span>
                <h3>{project.name}</h3>
                {project.summary ? <p className="legacy-order-summary">{project.summary}</p> : null}
              </div>

              {activeGalleryImage ? (
                <div className="legacy-order-image-frame">
                  <img
                    src={activeGalleryImage.src}
                    alt={activeGalleryImage.alt ?? `${project.name} 이미지`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="legacy-order-image-frame legacy-order-image-empty">
                  <HardHat size={40} />
                </div>
              )}

              {gallery.length > 1 ? (
                <div className="legacy-gallery-thumb-list" aria-label="프로젝트 이미지 선택">
                  {gallery.map((image, index) => (
                    <button
                      key={`${image.src}-${index}`}
                      type="button"
                      className={`legacy-gallery-thumb ${index === activeImageIndex ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img src={image.src} alt={image.alt ?? `${project.name} 썸네일 ${index + 1}`} loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="legacy-order-overview-grid">
                {overviewItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="legacy-order-overview-card">
                      <span className="legacy-order-overview-label"><Icon size={16} /> {item.label}</span>
                      <strong>{item.value || '.'}</strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="legacy-order-content">
              <h4>사업실적</h4>
              <ul className="legacy-order-info-list">
                {infoRows.map((row) => (
                  <li key={row.label}>
                    <strong>{row.label}</strong>
                    <span>{row.value || '.'}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="legacy-order-bottom">
            <Link className="legacy-list-button" to="/performance/order-status">
              목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsDetailPage() {
  const { newsSlug } = useParams();
  const navGroup = navigation.find((item) => item.section === 'pr');
  const newsItem = newsItems.find((item) => item.slug === newsSlug);

  if (!navGroup || !newsItem) {
    return <NotFoundPage />;
  }

  const relatedNews = newsItems
    .filter((item) => item.slug !== newsItem.slug)
    .slice(0, 3);

  return (
    <div className="subpage-shell legacy-page-shell legacy-section-pr">
      <LegacyTopVisual section="pr" navGroup={navGroup} visualSource={newsItem.image} />

      <div className="container legacy-container-box">
        <header className="legacy-title-header">
          <h2>뉴스</h2>
        </header>

        <div className="legacy-contents">
          <article className="news-detail-shell">
            <header className="news-detail-header">
              <span className="news-meta">{newsItem.category}</span>
              <h3>{newsItem.title}</h3>
              <div className="news-detail-submeta">
                <time dateTime={toDateTimeValue(newsItem.date)}>{newsItem.date}</time>
                <a
                  className="news-detail-source"
                  href={newsItem.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  원문 출처 보기 <ArrowRight size={16} />
                </a>
              </div>
            </header>

            <div className="news-detail-media">
              <img
                src={newsItem.image}
                alt={newsItem.imageAlt ?? `${newsItem.title} 대표 이미지`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="news-detail-body">
              {newsItem.body.map((paragraph, index) => (
                <p key={`${newsItem.slug}-paragraph-${index + 1}`}>{paragraph}</p>
              ))}
            </div>
          </article>

          {relatedNews.length > 0 ? (
            <section className="news-detail-related">
              <div className="news-detail-related-header">
                <h4>다른 뉴스</h4>
              </div>
              <div className="news-list news-list-featured">
                {relatedNews.map((item) => (
                  <NewsCard key={`${item.slug}-related`} item={item} variant="featured" />
                ))}
              </div>
            </section>
          ) : null}

          <div className="legacy-order-bottom">
            <Link className="legacy-list-button" to="/pr/news">
              목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageBlocks({ blocks }) {
  return (
    <div className="page-blocks">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'companyGreeting':
            return <CompanyGreetingBlock key={`${block.title}-${index}`} block={block} />;
          case 'philosophyRows':
            return <PhilosophyRowsBlock key={`${block.title}-${index}`} block={block} />;
          case 'spotlight':
            return <SpotlightBlock key={`${block.title}-${index}`} block={block} />;
          case 'cards':
            return <CardsBlock key={`${block.title}-${index}`} block={block} />;
          case 'partnerGrid':
            return <PartnerGridBlock key={`${block.title}-${index}`} block={block} />;
          case 'hrPanels':
            return <HrPanelsBlock key={`hr-panels-${index}`} block={block} />;
          case 'timeline':
            return <TimelineBlock key={`${block.title}-${index}`} block={block} />;
          case 'projectList':
            return <ProjectListBlock key={`${block.title}-${index}`} block={block} />;
          case 'capabilityTables':
            return <CapabilityTablesBlock key={`${block.title}-${index}`} block={block} />;
          case 'metrics':
            return <MetricsBlock key={`${block.title}-${index}`} block={block} />;
          case 'newsList':
            return <NewsBlock key={`${block.title}-${index}`} block={block} />;
          case 'videoList':
            return <VideoBlock key={`${block.title}-${index}`} block={block} />;
          case 'faq':
            return <FaqBlock key={`${block.title}-${index}`} block={block} />;
          case 'steps':
            return <StepsBlock key={`${block.title}-${index}`} block={block} />;
          case 'media':
            return <MediaBlock key={`${block.title}-${index}`} block={block} />;
          case 'contact':
            return <ContactBlock key={`${block.title}-${index}`} block={block} />;
          case 'quote':
            return <QuoteBlock key={`${block.quote}-${index}`} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

function CompanyGreetingBlock({ block }) {
  return (
    <section className="content-block company-greeting-block">
      {block.statement ? (
        <div className="company-greeting-statement">
          <p>{block.statement}</p>
        </div>
      ) : null}

      <div className="company-greeting-layout">
        <div className="company-greeting-image-wrap">
          <div className="media-frame company-greeting-image">
            <img src={block.image} alt={block.imageAlt} loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="company-greeting-copy">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {block.signatureImage ? (
            <div className="company-greeting-signature">
              <img src={block.signatureImage} alt="대표 서명" loading="lazy" decoding="async" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function PhilosophyRowsBlock({ block }) {
  const philosophyIconMap = {
    quality: ShieldCheck,
    care: FileText,
    efficiency: Landmark,
  };

  return (
    <section className="content-block philosophy-rows-block">
      <div className="philosophy-rows">
        {block.rows.map((row) => (
          <article key={row.heading} className="philosophy-row">
            <div className="philosophy-row-heading">
              <span />
              <h3>{row.heading}</h3>
            </div>

            <div className="philosophy-row-body">
              {row.body ? (
                <p className="philosophy-row-description">{row.body}</p>
              ) : null}

              {row.bullets ? (
                <ul className="philosophy-bullet-list">
                  {row.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {row.cards ? (
                <div className="philosophy-value-cards">
                  {row.cards.map((item) => {
                    const Icon = philosophyIconMap[item.icon] ?? ShieldCheck;

                    return (
                      <article key={item.title} className="philosophy-value-card">
                        <div className="philosophy-value-icon">
                          <Icon size={30} />
                        </div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </article>
                    );
                  })}
                </div>
              ) : null}

              {row.slogans ? (
                <div className="philosophy-slogan-layout">
                  <div className="philosophy-slogan-copy">
                    {row.slogans.map((item) => (
                      <article key={item.title} className="philosophy-slogan-copy-item">
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </article>
                    ))}
                  </div>

                  {row.sloganVisual ? (
                    <div className="philosophy-slogan-visual">
                      <img
                        src={row.sloganVisual}
                        alt={row.sloganVisualAlt ?? `${row.heading} 이미지`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div className="philosophy-slogan-pills">
                      {row.slogans.map((item) => (
                        <div key={item.badge} className="philosophy-slogan-pill">
                          <span>{item.label}</span>
                          <strong>{item.badge}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SpotlightBlock({ block }) {
  return (
    <section className="content-block spotlight-block">
      <div className="content-heading">
        <h2>{block.title}</h2>
      </div>
      <div className="spotlight-grid">
        <div className="text-stack">
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="media-frame">
          <img src={block.image} alt={block.imageAlt} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

function CardsBlock({ block }) {
  return (
    <section className="content-block">
      {block.title ? (
        <div className="content-heading">
          <h2>{block.title}</h2>
        </div>
      ) : null}
      {block.image ? (
        <div className="media-frame card-block-image">
          <img src={block.image} alt={block.imageAlt} loading="lazy" decoding="async" />
        </div>
      ) : null}
      <div className="card-grid three-up">
        {block.items.map((item) => (
          item.to ? (
            <Link key={item.title} className="info-card action-card" to={item.to}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>
                바로가기 <ArrowRight size={16} />
              </span>
            </Link>
          ) : (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          )
        ))}
      </div>
    </section>
  );
}

function PartnerGridBlock({ block }) {
  if (block.variant === 'catalog') {
    return (
      <section className="content-block partner-catalog-block">
        <div className="partner-logo-grid" aria-label="주 거래 시공사 목록">
          {block.items.map((partner) => (
            <article key={partner.name} className="partner-grid-tile">
              <div className="partner-grid-frame">
                {partner.logo ? (
                  <img
                    className="partner-grid-image"
                    src={partner.logo}
                    alt={partner.alt ?? `${partner.name} 로고`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <strong className="partner-grid-text">{partner.name}</strong>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="content-block">
      {block.title ? (
        <div className="content-heading">
          <h2>{block.title}</h2>
        </div>
      ) : null}
      <PartnerLogoWall partners={block.items} />
    </section>
  );
}

function HrPanelsBlock({ block }) {
  return (
    <section className="content-block hr-panels-block">
      <div className="hr-panels-list">
        {block.items.map((item) => (
          <article key={item.title} className="hr-panel-row">
            <div className="hr-panel-title-card">
              <img
                src={item.titleImage}
                alt={item.titleImageAlt ?? `${item.title} 타이틀 이미지`}
                loading="lazy"
                decoding="async"
              />
              <div className="hr-panel-title-overlay">
                <span />
                <h3>{item.title}</h3>
              </div>
            </div>

            <div className="hr-panel-content-card">
              <img
                src={item.contentImage}
                alt={item.contentImageAlt ?? `${item.title} 안내 이미지`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TimelineBlock({ block }) {
  return (
    <section className="content-block">
      <div className="content-heading">
        <h2>주요 연혁</h2>
      </div>
      <div className="timeline-list">
        {block.items.map((item) => (
          <article key={item.year} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectListBlock({ block }) {
  return (
    <section className="content-block">
      <div className="content-heading split">
        <h2>{block.title}</h2>
        <div className="small-note">총 {block.items.length}건</div>
      </div>
      <div className="project-grid detailed">
        {block.items.map((project) => (
          <ProjectCard key={`${project.name}-${project.duration}`} project={project} detailed />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, detailed = false }) {
  const Icon = categoryIcons[project.category] ?? HardHat;

  return (
    <Link
      className={`project-card project-card-link ${detailed ? 'detailed' : ''}`}
      to={getProjectDetailPath(project.name)}
      aria-label={`${project.name} 상세페이지 보기`}
    >
      <div className="project-card-media">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? `${project.name} 대표 이미지`}
            loading="lazy"
          />
        ) : (
          <div className="project-card-placeholder" aria-hidden="true">
            <Icon size={36} />
          </div>
        )}
        {detailed ? (
          <div className="project-card-media-overlay">
            <span className="project-card-media-badge">{projectCategories[project.category]}</span>
            <strong>{project.highlight}</strong>
          </div>
        ) : null}
      </div>

      <div className="project-card-body">
        <h3>{project.name}</h3>
        <div className="project-meta">
          <span><MapPinned size={14} /> {project.region}</span>
          <span><CalendarRange size={14} /> {project.duration}</span>
        </div>
        <p>{project.summary}</p>
        <dl>
          <div>
            <dt>발주처</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>시공사</dt>
            <dd>{project.contractor}</dd>
          </div>
          <div>
            <dt>상태</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>
        <div className="project-card-footer">
          <strong className="project-highlight">{project.highlight}</strong>
          <span className="project-card-more">
            상세보기 <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function CapabilityTablesBlock({ block }) {
  const [openYear, setOpenYear] = useState(block.items[0]?.year ?? '');

  return (
    <section className="content-block capability-block">
      <div className="content-heading">
        <h2>{block.title}</h2>
      </div>
      <div className="capability-accordion">
        {block.items.map((item) => (
          <details
            key={item.year}
            className="capability-item"
            open={openYear === item.year}
            onToggle={(event) => {
              if (event.currentTarget.open) {
                setOpenYear(item.year);
              } else if (openYear === item.year) {
                setOpenYear('');
              }
            }}
          >
            <summary
              className="capability-summary"
              onClick={(event) => {
                event.preventDefault();
                setOpenYear((current) => (current === item.year ? '' : item.year));
              }}
            >
              <strong>{item.year}</strong>
              <span>{item.unit}</span>
            </summary>
            <div className="capability-table-wrap">
              <table className="capability-table">
                <thead>
                  <tr>
                    <th>업종</th>
                    <th>등록번호</th>
                    <th>시공능력평가액</th>
                    <th>지역순위</th>
                    <th>전국순위</th>
                  </tr>
                </thead>
                <tbody>
                  {item.rows.map((row) => (
                    <tr key={`${item.year}-${row.field}`}>
                      <td>{row.field}</td>
                      <td>{row.license}</td>
                      <td>{row.amount}</td>
                      <td>{row.regionalRank}</td>
                      <td>{row.nationalRank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function MetricsBlock({ block }) {
  return (
    <section className="content-block">
      <div className="content-heading">
        <h2>{block.title}</h2>
      </div>
      <div className="stats-grid compact">
        {block.items.map((item) => (
          <article key={item.label} className="stat-card compact">
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsCard({ item, variant = 'archive' }) {
  return (
    <Link className={`news-card-link news-card-link-${variant}`} to={getNewsDetailPath(item.slug)}>
      <article className={`news-card news-card-${variant}`}>
        <div className="news-card-media">
          {item.image ? (
            <img
              src={item.image}
              alt={item.imageAlt ?? `${item.title} 대표 이미지`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="news-card-placeholder">
              <Newspaper size={40} />
            </div>
          )}
        </div>

        <div className="news-card-body">
          <span className="news-meta">{item.category} · {item.date}</span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <span className="news-card-more">
            기사 보기 <ArrowRight size={16} />
          </span>
        </div>
      </article>
    </Link>
  );
}

function NewsBlock({ block }) {
  const variant = block.items.length <= 3 ? 'featured' : 'archive';

  return (
    <section className="content-block">
      <div className="content-heading">
        <h2>{block.title}</h2>
      </div>
      <div className={`news-list news-list-${variant}`}>
        {block.items.map((item) => (
          <NewsCard key={`${item.title}-${item.date}`} item={item} variant={variant} />
        ))}
      </div>
    </section>
  );
}

function VideoBlock({ block }) {
  return (
    <section className="content-block">
      <div className="content-heading">
        <h2>{block.title}</h2>
      </div>
      <div className="video-list">
        {block.items.map((item) => (
          <article key={item.title} className="video-card">
            {item.placeholder ? (
              <div className="video-placeholder large">
                <PlayCircle size={56} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="video-player-wrapper">
                  {item.embedUrl ? (
                    <iframe
                      src={item.embedUrl}
                      title={item.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <video controls preload="none" playsInline>
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="video-copy">
                  <h3>{item.title}</h3>
                  {item.publishedText || item.duration || item.views ? (
                    <div className="video-meta">
                      {item.publishedText ? <span>{item.publishedText}</span> : null}
                      {item.duration ? <span>{item.duration}</span> : null}
                      {item.views ? <span>{item.views}</span> : null}
                    </div>
                  ) : null}
                  <p>{item.description}</p>
                  {item.youtubeUrl ? (
                    <a className="text-link" href={item.youtubeUrl} target="_blank" rel="noreferrer">
                      유튜브에서 보기 <ArrowRight size={16} />
                    </a>
                  ) : null}
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqBlock({ block }) {
  return (
    <section className="content-block">
      <div className="content-heading">
        <h2>자주 묻는 질문</h2>
      </div>
      <div className="faq-list">
        {block.items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function StepsBlock({ block }) {
  return (
    <section className="content-block">
      <div className="content-heading">
        <h2>{block.title}</h2>
      </div>
      <ol className="steps-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}

function MediaBlock({ block }) {
  return (
    <section className="content-block">
      <div className="content-heading">
        <h2>{block.title}</h2>
      </div>
      <div className={`media-frame media-block-frame ${block.compact ? 'compact' : ''} ${block.variant ? `media-block-frame--${block.variant}` : ''}`}>
        <img src={block.image} alt={block.imageAlt} loading="lazy" decoding="async" />
      </div>
    </section>
  );
}

function ContactBlock({ block }) {
  return (
    <section className="content-block contact-block">
      <div className="content-heading">
        <h2>{block.title}</h2>
      </div>
      <div className="contact-grid">
        <div className="info-card contact-card">
          <h3>주소</h3>
          <p>{block.address}</p>
          <h3>대표 연락처</h3>
          <p>TEL. {block.tel}</p>
          <p>FAX. {block.fax}</p>
          <p>E-mail. {block.email}</p>
        </div>
        <div className="info-card contact-card map-card">
          <h3>방문 안내</h3>
          <p>{block.details[0]}</p>
          <p>{block.details[1]}</p>
          <a className="text-link" href="https://www.taeilcnt.co.kr/" target="_blank" rel="noreferrer">
            기존 홈페이지 정보 확인 <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function QuoteBlock({ block }) {
  return (
    <section className="content-block quote-block">
      <blockquote>{block.quote}</blockquote>
      <p>{block.caption}</p>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="section-block not-found-block">
      <div className="container not-found-inner">
        <p className="eyebrow">404</p>
        <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
        <p>메뉴를 다시 확인하시거나 메인 페이지에서 원하는 정보를 찾아보세요.</p>
        <Link className="button primary" to="/">메인으로 이동</Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link className="brand footer-brand" to="/">
            <img src={brand.logo} alt="태일씨앤티 로고" />
            <span>
              <strong>{brand.name}</strong>
              <small>{brand.englishName}</small>
            </span>
          </Link>
          <p className="footer-address">{brand.address}</p>
          <p className="footer-contact">
            TEL. {brand.tel} &nbsp; | &nbsp; FAX. {brand.fax} &nbsp; | &nbsp; E-mail. {brand.email}
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} TAEIL CONSTRUCTION & TECHNICAL CO., LTD. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default App;
