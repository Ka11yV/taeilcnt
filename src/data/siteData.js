import logo from '../assets/logo.png';
import greetingImage from '../assets/greeting.jpg';
import philosophyImage from '../assets/philosophy.png';
import organizationImage from '../assets/organization.jpg';
import esgOverviewImage from '../assets/esg-overview.png';
import ethicsImage from '../assets/ethics.png';
import environmentImage from '../assets/environment.jpg';
import talentImage from '../assets/talent.jpg';
import rewardImage from '../assets/reward.jpg';
import evaluationImage from '../assets/evaluation.jpg';
import signatureImage from '../assets/signature.jpg';
import companyIntroVideo from '../assets/company-intro.mp4';
import samsungCtLogo from '../assets/partners/samsung-ct.svg';
import samsungEaLogo from '../assets/partners/samsung-ea.svg';
import hyundaiEngineeringLogo from '../assets/partners/hyundai-engineering.png';
import gsEcLogo from '../assets/partners/gs-ec.png';
import dlEcLogo from '../assets/partners/dl-ec.png';
import skEcoplantLogo from '../assets/partners/sk-ecoplant.png';
import cjLogisticsLogo from '../assets/partners/cj-logistics.png';
import hlDniHallaLogo from '../assets/partners/hl-dni-halla.png';
import daewooEncLogo from '../assets/partners/daewoo-enc.png';
import kccConstructionLogo from '../assets/partners/kcc-construction.png';
import projectDaisoImage from '../assets/projects/project-daiso-sejong-online-center.jpg';
import projectDigitalEmpireImage from '../assets/projects/project-digital-empire-pyeongchon-bizvalley.jpg';
import projectDogokDongsinImage from '../assets/projects/project-dogok-dongsin-apartment.jpg';
import projectBucheonSosabonImage from '../assets/projects/project-bucheon-sosabon-mixed-use.jpg';
import projectMontreaHannamImage from '../assets/projects/project-montrea-hannam.jpg';
import projectGwacheonKnowledgeTownImage from '../assets/projects/project-gwacheon-knowledge-town.jpg';
import projectSamsungChangwonHospitalImage from '../assets/projects/project-samsung-changwon-hospital.jpg';
import projectGeojeJangpyeongWelfareImage from '../assets/projects/project-geoje-jangpyeong-welfare.jpg';
import projectVisangEducationImage from '../assets/projects/project-visang-education-hq.jpg';
import projectP3SubstationImage from '../assets/projects/project-p3-154kv-substation-ph3.jpg';
import projectCookitNonsanImage from '../assets/projects/project-cj-cookit-nonsan.jpg';
import projectPyeongtaekP3AirPreventionImage from '../assets/projects/project-pyeongtaek-p3-air-prevention.jpg';
import projectBrightenYeouidoImage from '../assets/projects/project-brighten-yeouido.jpg';
import projectPangyoAlphadomImage from '../assets/projects/project-pangyo-alphadom.jpg';
import projectGasanDatacenterImage from '../assets/projects/project-gasan-datacenter.jpg';
import projectSuwonGwanggyoEmartImage from '../assets/projects/project-suwon-gwanggyo-emart.jpg';
import projectHanamMisaImage from '../assets/projects/project-hanam-misa-11-1bl.jpg';
import projectAnseongLogisticsImage from '../assets/projects/project-anseong-logistics.jpg';
import projectPyeongtaekCdcLogisticsImage from '../assets/projects/project-pyeongtaek-cdc-logistics.jpg';
import projectHankookilboImage from '../assets/projects/project-hankookilbo-yongsan-hq.jpg';
import projectWestinImage from '../assets/projects/project-westin-seoul-parnas.jpg';
import projectYonginOblImage from '../assets/projects/project-yongin-cluster-obl.jpg';
import projectYonginUtilityTunnelImage from '../assets/projects/project-yongin-cluster-utility-tunnel.jpg';

export const brand = {
  name: '태일씨앤티',
  englishName: 'TAEIL CONSTRUCTION & TECHNICAL CO., LTD.',
  slogan: '신뢰로 짓는 가치, 미래를 세우는 기술',
  logo,
  address: '서울시 금천구 가산디지털2로 101, 한라원앤원타워 B동 17층 1701호',
  tel: '070-8897-0761',
  fax: '02-2101-2141',
  email: 'taeilcnt@taeilcnt.co.kr',
};

export const navigation = [
  {
    label: '회사소개',
    section: 'company',
    items: [
      { label: '인사말', slug: 'greeting' },
      { label: '경영이념', slug: 'philosophy' },
      { label: '회사연혁', slug: 'history' },
      { label: '주거래 시공사', slug: 'partners' },
      { label: '업·면허/인증', slug: 'certifications' },
      { label: '찾아오시는 길', slug: 'location' },
    ],
  },
  {
    label: '사업실적',
    section: 'performance',
    items: [
      { label: '공사수주 현황', slug: 'order-status' },
      { label: '주택', slug: 'housing' },
      { label: '업무시설', slug: 'office' },
      { label: '교육/의료', slug: 'education-medical' },
      { label: '플랜트', slug: 'plant' },
      { label: '초고층', slug: 'high-rise' },
      { label: '판매시설', slug: 'retail' },
      { label: '기타', slug: 'others' },
      { label: 'Project Map', slug: 'project-map' },
    ],
  },
  {
    label: '홍보센터',
    section: 'pr',
    items: [
      { label: 'News', slug: 'news' },
      { label: '유튜브', slug: 'youtube' },
    ],
  },
  {
    label: 'ESG경영',
    section: 'esg',
    items: [],
  },
  {
    label: '인재채용',
    section: 'recruit',
    items: [
      { label: '직무소개', slug: 'jobs' },
      { label: '인사제도', slug: 'hr-system' },
      { label: '채용가이드', slug: 'guide' },
      { label: '복리후생', slug: 'benefits' },
      { label: '채용FAQ', slug: 'faq' },
    ],
  },
  {
    label: '관리자',
    section: 'admin',
    items: [],
  },
];

export const stats = [
  { value: '500+', label: '누적 수행 프로젝트', desc: '철근·콘크리트 분야 중심의 시공 경험' },
  { value: '200+', label: '임직원·현장 인력 네트워크', desc: '책임 있는 공정 운영을 위한 조직력' },
  { value: '30+', label: '면허·인증 및 수상', desc: '품질·환경·안전 중심의 경쟁력' },
  { value: '1994', label: '창립 기반', desc: '지속 성장의 출발점' },
];

export const newsItems = [
  {
    title: '한국청소년육성회 금천지구회 모범청소년 장학금 수여 행사 참여',
    date: '2024.05.20',
    category: '홍보',
    summary: '지역사회와 함께 성장하는 기업으로서 장학금 수여 행사에 참여하고 사회공헌 활동을 이어갔습니다.',
  },
  {
    title: '김경수 대표, 한국산업단지경영자연합회 서울 6대 회장 취임',
    date: '2024.05.15',
    category: '기업소식',
    summary: '산업 생태계와의 협력 기반을 강화하고 현장 중심의 경영 메시지를 확장했습니다.',
  },
  {
    title: '태일씨앤티, 제2회 G밸리 지산학한마당 참가',
    date: '2024.05.10',
    category: '홍보',
    summary: '지역 산학 협력 네트워크 확대와 인재 채용 브랜딩 강화를 위해 행사에 참가했습니다.',
  },
  {
    title: 'Westin Seoul Parnas 리모델링공사 수주',
    date: '2025.02.01',
    category: '수주',
    summary: '고난도 도심 복합시설 리모델링 공사 수주를 통해 프리미엄 프로젝트 수행 역량을 강화했습니다.',
  },
];

export const videos = [
  {
    title: '태일씨앤티 기업 소개 영상',
    description: '태일씨앤티의 사업영역과 조직, 핵심 메시지를 담은 공식 회사 소개 영상입니다.',
    src: companyIntroVideo,
    youtubeUrl: 'https://www.youtube.com/watch?v=-BP43hf0jIs',
    embedUrl: 'https://www.youtube-nocookie.com/embed/-BP43hf0jIs?rel=0&modestbranding=1',
  },
  {
    title: '현장 홍보 콘텐츠',
    description: '추가 홍보 영상은 최적화 후 순차적으로 공개 예정입니다. 현재는 뉴스와 회사 소개 영상 중심으로 운영합니다.',
    placeholder: true,
  },
];

export const partnerGroups = [
  '삼성물산',
  '삼성엔지니어링',
  '현대엔지니어링',
  'GS건설',
  'DL이앤씨',
  'DL건설',
  'KCC건설',
  'SK에코플랜트',
  'CJ대한통운',
  'HL D&I 한라',
  '대우건설',
  '신세계건설',
  '고려개발',
  '벽산엔지니어링',
];

export const partnerShowcase = [
  { name: '삼성물산', logo: samsungCtLogo, alt: '삼성물산 로고' },
  { name: '삼성엔지니어링', logo: samsungEaLogo, alt: '삼성E&A 로고' },
  { name: '현대엔지니어링', logo: hyundaiEngineeringLogo, alt: '현대엔지니어링 로고' },
  { name: 'GS건설', logo: gsEcLogo, alt: 'GS건설 로고' },
  { name: 'DL이앤씨', logo: dlEcLogo, alt: 'DL이앤씨 로고' },
  { name: 'KCC건설', logo: kccConstructionLogo, alt: 'KCC건설 로고' },
  { name: 'SK에코플랜트', logo: skEcoplantLogo, alt: 'SK에코플랜트 로고' },
  { name: 'CJ대한통운', logo: cjLogisticsLogo, alt: 'CJ대한통운 로고' },
  { name: 'HL D&I 한라', logo: hlDniHallaLogo, alt: 'HL D&I 한라 로고' },
  { name: '대우건설', logo: daewooEncLogo, alt: '대우건설 로고' },
];

const partnerShowcaseNameSet = new Set(partnerShowcase.map((partner) => partner.name));
const partnerExtendedGroups = partnerGroups.filter((partner) => !partnerShowcaseNameSet.has(partner));

export const projectCategories = {
  housing: '주택',
  office: '업무시설',
  'education-medical': '교육/의료',
  plant: '플랜트',
  'high-rise': '초고층',
  retail: '판매시설',
  others: '기타',
};

export const projects = [
  {
    name: '다이소 세종 온라인센터',
    category: 'retail',
    region: '세종',
    client: '(주)아성다이소',
    contractor: 'KCC건설',
    duration: '2025.06.01 ~ 2026.09.11',
    status: '진행',
    summary: '세종 권역 온라인 물류 거점 구축 프로젝트로, 물류 동선과 구조 시공 안정성이 중요한 현장입니다.',
    highlight: '온라인센터',
    image: projectDaisoImage,
    imageAlt: '다이소 세종 온라인센터 조감도',
  },
  {
    name: '용인 Cluster 1기 OBL',
    category: 'others',
    region: '경기',
    client: '에스케이하이닉스(주)',
    contractor: '에스케이에코플랜트(주)',
    duration: '2025.02.14 ~ 2027.06.30',
    status: '진행',
    summary: '대규모 클러스터 조성에 포함된 산업 인프라 프로젝트로, 장기 공정 대응과 품질 관리가 중요한 현장입니다.',
    highlight: '클러스터 인프라',
    image: projectYonginOblImage,
    imageAlt: '용인 Cluster 1기 OBL 조감도',
  },
  {
    name: '용인 Cluster 1기 공동구',
    category: 'others',
    region: '경기',
    client: '에스케이하이닉스(주)',
    contractor: '에스케이에코플랜트(주)',
    duration: '2024.10.23 ~ 2027.06.30',
    status: '진행',
    summary: '클러스터 기반시설 운영을 위한 공동구 공사로, 산업시설 대응형 구조 시공 경험을 보여주는 프로젝트입니다.',
    highlight: '공동구',
    image: projectYonginUtilityTunnelImage,
    imageAlt: '용인 Cluster 1기 공동구 조감도',
  },
  {
    name: '몬트레아 한남 신축공사',
    category: 'housing',
    region: '서울',
    client: '민간 개발사업',
    contractor: 'KCC건설',
    duration: '2022.01 ~ 진행',
    status: '수행',
    summary: '도심형 주거 프로젝트에서 고품질 RC 시공 역량을 확보한 사례입니다.',
    highlight: '도심 주거',
    image: projectMontreaHannamImage,
    imageAlt: '몬트레아 한남 신축공사 조감도',
  },
  {
    name: '부천 소사본동 주상복합 신축공사',
    category: 'housing',
    region: '경기',
    client: '민간 개발사업',
    contractor: 'HL D&I 한라',
    duration: '2021.04 ~ 수행',
    status: '준공',
    summary: '주거와 상업 기능이 결합된 주상복합 현장에서 공정 대응력을 입증했습니다.',
    highlight: '주상복합',
    image: projectBucheonSosabonImage,
    imageAlt: '부천 소사본동 주상복합 신축공사 조감도',
  },
  {
    name: '도곡동 동신아파트 주택재건축',
    category: 'housing',
    region: '서울',
    client: '재건축 조합',
    contractor: '한라',
    duration: '2014.06 ~ 수행',
    status: '준공',
    summary: '도심 재건축 프로젝트에서 안정적인 철근·콘크리트 공정을 수행했습니다.',
    highlight: '재건축',
    image: projectDogokDongsinImage,
    imageAlt: '도곡동 동신아파트 주택재건축 조감도',
  },
  {
    name: 'Westin Seoul Parnas 리모델링공사',
    category: 'office',
    region: '서울',
    client: '파르나스호텔㈜',
    contractor: 'GS건설(주)',
    duration: '2025.01.22 ~ 2025.08.31',
    status: '진행',
    summary: '도심 핵심 입지의 리모델링 공사로 고난도 공정 관리가 요구되는 프로젝트입니다.',
    highlight: '리모델링',
    image: projectWestinImage,
    imageAlt: 'Westin Seoul Parnas 리모델링공사 전경',
  },
  {
    name: '한국일보용산사옥 신축공사',
    category: 'office',
    region: '서울',
    client: '(주)한국일보사',
    contractor: 'CJ대한통운(주)',
    duration: '2024.10.21 ~ 2027.01.15',
    status: '진행',
    summary: '연면적 22,286㎡ 규모의 도심 업무시설 신축 공사입니다.',
    highlight: '업무시설',
    image: projectHankookilboImage,
    imageAlt: '한국일보용산사옥 신축공사 야경 조감도',
  },
  {
    name: '디지털 엠파이어 평촌 비즈밸리 신축공사',
    category: 'office',
    region: '경기',
    client: '주식회사 케이티앤지',
    contractor: '디엘건설 주식회사',
    duration: '2024.08.21 ~ 2026.06.30',
    status: '진행',
    summary: '지하 4층, 지상 18층 규모의 복합 비즈니스 시설입니다.',
    highlight: '비즈밸리',
    image: projectDigitalEmpireImage,
    imageAlt: '디지털 엠파이어 평촌 비즈밸리 신축공사 조감도',
  },
  {
    name: '과천 지식정보타운 11-3블럭 신사옥 신축공사',
    category: 'office',
    region: '경기',
    client: '(주)다원시스',
    contractor: 'KCC건설',
    duration: '2024.01 ~ 2026.02',
    status: '진행',
    summary: '지식산업센터형 신사옥 프로젝트로, 고정밀 공정 수행 역량이 반영되었습니다.',
    highlight: '지식산업센터',
    image: projectGwacheonKnowledgeTownImage,
    imageAlt: '과천 지식정보타운 11-3블럭 신사옥 신축공사 조감도',
  },
  {
    name: '삼성창원병원 제3관',
    category: 'education-medical',
    region: '경남',
    client: '삼성창원병원',
    contractor: '삼성물산',
    duration: '2014.04 ~ 수행',
    status: '준공',
    summary: '의료시설 특성에 맞춘 품질 중심 시공으로 병원 프로젝트 경험을 축적했습니다.',
    highlight: '의료시설',
    image: projectSamsungChangwonHospitalImage,
    imageAlt: '삼성창원병원 제3관 증축공사 이미지',
  },
  {
    name: '거제 장평 종합복지관',
    category: 'education-medical',
    region: '경남',
    client: '지역 공공시설',
    contractor: '삼성중공업',
    duration: '2014.08 ~ 수행',
    status: '준공',
    summary: '지역사회 기반 복지시설 공사로 공공성 있는 프로젝트 수행 경험을 확보했습니다.',
    highlight: '복지시설',
    image: projectGeojeJangpyeongWelfareImage,
    imageAlt: '거제 장평 종합복지관 신축공사 이미지',
  },
  {
    name: '비상교육 사옥 신축공사',
    category: 'education-medical',
    region: '경기',
    client: '비상교육',
    contractor: '한라',
    duration: '2022.02 ~ 수행',
    status: '준공',
    summary: '교육 기업의 본사 시설 구축 경험을 바탕으로 교육·연구형 시설 포트폴리오를 확장했습니다.',
    highlight: '교육시설',
    image: projectVisangEducationImage,
    imageAlt: '비상교육 사옥 신축공사 조감도',
  },
  {
    name: 'P3 154KV 변전소(Ph.3) 신축공사',
    category: 'plant',
    region: '경기',
    client: '산업단지 전력 인프라',
    contractor: '삼성엔지니어링',
    duration: '2022.01 ~ 수행',
    status: '준공',
    summary: '산업 인프라 설비 프로젝트로 공정 안전성과 정밀 시공 역량을 보여준 사례입니다.',
    highlight: '전력 인프라',
    image: projectP3SubstationImage,
    imageAlt: 'P3 154KV 변전소(Ph.3) 신축공사 이미지',
  },
  {
    name: 'CJ제일제당 논산공장 COOKIT 공장 신축공사',
    category: 'plant',
    region: '충남',
    client: 'CJ제일제당',
    contractor: 'CJ',
    duration: '2021.04 ~ 수행',
    status: '준공',
    summary: '식품 제조공장 프로젝트에서 생산시설 특화 공정 경험을 확보했습니다.',
    highlight: '제조공장',
    image: projectCookitNonsanImage,
    imageAlt: 'CJ제일제당 논산공장 COOKIT 공장 신축공사 이미지',
  },
  {
    name: '평택전자 P3 대기방지 신축공사',
    category: 'plant',
    region: '경기',
    client: '전자산업 인프라',
    contractor: '삼성엔지니어링',
    duration: '2021.07 ~ 수행',
    status: '준공',
    summary: '전자산업 공정 인프라에 필요한 플랜트형 시공 경험을 축적했습니다.',
    highlight: '산업플랜트',
    image: projectPyeongtaekP3AirPreventionImage,
    imageAlt: '평택전자 P3 대기방지 신축공사 이미지',
  },
  {
    name: '브라이튼 여의도 복합시설 신축공사 1공구',
    category: 'high-rise',
    region: '서울',
    client: '복합개발사업',
    contractor: 'GS건설',
    duration: '2020.04 ~ 수행',
    status: '준공',
    summary: '복합개발형 초고층 프로젝트로 도심 고난도 시공 경험을 확대했습니다.',
    highlight: '복합시설',
    image: projectBrightenYeouidoImage,
    imageAlt: '브라이튼 여의도 복합시설 신축공사 1공구 이미지',
  },
  {
    name: '판교 알파돔 6-1블럭',
    category: 'high-rise',
    region: '경기',
    client: '복합개발사업',
    contractor: '삼성물산',
    duration: '2019 ~ 2020',
    status: '준공',
    summary: '판교 핵심 상업지구의 대형 복합개발 프로젝트 수행 실적입니다.',
    highlight: '판교',
    image: projectPangyoAlphadomImage,
    imageAlt: '판교 알파돔 6-1블럭 복합시설 개발 이미지',
  },
  {
    name: '가산데이터센터 신축공사',
    category: 'high-rise',
    region: '서울',
    client: '데이터센터 개발사업',
    contractor: 'DL이앤씨',
    duration: '2023.11 ~ 수행',
    status: '진행',
    summary: '고하중·고정밀 시공이 요구되는 데이터센터 프로젝트입니다.',
    highlight: '데이터센터',
    image: projectGasanDatacenterImage,
    imageAlt: '가산데이터센터 신축공사 조감도',
  },
  {
    name: '수원 광교 이마트',
    category: 'retail',
    region: '경기',
    client: '신세계그룹',
    contractor: '신세계건설',
    duration: '2014.07 ~ 수행',
    status: '준공',
    summary: '대형 판매시설 프로젝트 경험을 통해 상업시설 포트폴리오를 확장했습니다.',
    highlight: '판매시설',
    image: projectSuwonGwanggyoEmartImage,
    imageAlt: '수원 광교 이마트 신축현장 이미지',
  },
  {
    name: '하남 미사 중심상업지역 11-1BL',
    category: 'retail',
    region: '경기',
    client: '민간 개발사업',
    contractor: '현대엔지니어링',
    duration: '2018.01 ~ 수행',
    status: '준공',
    summary: '상업지역 복합개발 프로젝트로 도심 상권형 공정 경험을 확보했습니다.',
    highlight: '상업지구',
    image: projectHanamMisaImage,
    imageAlt: '하남 미사 중심상업지역 11-1BL 복합시설 조감도',
  },
  {
    name: '안성 물류센터 신축공사',
    category: 'others',
    region: '경기',
    client: '페블스톤 자산운용',
    contractor: 'HL D&I 한라',
    duration: '2023.03 ~ 2024.09',
    status: '준공',
    summary: '대규모 물류센터 시공 프로젝트로 공정 대응과 품질 관리 역량을 보여주었습니다.',
    highlight: '물류센터',
    image: projectAnseongLogisticsImage,
    imageAlt: '안성 물류센터 신축공사 조감도',
  },
  {
    name: '평택 CDC 물류창고',
    category: 'others',
    region: '경기',
    client: '삼성전자',
    contractor: 'CJ대한통운',
    duration: '2025.07 ~ 2027.05',
    status: '예정',
    summary: '산업 물류 기능을 지원하는 특화 창고 프로젝트입니다.',
    highlight: '물류창고',
    image: projectPyeongtaekCdcLogisticsImage,
    imageAlt: '평택 CDC 물류창고 조감도',
  },
];

const recentOrderProjectNames = [
  '다이소 세종 온라인센터',
  '용인 Cluster 1기 OBL',
  'Westin Seoul Parnas 리모델링공사',
  '용인 Cluster 1기 공동구',
  '한국일보용산사옥 신축공사',
  '디지털 엠파이어 평촌 비즈밸리 신축공사',
];

export const recentOrderProjects = recentOrderProjectNames
  .map((name) => projects.find((project) => project.name === name))
  .filter(Boolean);

const additionalOrderProjects = projects.filter(
  (project) => ['진행', '예정'].includes(project.status) && !recentOrderProjectNames.includes(project.name),
);

export const featuredProjects = recentOrderProjects;

const projectDetailOverrides = {
  '다이소 세종 온라인센터': {
    address: '세종 권역 온라인 물류 거점',
    scale: '온라인센터 중심의 물류 거점 시설',
    method: '철근·콘크리트 구조 시공과 물류동선 대응형 공정 관리',
    scope: '본동 및 부속 구조물 중심의 RC 공정 수행',
    materials: '거푸집, 철근, 콘크리트 등 물류센터형 구조 시공 시스템 적용',
    overview: [
      '세종 권역 온라인 물류 거점 구축 프로젝트로, 대규모 물류 운영에 대응하는 구조 안정성과 효율적인 공정 관리가 중요한 현장입니다.',
      '기존 태일씨앤티 공사수주 상세페이지의 정보 구성 방식을 반영해 핵심 시공 정보를 한눈에 확인할 수 있도록 재구성했습니다.',
    ],
    keyPoints: [
      '온라인 물류 거점에 적합한 구조 공정 대응',
      '장기 일정 기반의 품질·안전 중심 현장 관리',
      '물류 운영 동선을 고려한 협력사 공정 조율',
    ],
  },
  '용인 Cluster 1기 OBL': {
    address: '경기 용인 반도체 클러스터 권역',
    scale: '반도체 클러스터 기반 산업 인프라 시설',
    method: '장기 공정 대응형 철근·콘크리트 구조 시공',
    scope: '클러스터 지원시설 구조 공정 및 기반 인프라 대응',
    materials: '클러스터 현장 특성에 맞춘 거푸집·철근·콘크리트 시스템 적용',
    overview: [
      '용인 Cluster 1기 OBL은 반도체 클러스터 조성의 기반이 되는 지원 인프라 프로젝트로, 장기간의 공정 안정성과 품질 관리가 핵심입니다.',
      '태일씨앤티는 산업 인프라 현장 경험을 바탕으로 구조 공정의 정확도와 일정 대응력을 강화하고 있습니다.',
    ],
    keyPoints: [
      '산업 인프라형 장기 공정 대응',
      '대형 클러스터 현장 맞춤 품질 관리',
      '협력사 연계형 구조 시공 운영',
    ],
  },
  'Westin Seoul Parnas 리모델링공사': {
    address: '서울 도심 핵심 복합시설 권역',
    scale: '호텔 및 복합시설 리모델링 프로젝트',
    method: '기존 구조물 대응형 리모델링 공정 관리',
    scope: '도심 복합시설 리모델링 관련 구조 공정 수행',
    materials: '기존 시설 조건을 고려한 거푸집·철근·콘크리트 및 보강 공정 적용',
    overview: [
      'Westin Seoul Parnas 리모델링공사는 도심 핵심 입지의 복합시설을 대상으로 한 프로젝트로, 협소한 현장 조건과 정밀한 공정 조율이 중요합니다.',
      '기존 건축물과 신규 공정이 맞물리는 리모델링 특성을 고려해 안정성과 완성도를 함께 확보하는 방향으로 상세페이지를 구성했습니다.',
    ],
    keyPoints: [
      '도심 리모델링 현장 특화 공정 운영',
      '기존 시설과 연계되는 정밀 시공 대응',
      '짧은 일정 내 품질 확보 중심 관리',
    ],
  },
  '용인 Cluster 1기 공동구': {
    address: '경기 용인 반도체 클러스터 권역',
    scale: '클러스터 기반시설 운영을 위한 공동구 공사',
    method: '산업 인프라형 철근·콘크리트 구조 시공',
    scope: '공동구 구조체 및 기반시설 관련 공정 수행',
    materials: '공동구 특성에 적합한 거푸집·철근·콘크리트 시스템 적용',
    overview: [
      '용인 Cluster 1기 공동구는 클러스터 기반시설 운영의 핵심이 되는 프로젝트로, 장거리 선형 구조물에 대한 공정 정합성과 품질 유지가 중요합니다.',
      '태일씨앤티는 산업시설 대응형 구조 시공 경험을 바탕으로 공동구 공사의 안정성과 시공 효율을 높이고 있습니다.',
    ],
    keyPoints: [
      '선형 구조물 공정 정합성 확보',
      '장기 기반시설 현장 맞춤 품질 관리',
      '클러스터 운영 인프라에 적합한 구조 대응',
    ],
  },
  '한국일보용산사옥 신축공사': {
    address: '서울 용산구 권역',
    scale: '건축면적 : 1,050m²(317.73PY)\n연면적 : 22,286m²(6,741.63PY)',
    method: '도심 업무시설형 철근·콘크리트 구조 시공',
    scope: '업무시설 본동 구조 공정 및 관련 부속 시설 대응',
    materials: '도심 업무시설 현장에 맞춘 거푸집·철근·콘크리트 시스템 적용',
    overview: [
      '한국일보용산사옥 신축공사는 서울 도심의 업무시설 프로젝트로, 제한된 도심 현장 환경 속에서도 정밀한 공정 관리와 일정 대응이 중요한 현장입니다.',
      '업무시설 특성에 맞춘 구조 시공과 협력사 조율을 통해 안정적인 프로젝트 수행 체계를 구축하고 있습니다.',
    ],
    keyPoints: [
      '도심 업무시설 신축 현장 대응',
      '연면적 22,286m² 규모의 구조 공정 관리',
      '발주처·시공사 협업 기반 일정 운영',
    ],
  },
  '디지털 엠파이어 평촌 비즈밸리 신축공사': {
    address: '경기 안양시 동안구 호계동 533-1',
    scale: '지하4층 지상18층\n건축면적 : 7,083m²(2,142py)\n연면적 : 99,168m²(29,998py)',
    method: 'OPEN-CUT, RC',
    scope: '지하4층 지상18층',
    materials: '[지하층]\n기둥, 벽체 : 유로폼\n슬래브 : 데크\nELE. PIT : 갱폼\n[지상층]\n외부 벽체 : 갱폼\n내부 벽체, 기둥 : 유로폼\n슬래브 : 데크\nELE. PIT : 갱폼',
    overview: [
      '디지털 엠파이어 평촌 비즈밸리 신축공사는 지하 4층, 지상 18층 규모의 복합 비즈니스 시설 프로젝트로, 대형 업무시설 공정 운영 경험을 보여주는 현장입니다.',
      '기존 태일씨앤티 상세페이지 검색 인덱스에서 확인 가능한 규모·공법·범위·자재 항목을 반영해 리뉴얼 상세페이지에서도 정보 구조를 유지했습니다.',
    ],
    keyPoints: [
      '대형 비즈니스 시설 구조 공정 관리',
      'OPEN-CUT, RC 기반 공법 운영',
      '지하층·지상층 자재 시스템 분리 적용',
    ],
  },
  '과천 지식정보타운 11-3블럭 신사옥 신축공사': {
    address: '경기 과천시 문원동 887-2, 897-2',
    scale: '지하5층, 지상15층\n연면적 : 54,170m²\n건축면적 : 3,745m²',
    method: 'SRC, CIP+CWS (UP-UP공법)',
    scope: '철근콘크리트',
    materials: '- 지하층/저층부\n기둥, 벽체 : 유로폼\n슬래브 : 합판\n- 기준층\n외부 벽체 : 갱폼\n내부 벽체, 슬래브 : 알폼',
    overview: [
      '과천 지식정보타운 11-3블럭 신사옥은 지식산업센터형 업무시설 프로젝트로, 도심형 복합 업무공간의 정밀한 구조 공정 대응이 중요한 현장입니다.',
      '기존 사이트 검색 인덱스에 노출된 공법 및 자재 구성을 반영해 리뉴얼 상세페이지에서도 정보의 연속성을 확보했습니다.',
    ],
    keyPoints: [
      'SRC 및 UP-UP공법 기반의 복합 공정 운영',
      '지하층과 기준층 자재 시스템 분리 관리',
      '지식산업센터형 업무시설 시공 경험 축적',
    ],
  },
  '안성 물류센터 신축공사': {
    address: '경기 안성시 일죽면 신흥리 산 13-1',
    scale: '대지면적 : 54,266m²(16,279평)\n건축면적 : 22,595m²(6,835평)\n연면적 : 99,140m²(29,990평)',
    method: 'PC(FEB구조), RC, OPEN CUT',
    scope: '지하2층, 지상4층',
    materials: '[지하층]\n벽체 : 유로폼, 합벽지지대(합벽)\n기둥 : PC\n슬라브 : DECK SLAB, PC\n[지상층]\n벽체 : 유로폼, AL-FORM\n슬라브 : 합판, DECK SLAB',
    overview: [
      '안성 물류센터 신축공사는 대규모 물류시설 프로젝트로, 넓은 평면 계획과 장거리 공정 관리가 함께 요구되는 현장입니다.',
      '기존 태일씨앤티 사업실적 상세페이지에 노출된 규모·공법·자재 구성을 기준으로 리뉴얼 상세페이지를 설계했습니다.',
    ],
    keyPoints: [
      '대규모 물류센터 구조 공정 대응',
      'PC(FEB구조), RC, OPEN CUT 공법 적용',
      '지하층·지상층 자재 계획의 체계적 분리',
    ],
  },
  '평택 CDC 물류창고': {
    address: '경기 평택시 포승읍 희곡리 811',
    scale: '산업 물류 기능을 지원하는 특화 창고 시설',
    method: '물류창고 특성에 맞춘 철근·콘크리트 중심 시공 관리',
    scope: '창고동 및 관련 부속 구조 공정',
    materials: '물류창고 현장 여건에 맞춘 거푸집·철근·콘크리트 시스템 적용',
    overview: [
      '평택 CDC 물류창고는 산업 물류 기능을 지원하는 특화 창고 프로젝트로, 일정 대응과 구조 안정성이 중요한 현장입니다.',
      '기존 사이트 검색 인덱스에 확인되는 기본 정보 구조를 바탕으로 리뉴얼 상세페이지에서도 사업실적 정보 구성을 유지했습니다.',
    ],
    keyPoints: [
      '산업 물류 지원형 창고 프로젝트',
      '장기 공사기간 대응형 일정 운영',
      '물류 기능에 맞춘 구조 시공 관리',
    ],
  },
};

const buildProjectDetail = (project) => {
  const categoryLabel = projectCategories[project.category] ?? '기타';
  const overrides = projectDetailOverrides[project.name] ?? {};

  return {
    eyebrow: 'PROJECT DETAIL',
    description: `${project.summary} 기존 태일씨앤티 공사수주 상세페이지의 정보 구조를 참고해 핵심 항목을 재정리했습니다.`,
    typeLabel: categoryLabel,
    address: `${project.region} 권역`,
    scale: project.summary,
    duration: project.duration.replaceAll(' ', ''),
    method: '철근·콘크리트 중심 공정 및 현장 여건별 맞춤 시공',
    scope: `${project.highlight} 관련 구조 공정 수행`,
    materials: '거푸집, 철근, 콘크리트 등 현장 조건에 맞춘 시스템 적용',
    overview: [
      project.summary,
      `${project.client} 발주, ${project.contractor} 시공 프로젝트로 태일씨앤티의 ${project.highlight} 수행 역량을 보여주는 현장입니다.`,
    ],
    keyPoints: [
      '공정, 품질, 안전 기준을 중심으로 한 현장 운영',
      `${categoryLabel} 분야에서 축적한 구조 시공 경험 반영`,
      '협력사와의 정밀한 일정 조율 및 책임 시공 관리',
    ],
    ...overrides,
  };
};

export const projectDetailPages = Object.fromEntries(
  projects.map((project) => [project.name, buildProjectDetail(project)]),
);

export const getProjectDetailPath = (projectName) => `/performance/order-status/${encodeURIComponent(projectName)}`;

const regionMap = [
  { region: '서울', projects: 6, detail: '도심 복합시설 · 사옥 · 주거 재건축' },
  { region: '경기', projects: 12, detail: '판교 · 평택 · 용인 · 안양 · 안성 중심' },
  { region: '충청', projects: 2, detail: '세종 온라인센터 · 논산 제조공장' },
  { region: '경남', projects: 2, detail: '병원 · 복지시설 등 지역 기반 프로젝트' },
  { region: '기타', projects: 3, detail: '전국 주요 산업·유통 거점 확장' },
];

export const pages = {
  company: {
    overview: {
      eyebrow: 'COMPANY',
      title: '기본과 원칙에 충실한 전문건설 파트너',
      description:
        '태일씨앤티는 1994년의 기반 위에서 철근·콘크리트 전문건설 역량을 발전시켜 왔으며, 안전·품질·기술혁신을 축으로 고객과 협력사에 신뢰를 제공하고 있습니다.',
      blocks: [
        {
          type: 'spotlight',
          title: '태일씨앤티가 지향하는 가치',
          body: [
            '책임완수, 근면성실, 인화단결의 기본 자세를 바탕으로 현장 중심의 실행력을 강화합니다.',
            '품질안전 관리, 자재기술 혁신, 협력사와의 상생을 통해 차별화된 서비스를 제공합니다.',
          ],
          image: greetingImage,
          imageAlt: '태일씨앤티 인사말 이미지',
        },
        {
          type: 'cards',
          title: '회사소개 핵심 메뉴',
          items: [
            { title: '인사말', description: '대표 메시지와 기업이 지향하는 운영 철학', to: '/company/greeting' },
            { title: '경영이념', description: '하나된 태일, 혁신적인 태일, 백년대계 태일', to: '/company/philosophy' },
            { title: '회사연혁', description: '창립 이후 주요 수주, 인증, 조직 혁신의 흐름', to: '/company/history' },
            { title: '주거래 시공사', description: '주요 파트너사와 협업 네트워크', to: '/company/partners' },
            { title: '업·면허/인증', description: '품질·환경·안전 중심의 인증 체계', to: '/company/certifications' },
            { title: '찾아오시는 길', description: '본사 위치와 연락처 안내', to: '/company/location' },
          ],
        },
      ],
    },
    greeting: {
      eyebrow: 'GREETING',
      title: '성공적인 프로젝트를 위한 탁월한 신뢰의 아이콘',
      description:
        '태일씨앤티는 기본과 원칙에 충실한 투명한 경영과 철저한 품질안전 관리로 고객감동을 실현하고자 합니다.',
      blocks: [
        {
          type: 'spotlight',
          title: '대표 메시지',
          body: [
            '1994년 창립 기반 위에서 2013년 태일씨앤티로 새롭게 도약한 이후, 철근·콘크리트 전문건설 영역에서 차별화된 서비스를 제공하기 위해 새로운 도전을 이어오고 있습니다.',
            '안전과 품질 역량 강화, 자재기술 및 관리 혁신, 전략적 인적자원 운영을 통해 국내외 건설산업 발전에 기여하는 전문기업으로 성장하고 있습니다.',
            '태일씨앤티는 정직과 소통, 책임과 성장, 더 나은 방식, 공동체 의식이라는 태일인의 DNA를 바탕으로 혁신을 이어가겠습니다.',
          ],
          image: greetingImage,
          imageAlt: '인사말 대표 이미지',
        },
        {
          type: 'quote',
          quote: '고인 물을 바라보지 않고, 기꺼이 그 위를 넘어 성장하는 기업이 되겠습니다.',
          caption: '태일씨앤티 대표 메시지 방향성',
        },
        {
          type: 'media',
          title: '대표 서명',
          image: signatureImage,
          imageAlt: '대표 서명 이미지',
          compact: true,
        },
      ],
    },
    philosophy: {
      eyebrow: 'PHILOSOPHY',
      title: '하나된 태일, 혁신적인 태일, 백년대계 태일',
      description: '조직의 결속과 혁신, 장기적 성장의 균형을 통해 지속 가능한 기업 가치를 만들어갑니다.',
      blocks: [
        {
          type: 'media',
          title: '경영이념',
          image: philosophyImage,
          imageAlt: '태일씨앤티 경영이념 이미지',
        },
        {
          type: 'cards',
          title: '태일인의 핵심 가치',
          items: [
            { title: '책임과 성장', description: '책임감을 바탕으로 배우고 성장하며 결과를 만들어냅니다.' },
            { title: '정직과 소통', description: '원칙에 따라 정직하게 소통하며 신뢰를 구축합니다.' },
            { title: '공동체 의식', description: '협업과 배려로 함께 어려움을 극복하는 조직문화를 지향합니다.' },
            { title: '더 나은 방식', description: '현장을 관찰하고 개선해 더 효율적인 시공 방식을 찾습니다.' },
          ],
          image: talentImage,
          imageAlt: '태일씨앤티 인재상 이미지',
        },
      ],
    },
    history: {
      eyebrow: 'HISTORY',
      title: '지속적인 수주 성장과 조직 혁신의 발자취',
      description: '창립 기반부터 최근 수주 실적까지, 태일씨앤티의 주요 이정표를 한눈에 확인할 수 있습니다.',
      blocks: [
        {
          type: 'timeline',
          items: [
            {
              year: '1994',
              title: '지인개발 설립',
              description: '전문건설 기업으로서의 기반을 마련하며 태일씨앤티의 출발점이 형성되었습니다.',
            },
            {
              year: '2013',
              title: '㈜태일씨앤티 사명 변경',
              description: '브랜드 정체성을 새롭게 정립하고 대표이사 체제를 확립했습니다.',
            },
            {
              year: '2014',
              title: '기업부설연구소 인정 승인',
              description: '기술 기반 경영 체계 강화와 산학협력의 기반을 확보했습니다.',
            },
            {
              year: '2017',
              title: 'ISO·환경·안전 인증 체계 강화',
              description: 'KS Q ISO 9001, KS I ISO 14001, OHSAS 18001 기반의 경영 체계를 정비했습니다.',
            },
            {
              year: '2018~2019',
              title: '벤처기업 선정 및 HR/IT 혁신',
              description: '벤처기업 인증, 모범납세자 표창, 인사제도 개편과 홈페이지/그룹웨어 고도화를 추진했습니다.',
            },
            {
              year: '2023~2025',
              title: '대형 프로젝트 수주 확대',
              description: '안성 물류센터, 과천 지식정보타운, 평촌 비즈밸리, 한국일보 용산사옥, Westin Seoul Parnas 등 주요 수주를 이어가고 있습니다.',
            },
          ],
        },
      ],
    },
    partners: {
      eyebrow: 'PARTNERS',
      title: '주요 시공사와 함께 쌓아온 협업 신뢰',
      description: '다양한 시공사와의 지속적 협업 경험은 태일씨앤티의 현장 대응력과 신뢰도를 보여주는 중요한 자산입니다.',
      blocks: [
        {
          type: 'partnerGrid',
          title: '주요 협업 네트워크',
          items: partnerShowcase,
        },
        {
          type: 'cards',
          title: '확장 협업 네트워크',
          items: partnerExtendedGroups.map((partner) => ({
            title: partner,
            description: '장기적 협업 경험과 현장 이해도를 바탕으로 안정적인 공정 수행',
          })),
        },
      ],
    },
    certifications: {
      eyebrow: 'CERTIFICATION',
      title: '품질·환경·안전 중심의 인증 체계',
      description: '지속적인 기술 개선과 책임 있는 시공 운영을 위해 인증과 수상 체계를 확장해 왔습니다.',
      blocks: [
        {
          type: 'cards',
          title: '업·면허 및 인증 현황',
          items: [
            { title: 'KS Q ISO 9001:2015', description: '품질경영시스템 인증' },
            { title: 'KS I ISO 14001:2015', description: '환경경영시스템 인증' },
            { title: 'OHSAS 18001', description: '안전보건경영체계 기반 운영' },
            { title: 'MAIN-BIZ', description: '경영혁신형 중소기업 인증' },
            { title: '벤처기업', description: '기술보증기금 벤처기업 선정' },
            { title: '기업부설연구소', description: '연구개발 체계 보유' },
            { title: '국토교통부장관 표창', description: '건설산업 발전 기여' },
            { title: '모범납세자', description: '성실한 경영과 사회적 책임 실천' },
          ],
        },
      ],
    },
    location: {
      eyebrow: 'LOCATION',
      title: '서울 금천구 가산디지털단지 본사',
      description: '가산디지털단지 내 본사에서 영업, 기술, ESG, 채용 관련 문의를 지원합니다.',
      blocks: [
        {
          type: 'contact',
          title: '본사 안내',
          address: brand.address,
          tel: brand.tel,
          fax: brand.fax,
          email: brand.email,
          details: [
            '지하철 1호선·7호선 가산디지털단지역 인근',
            '방문 전 일정 협의 시 보다 원활한 안내가 가능합니다.',
          ],
        },
      ],
    },
  },
  performance: {
    overview: {
      eyebrow: 'PERFORMANCE',
      title: '축적된 실적으로 증명하는 시공 역량',
      description: '주택, 업무시설, 교육·의료, 플랜트, 초고층, 판매시설, 물류·산업 인프라까지 다양한 프로젝트 경험을 보유하고 있습니다.',
      blocks: [
        {
          type: 'metrics',
          title: '사업실적 포인트',
          items: [
            { value: '7', label: '주요 포트폴리오 카테고리' },
            { value: '20+', label: '대표 프로젝트 데이터셋' },
            { value: '5', label: '권역별 프로젝트 거점' },
            { value: '현재', label: '진행 프로젝트 지속 확장' },
          ],
        },
        {
          type: 'projectList',
          title: '대표 사업실적',
          items: featuredProjects,
        },
      ],
    },
    'order-status': {
      eyebrow: 'ORDER STATUS',
      title: '공사수주 현황',
      description: '최근 수주 현황과 주요 프로젝트를 카테고리별로 확인할 수 있습니다.',
      blocks: [
        {
          type: 'projectList',
          title: '최근 주요 수주',
          items: recentOrderProjects,
        },
        ...(additionalOrderProjects.length > 0
          ? [
            {
              type: 'projectList',
              title: '추가 진행 프로젝트',
              items: additionalOrderProjects,
            },
          ]
          : []),
      ],
    },
    housing: {
      eyebrow: 'HOUSING',
      title: '주택 프로젝트',
      description: '도심 재건축부터 주상복합까지 주거 프로젝트의 구조 공정 경험을 확보하고 있습니다.',
      blocks: [{ type: 'projectList', title: '주택 실적', items: projects.filter((project) => project.category === 'housing') }],
    },
    office: {
      eyebrow: 'OFFICE',
      title: '업무시설 프로젝트',
      description: '사옥, 비즈밸리, 지식산업센터 등 업무시설 공정에 대한 수행 경험을 축적해 왔습니다.',
      blocks: [{ type: 'projectList', title: '업무시설 실적', items: projects.filter((project) => project.category === 'office') }],
    },
    'education-medical': {
      eyebrow: 'EDUCATION / MEDICAL',
      title: '교육·의료 프로젝트',
      description: '공공성과 품질 관리가 중요한 교육·의료·복지 시설 프로젝트를 수행해 왔습니다.',
      blocks: [{ type: 'projectList', title: '교육·의료 실적', items: projects.filter((project) => project.category === 'education-medical') }],
    },
    plant: {
      eyebrow: 'PLANT',
      title: '플랜트 프로젝트',
      description: '전력 인프라와 제조 공장 등 산업시설 중심의 플랜트형 프로젝트 경험을 보유하고 있습니다.',
      blocks: [{ type: 'projectList', title: '플랜트 실적', items: projects.filter((project) => project.category === 'plant') }],
    },
    'high-rise': {
      eyebrow: 'HIGH-RISE',
      title: '초고층 프로젝트',
      description: '복합개발, 데이터센터 등 고층·대형화 프로젝트에 대응하는 구조 시공 경험을 축적했습니다.',
      blocks: [{ type: 'projectList', title: '초고층 실적', items: projects.filter((project) => project.category === 'high-rise') }],
    },
    retail: {
      eyebrow: 'RETAIL',
      title: '판매시설 프로젝트',
      description: '판매·상업 기능을 갖춘 대형 시설과 상업지구 프로젝트를 수행해 왔습니다.',
      blocks: [{ type: 'projectList', title: '판매시설 실적', items: projects.filter((project) => project.category === 'retail') }],
    },
    others: {
      eyebrow: 'OTHERS',
      title: '기타 프로젝트',
      description: '물류센터, 산업 인프라, 클러스터 기반 프로젝트 등 다양한 공정 경험을 축적했습니다.',
      blocks: [{ type: 'projectList', title: '기타 실적', items: projects.filter((project) => project.category === 'others') }],
    },
    'project-map': {
      eyebrow: 'PROJECT MAP',
      title: '권역별 프로젝트 분포',
      description: '서울·경기권을 중심으로 전국 주요 거점에서 프로젝트 수행 경험을 확장하고 있습니다.',
      blocks: [
        {
          type: 'cards',
          title: '지역별 프로젝트 현황',
          items: regionMap.map((item) => ({ title: `${item.region} · ${item.projects}건`, description: item.detail })),
        },
      ],
    },
  },
  pr: {
    overview: {
      eyebrow: 'PR CENTER',
      title: '태일씨앤티의 소식을 빠르게 전달합니다',
      description: '기업 소식, 수주 뉴스, 홍보 영상을 통해 태일씨앤티의 현재와 미래를 전달합니다.',
      blocks: [
        { type: 'newsList', title: '최신 News', items: newsItems.slice(0, 3) },
        { type: 'videoList', title: '홍보 영상', items: videos },
      ],
    },
    news: {
      eyebrow: 'NEWS',
      title: '최신 소식',
      description: '태일씨앤티의 수주, 사회공헌, 기업 활동 소식을 정리했습니다.',
      blocks: [{ type: 'newsList', title: '뉴스 목록', items: newsItems }],
    },
    youtube: {
      eyebrow: 'YOUTUBE',
      title: '영상으로 보는 태일씨앤티',
      description: '회사 소개 영상과 향후 확장될 홍보 영상 콘텐츠를 확인할 수 있습니다.',
      blocks: [{ type: 'videoList', title: '영상 콘텐츠', items: videos }],
    },
  },
  esg: {
    overview: {
      eyebrow: 'ESG',
      title: '지속가능한 성장과 책임 있는 경영',
      description: '환경과 사회, 지배구조를 균형 있게 고려하는 ESG 경영을 실천합니다.',
      blocks: [
        {
          type: 'media',
          title: 'ESG 개요',
          image: esgOverviewImage,
          imageAlt: '태일씨앤티 ESG 개요 이미지',
        },
        {
          type: 'cards',
          title: 'ESG 실천 방향',
          items: [
            { title: 'Environment', description: '폐기물·온실가스 저감, 친환경 공법 및 자재 우선 적용' },
            { title: 'Social', description: '사회공헌, 기부·봉사, 교육 활동과 지역사회 상생' },
            { title: 'Governance', description: '윤리 준수, 정보보호, 협력사와의 공정한 거래문화 강화' },
          ],
        },
        {
          type: 'media',
          title: '윤리경영',
          image: ethicsImage,
          imageAlt: '태일씨앤티 윤리경영 이미지',
        },
        {
          type: 'cards',
          title: '환경경영 방침',
          items: [
            { title: '지속적 개선', description: '환경목표를 설정·점검하고 성과를 추적합니다.' },
            { title: '폐기물/온실가스 저감', description: '공정 전 과정에서 발생 최소화와 재사용·재활용을 확대합니다.' },
            { title: '친환경 공법·자재', description: '저탄소, 저소음, 저진동 공법과 친환경 자재를 우선 검토합니다.' },
            { title: '사전 평가 및 관리', description: '환경영향 사전 평가와 현장 점검을 통해 리스크를 관리합니다.' },
            { title: '규정 준수', description: '관련 법규와 ISO 기반 관리 체계를 준수합니다.' },
            { title: '환경 의식 교육', description: '임직원 및 이해관계자 대상 교육과 캠페인을 운영합니다.' },
          ],
          image: environmentImage,
          imageAlt: '태일씨앤티 환경경영 방침 이미지',
        },
      ],
    },
  },
  recruit: {
    overview: {
      eyebrow: 'CAREERS',
      title: '함께 성장하며 미래를 설계할 인재를 기다립니다',
      description: '책임과 성장, 정직과 소통을 바탕으로 현장과 본사를 연결하는 전문 인재를 찾고 있습니다.',
      blocks: [
        {
          type: 'spotlight',
          title: '태일씨앤티 인재상',
          body: [
            '현장을 이해하고 실행하는 책임감, 원칙에 따라 소통하는 태도, 더 나은 방식을 찾는 개선 의지가 중요합니다.',
            '조직과 함께 배우고 성장하며 공동체 의식을 실천하는 인재를 기다립니다.',
          ],
          image: talentImage,
          imageAlt: '태일씨앤티 인재상 이미지',
        },
        {
          type: 'cards',
          title: '채용 메뉴',
          items: [
            { title: '직무소개', description: '경영기획실, 공무기술팀, 안전관리 등 주요 직무 안내', to: '/recruit/jobs' },
            { title: '인사제도', description: '성과관리와 육성 체계 소개', to: '/recruit/hr-system' },
            { title: '채용가이드', description: '지원부터 입사까지의 절차 안내', to: '/recruit/guide' },
            { title: '복리후생', description: '보상과 성장 지원 제도', to: '/recruit/benefits' },
            { title: '채용FAQ', description: '지원 전 자주 묻는 질문 정리', to: '/recruit/faq' },
          ],
        },
      ],
    },
    jobs: {
      eyebrow: 'JOB',
      title: '직무소개',
      description: '본사와 현장을 유기적으로 연결하는 조직 체계를 기반으로 다양한 직무가 운영됩니다.',
      blocks: [
        {
          type: 'media',
          title: '조직도',
          image: organizationImage,
          imageAlt: '태일씨앤티 조직도 이미지',
        },
        {
          type: 'cards',
          title: '주요 직무',
          items: [
            { title: '인사(HR)·운영', description: '채용, 조직 운영, 제도 기획, 사내 커뮤니케이션 지원' },
            { title: '자금·재무·세무', description: '재무 관리와 경영 지원, 비용 및 계약 관리' },
            { title: 'ESG 운영', description: '사회공헌, 환경관리, 윤리경영 운영 체계 구축' },
            { title: 'IT(전산화)', description: '사내 시스템과 데이터 기반 업무 효율화 지원' },
            { title: '공무', description: '현장 공정, 원가, 계약, 문서 대응 등 핵심 공무 운영' },
            { title: '자재구매조달', description: '자재 수급과 협력사 커뮤니케이션, 공급 일정 관리' },
            { title: '기술개발', description: '시공 품질 고도화와 신기술 적용 검토' },
            { title: '안전관리', description: '현장 안전보건 체계 수립과 점검, 예방 중심 관리' },
          ],
        },
      ],
    },
    'hr-system': {
      eyebrow: 'HR SYSTEM',
      title: '성과와 성장의 선순환을 만드는 인사제도',
      description: '업적과 역량을 함께 평가하고, 평가 결과를 보상·승진·육성에 연계합니다.',
      blocks: [
        {
          type: 'cards',
          title: '인사제도 핵심',
          items: [
            { title: '업적평가', description: '프로젝트 성과와 역할 수행 결과를 중심으로 평가합니다.' },
            { title: '역량평가', description: '직무 수행 능력과 협업 역량, 개선 의지를 함께 살핍니다.' },
            { title: '피드백 연계', description: '평가 결과는 보상, 승진, 역량 개발 계획에 반영됩니다.' },
          ],
          image: evaluationImage,
          imageAlt: '태일씨앤티 성과평가 제도 이미지',
        },
      ],
    },
    guide: {
      eyebrow: 'GUIDE',
      title: '채용가이드',
      description: '필요 인력 수요와 직무 특성에 따라 상시채용 또는 공고 채용 형태로 진행합니다.',
      blocks: [
        {
          type: 'steps',
          title: '전형 절차',
          items: [
            '지원서 접수',
            '서류 검토',
            '실무·인성 인터뷰',
            '처우 협의',
            '최종 합류',
          ],
        },
        {
          type: 'cards',
          title: '지원 시 참고사항',
          items: [
            { title: '직무 적합성', description: '현장 경험, 관련 자격, 협업 태도 등을 종합적으로 검토합니다.' },
            { title: '경력 중심 서류', description: '참여 프로젝트와 수행 역할을 구체적으로 작성하면 좋습니다.' },
            { title: '현장/본사 특성 이해', description: '지원 직무에 맞는 업무 이해도와 커뮤니케이션 역량이 중요합니다.' },
          ],
        },
      ],
    },
    benefits: {
      eyebrow: 'BENEFITS',
      title: '보상과 성장을 함께 설계하는 복리후생',
      description: '직무와 성과를 반영하는 보상 체계와 장기적 성장을 위한 지원 제도를 운영합니다.',
      blocks: [
        {
          type: 'media',
          title: '보상 구조',
          image: rewardImage,
          imageAlt: '태일씨앤티 보상 제도 이미지',
        },
        {
          type: 'cards',
          title: '지원 제도',
          items: [
            { title: '기본급 + 제수당', description: '직급과 직무, 현장 특성을 고려한 합리적 보상 체계' },
            { title: '성과 인센티브', description: '성과와 기여도에 따른 보상 연계' },
            { title: '역량 개발', description: '평가 피드백과 직무 성장 방향을 연결한 육성 지원' },
            { title: '조직 기반 복지', description: '현장 운영과 조직 상황에 맞춘 실질적 지원을 지향' },
          ],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: '채용 FAQ',
      description: '지원자들이 자주 묻는 질문을 정리했습니다.',
      blocks: [
        {
          type: 'faq',
          items: [
            { question: '채용은 수시로 진행되나요?', answer: '직무와 현장 상황에 따라 상시채용과 공고 채용을 병행합니다.' },
            { question: '신입과 경력 모두 지원 가능한가요?', answer: '직무별로 상이하지만, 현장과 본사 모두 신입·경력 채용 가능성을 열어두고 있습니다.' },
            { question: '현장 직무와 본사 직무의 지원 절차가 다른가요?', answer: '기본 절차는 유사하나, 직무 특성에 따라 실무 인터뷰 방식이나 검토 항목이 달라질 수 있습니다.' },
            { question: '필수 자격증이 있나요?', answer: '직무에 따라 우대 또는 필요 자격이 있을 수 있으며, 공고에서 상세 조건을 안내합니다.' },
            { question: '입사 후 교육은 어떻게 진행되나요?', answer: '직무 특성과 조직 적응을 고려한 온보딩 및 실무 연계 교육을 지원합니다.' },
            { question: '문의는 어디로 하면 되나요?', answer: `채용 관련 문의는 대표 연락처(${brand.tel}) 또는 이메일(${brand.email})로 남겨주시면 확인 후 안내드립니다.` },
          ],
        },
      ],
    },
  },
  admin: {
    overview: {
      eyebrow: 'ADMIN',
      title: '관리자 전용 영역',
      description: '관리자 시스템은 내부 운영 환경에서 별도로 관리됩니다.',
      blocks: [
        {
          type: 'cards',
          title: '안내',
          items: [
            { title: '내부 전용 서비스', description: '관리 기능은 외부 공개용 정적 웹사이트와 분리하여 운영합니다.' },
            { title: '보안 중심 접근', description: '정적 호스팅 환경에서는 안내용 화면만 제공하고 실제 관리자 기능은 별도 환경에서 운영합니다.' },
          ],
        },
      ],
    },
  },
};

export const homeSections = {
  hero: {
    trustItems: [
      {
        label: 'Established',
        title: '30년 이상 축적된 현장 기반 경험',
        description: '1994년의 기반 위에서 지속 성장하며 전문건설 분야의 신뢰를 축적해 왔습니다.',
      },
      {
        label: 'Quality System',
        title: '품질·환경·안전 기준 중심 운영',
        description: 'ISO 기반의 체계적 관리와 책임 시공 원칙으로 프로젝트의 안정성을 높입니다.',
      },
      {
        label: 'Partner Network',
        title: '대형 시공사와 함께 쌓은 협업 신뢰',
        description: '삼성물산, GS건설, 현대엔지니어링 등 주요 파트너사와 다양한 프로젝트를 수행했습니다.',
      },
    ],
  },
  highlights: [
    {
      title: '회사소개',
      description: '경영이념과 연혁, 인증, 파트너십을 통해 태일씨앤티의 신뢰 기반을 확인하세요.',
      to: '/company',
    },
    {
      title: '사업실적',
      description: '주택, 업무시설, 플랜트, 초고층, 물류 인프라 등 주요 프로젝트를 소개합니다.',
      to: '/performance',
    },
    {
      title: 'ESG경영',
      description: '환경과 사회, 윤리를 고려하는 실천 중심의 ESG 운영 방향을 확인하세요.',
      to: '/esg',
    },
    {
      title: '인재채용',
      description: '함께 성장할 인재를 위한 직무소개, 인사제도, 채용가이드를 제공합니다.',
      to: '/recruit',
    },
  ],
};

export const sourceNotes = {
  benchmarks: [
    { name: '대우건설 모바일', url: 'https://m.daewooenc.com/' },
    { name: '포스코', url: 'https://www.posco.co.kr/homepage/docs/kor7/jsp/s91a0000001i.jsp' },
    { name: '태일씨앤티 기존 홈페이지', url: 'https://www.taeilcnt.co.kr/' },
  ],
};
