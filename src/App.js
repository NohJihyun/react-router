//[[[컴포넌트설명]]]
//326(react-router 싱글페이지)App.js 해당 컴포넌트에서 router로 연결한 페이지 렌더링 하기
//338(react-router 싱글페이지)router 중첩
//350((react-router 싱글페이지)NotFound페이지도 적용
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Mypage from "./pages/MyPages";
const App = () => {
  //Home 컴포넌트 컴포넌트네임으로 1Home페이지 와 About 2페이지를 컴포넌트로 만들고 router를 이용하여 경로를 path / 설정하여 home 화면출력
  //index.js에서 App.js컴포넌트를 렌더링하고 있다
  return (
    <Routes>
      {/*342 중첩된라우트 기술을 사용해 header layout 설정하기 jsx children 방식으로 home.about.profile 컴포넌트 화면을 감싼다 */}
      <Route element={<Layout />}>
        {/* Route 사용해 사용자브라우저에서 요청주소로 뷰 렌더링 해주기  */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/*URL파라미터 /profile/jihyun 객체데이터안 데이터를 조회해서 프로파일을 조회한뒤 이름으로 url 이동되게 만듬 path설정시 : 사용해야한다*/}
        <Route path="/profiles/:username" element={<Profile />}></Route>
        {/*334 쿼리스트르링 별도로 App.js에 Routes Route 설정을 하지 않는다 about.js에 적용시켜둠*/}
      </Route>
      {/*338 중첩된 router 설정 */}
      {/*338 주소경로 사용방식 
      <Route path="/articles" element={<Articles />}></Route> */}
      {/*338 url파라미터 방식 
      <Route path="/articles/:id" element={<Article />}></Route> */}
      {/*338~340 중첩시키기 위해서 적용| 중첩된 라우트 형태로 설정하기*/}
      {/*338~340 설정할때 Route로 감싸서 children 형태를 만들어주고 children으로 들어가는 jsx엘리먼트를 보여주는 역할을 한다 --> 글목록페이지에 가져다 <OutLet> 컴포넌트로 children을 받아서 화면에 표출한다  */}
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      {/*352~353 login페이지와 my페이지 설정 */}
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<Mypage />} />
      {/*351 NofFound 컴포넌트 설정 *wildcard 문자: 아무 텍스트나 매칭한다는 뜻, 라우트들의 규칙을 확인하고 일치하는 라우트가 없으면 해당 라우트가 화면에 나타나는 개념 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
