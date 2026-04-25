# 태일씨앤티 기존 사이트 분석 레퍼런스

- 작성일: 2026-04-26 (Asia/Seoul)
- 분석 대상: 기존 공식 사이트 `http://www.taeilcnt.co.kr/home/index.jsp`
- 목적: 리뉴얼 작업 전, 기존 사이트의 정보 구조(IA), 콘텐츠 성격, 기술 구현 방식, 개선 포인트를 정리하여 참고 자료로 활용

## 문서 구성

1. [`01_existing-site-overview.md`](./01_existing-site-overview.md)
   - 기존 사이트의 전체 성격, 홈 구성, 주요 특징 요약
2. [`02_existing-site-page-inventory.md`](./02_existing-site-page-inventory.md)
   - 메뉴별 페이지 인벤토리와 핵심 콘텐츠 정리
3. [`03_existing-site-technical-notes.md`](./03_existing-site-technical-notes.md)
   - URL 구조, 인코딩, 라이브러리, 외부 의존성 등 기술 메모
4. [`04_existing-site-renewal-insights.md`](./04_existing-site-renewal-insights.md)
   - 리뉴얼 시 유지/개선 포인트와 우선순위 제안

## 분석 범위

- `/home` 하위의 공개 페이지를 기준으로 확인
- 홈, 회사소개, 사업실적, 기술혁신, 홍보센터, 인재채용, ESG경영 섹션 중심 분석
- 개인정보처리방침/이메일무단수집거부/인트라넷/NAS/원격지원 등 부가 링크는 보조 참고 수준으로만 반영

## 확인 기준 메모

- 공개 페이지 기준 확인된 주요 페이지: **홈 포함 27개**
- 현재 사이트는 회사 소개 + 실적 + 홍보 + 채용 + ESG 정보가 혼합된 **전통적 기업 소개형 구조**에 가깝다.
- 리뉴얼 인사이트 문서는 현 사이트를 바탕으로 한 **해석/제안**이다.

## 주요 확인 URL

- 홈: http://www.taeilcnt.co.kr/home/index.jsp
- 회사소개/인사말: http://www.taeilcnt.co.kr/home/company/sub_01.html
- 회사소개/경영이념: http://www.taeilcnt.co.kr/home/company/sub_02.html
- 회사소개/회사연혁: http://www.taeilcnt.co.kr/home/company/sub_03.html
- 사업실적/공사수주현황: http://www.taeilcnt.co.kr/home/order/order_list.jsp
- 사업실적/건설시공능력: http://www.taeilcnt.co.kr/home/order/sub_02.html
- 기술혁신/비전: http://www.taeilcnt.co.kr/home/tech/sub_01.html
- 홍보센터/News: http://www.taeilcnt.co.kr/home/center/prom_01_list.jsp
- 홍보센터/사회공헌: http://www.taeilcnt.co.kr/home/center/prom_02_list.jsp
- 홍보센터/홍보자료: http://www.taeilcnt.co.kr/home/center/prom_03_list.jsp
- 인재채용/채용가이드: http://www.taeilcnt.co.kr/home/job/sub_03.html
- 인재채용/채용FAQ: http://www.taeilcnt.co.kr/home/job/job_faq_list.jsp
- ESG경영: http://www.taeilcnt.co.kr/home/order/esg_mgm.jsp

## 참고

세부 URL과 페이지별 메모는 `02_existing-site-page-inventory.md`에 정리했다.
