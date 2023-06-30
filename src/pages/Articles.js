//[[[컴포넌트설명]]]
//1.게시글목록화면 2.337 중첩된라우트 컴포넌트 적용 3.347 NaviLink api(css클래스,특정스타일적용)
//<Link to --> 페이지 이동
//<Outlet> children으로 들어오는 설정을 받아서 가져다 화면에 출력
//Link -> <Link to> | NaviLink
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  //347(리액트라우터부가기능)NavLink:(css클래스,특정스타일적용)
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <div>
      <Outlet />
      <ul>
        {/* <Link to="articles/1">게시글 1</Link> 기존 LINK를 --> NavLink 로변경
        <li>
          <Link to="articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="articles/3">게시글 3</Link> 
        </li> */}
        {/*347(리액트라우터부가기능)NavLink: (css클래스,특정스타일적용) */}
        {/*347 style과className은 { isActive: boolean }type이다 만든style객체정보를 ture/false 적용시킨다*/}
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
        {/*349(리액트라우터부가기능)NavLink:(css클래스,특정스타일적용) 컴포넌트를 하나 생성해 id값을 참조하게 props로 전달받은후 객체데이터 사용 
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
        */}
      </ul>
    </div>
  );
};
//*349(리액트라우터부가기능)NavLink:(css클래스,특정스타일적용) 컴포넌트를 하나 생성해 id값을 참조하게 props로 전달받은후 객체데이터 사용
// const ArticleItem  = ({ id }) => {
//   const activeStyle = {
//     color: "green",
//     fontSize: 21,
//   };
//   return (
//     <li>
//       <NavLink
//         to={`/articles/${id}`} // 백틱을 사용하여 문자열 합침
//         style={({ isActive }) => (isActive ? activeStyle : undefined)}
//       >
//         게시글 {id}
//       </NavLink>
//     </li>
//   );
// };
export default Articles;
