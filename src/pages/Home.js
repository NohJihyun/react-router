//[[[컴포넌트설명]]]
//홈페이지
//326(react-router싱글페이지)클라이언트가 가장 먼저 보는 화면
//326(react-router싱글페이지)Link 컴포넌트를 사용하여 /페이지컴포넌트명으로 페이지이동
//326(react-router싱글페이지)<a>태그 사용안됨 페이지를 새로불러오는것을 막음
//338(react-router싱글페이지)사용자주소경로요청방식과url파라미터를 활용해 route 중첩방식 적용
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <ul>
        <li>
          {/* <Link 컴포넌트 사용하여 /about 컴포넌트로 페이지 이동 */}
          <Link to="/about">소개 </Link>
        </li>
        <li>
          <Link to="/profiles/jihyun">jihyun의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
