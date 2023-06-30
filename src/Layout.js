//[[[컴포넌트설명]]]
//345(react-router싱글페이지-route-layout) HEADER|FOOTER Layout 페이지
//345(react-router싱글페이지-route-layout) 1.페이지를 따로 만들어 재사용하는 방법 2. 중첩된라우트와 OutLet 사용
//345(react-router싱글페이지-route-layout) 2번방식 중첩된라우트와  Outlet사용 outLet 설정
//345(react-router싱글페이지-route-layout) api를 사용하여 페이지 이동하는 처리를 한다 <Link to > 사용하지 않는다
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  //345 useNavigate api로 페이지 이동처리
  const navigate = useNavigate();
  //345 함수생성
  const goBack = () => {
    //345 이전페이지로 이동
    navigate(-1); //345 navigate 함수를 사용할때 뒤/앞 으로 이동 (-1)뒤로한번(-2)뒤로두번(1)앞으로한번 이동한다
  };
  const goArticles = () => {
    //345 articles 경로로 이동
    //345 페이지이동 replace 옵션 사용하기 {replace:true} 적용 홈페이지에서 뒤로가기 누르면 "/articles" 경로로 이동이 된다
    navigate("/articles", { replace: true });
  };
  return (
    <div>
      <header style={{ background: "lightgary", padding: 16, fontSize: 24 }}>
        {/*345 이벤트핸들링설정 */}
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
