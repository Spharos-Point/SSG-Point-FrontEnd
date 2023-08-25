
## ✅ FEATURE
Feature 작업 사항을 입력해주세요.


## Description
설명을 작성하세요.

## Todo
- [ ] todo : 마이포인트 - 포인트내역 퍼블리싱
- [ ] todo : 마이포인트 - 포인트 카드관리 퍼블리싱
- [ ] todo : 마이포인트 - 제휴포인트 카드 관리 퍼블리싱
- [ ] todo : 마이포인트 - 제휴 포인트 카드관리 퍼블리싱
- [ ] todo : 마이포인트 - 포인트 선물 퍼블리싱
- [ ] todo : 마이포인트 - 포인트 전환 퍼블리싱
- [ ] todo : 마이포인트 - 포인트 비밀번호 변경 퍼블리싱
- [ ] todo : 마이포인트 헤더 제작
- [ ] todo : font-inter 해결 : https://www.npmjs.com/package/tailwindcss-font-inter

## ETC
기타 사항
1. 종합아이디 처리 
- 기존은 로컬에 담고 사용
- next Auth를 사용하여 서버에 로그인 패스워드를 중간에 처리해 session을 만들고 거기에 유저정보 토큰 정보 저장
page.tsx을 감싸고 있는 layout.tsx
서버사이드, 클라우드 사이드 로 불러오는 방법이 가능하다.
카카오, 네이버, 애플 
미들웨어를 통해 분기된 페이지 관리 가능