# NEW WORDS WIKI
[신조어 위키](https://new-words-wiki.kr)

  1. 로그인을 한 누구나 신조어를 등록, 수정할 수 있는 웹 어플리케이션.
  2. 이메일 인증(인증번호 입력)을 통한 회원가입, 로그인 구현.
  3. 신조어 등록시 정의, 유례, 예시, 관련 이미지를 등록 가능.
  4. 신조어가 아닌 페이지의 경우 신고 가능. 어드민 계정에서 확인 후 삭제.
  5. 인기 검색어, 최신 등록 신조어, 유저 랭킹 조회 가능.
  7. 커뮤니티(게시판) 구현.

## 개발자
  * [@bg-shorthand](https://github.com/bg-shorthand)

## 개발 기간
  * 2022.01.01 ~ 현재

## STACK
# FRONT-END
  * HTML5
  * CSS3(Module scss)
  * Javascript
  * NextJS with Typescript
  * Recoil
  * Axios

# BACK-END
  * Node Js
  * Express
  * MongoDB(Mongoose)
  
# DEPLOY
  * AWS(EC2 ubuntu)
  * NginX
  * pm2

# VCS
  * Git/Github

# PROJECT STRUCTURE
  * FRONT-END
```
  src
    ┣ api // 통신 api
    ┣ components // 컴포넌트(Atomic Design Pattern 활용)
      ┣ atoms
      ┣ containers
      ┣ molecules
      ┣ organisms
      ┣ pages
      ┗ template
    ┣ const // 상수 관리
    ┣ hooks // 커스텀 훅 관리
    ┣ modules // 모듈 함수 관리
    ┣ pages // NextJS 라우팅 관리
    ┣ public // 정적 파일 관리
    ┣ recoil // 상태 관리
    ┗ styles  // 전역 스타일 관리
```
  * BACK-END
```
  src
    ┣ const // 상수 관리
    ┣ middelware // 미들웨어(토큰 검사 등)
    ┣ models // DB 모델
    ┣ module // 모듈 함수 관리
    ┣ routes // DB 라우트
    ┣ app.js
    ┗ sendMail.js // Nodemailer
```

# EXPERIENCE

1. NextJS
  * 신조어 위키는 배포 및 서비스까지 고려한 웹 어플리케이션으로, SEO에 강한 NextJS를 학습하여 제작했습니다.
  * 이 과정에서 서버 사이드 렌더링의 개념과 로직을 익히게 되었습니다.
  * 학습 과정에서 가장 먼저 만났던 문제는 모달 다이얼로그를 위한 Portal을 만들면서, 서버 사이드에서 Portal 엘리먼트를 찾지 못 하는 문제였습니다.
  * 이 문제는 아래의 코드와 같이 useEffect에서 마운트를 확인 후 Portal을 만드는 방식으로 해결하였습니다.
  ```
  // Portal.tsx
    const Portal = ({ children }: { children: ReactNode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);

      return () => setMounted(false);
    }, []);

    return mounted ? createPortal(children, document.querySelector('#portal')!) : null;
  };
  ```
  * 이와 같이 서버 사이드와 클라이언트 사이드를 구분하여 코드를 작성하고, 문제를 해결할 이슈들을 경험할 수 있었습니다.

2. ATOMIC DESIGN
  * 디자인 패턴과 관련하여, 컴포넌트를 조금 더 디테일하게 관리하고, 재사용성을 높이기 위해 아토믹 디자인 패턴을 적용하였습니다.
  * 이전의 Components-Container로만 이루어진 패턴보다 컴포넌트의 역할을 더 적확하게 관리할 수 있었습니다.

3. Presentational and Container / Module sass
  * Presentational and Container 패턴은, 마크업 역할을 하는 Presentational과 로직 역할을 하는 Container를 구분하는 패턴입니다.
  * Presentational은 컴포넌트로, Container는 hook과 module로 구분하여 패턴을 구현하였습니다.
  * 마크업과 로직을 구분하여 관리하는 패턴은 유지보수와 같은 관리를 용이하게 하였고, 보다 더 디테일하고 정확한 네이밍으로 프로젝트 구조를 관리할 수 있었습니다.
  * 이에 더하여, 스타일을 담당 또한 구분하고 싶어 이번 프로젝트에는 Module sass를 도입하였습니다.
  * 마크업과 로직, 스타일을 구분하여 관리할 수 있었으며, Styled in JS를 사용하지 않아 더 빠른 렌더링을 기대할 수 있었습니다.

4. SIGNUP / SIGNIN
  * Nodemailer 라이브러리를 사용하여, 이메일 인증을 통한 회원가입을 구현하였습니다. 라이브러리를 선택하고 사용하는 과정에서 smtp와 같은 이메일 서버에 대해 알 수 있었습니다.
  * 로그인은 JWT를 이용하여 개발하였습니다.
  * 유효기간이 짧은 Access token과 유효기간이 긴 Refresh token을 구분하여, 로그인 유지를 확인하였습니다.
  * 토큰과 유저 DB를 다루는 과정에서 암호화에 대해 학습하였습니다.
  * 여러 암호화 방법 중, node의 crypto를 사용해 hash와 salt를 적용하였습니다.

5. Light House
![라이트하우스 결과](/asset/화면 캡처 2022-02-11 155309.jpg)
  * Dynamic import를 활용하여 Perfomance 점수를 높였습니다.
  * 시멘틱 마크업을 고려하여 Accessibility 점수를 높였습니다.
  * 메타 데이터를 입력하여 SEO 점수를 높였습니다.