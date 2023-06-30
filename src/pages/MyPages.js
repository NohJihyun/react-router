//[[[컴포넌트설명]]]
//352navigate api 적용
//352navigate 컴포넌트로 경로 이동 login 페이지로
//352replace 를 적용해 뒤로가기 버튼을 바로 이전페이지로 나오게 설정
import { Navigate } from "react-router-dom";

const Mypage = () => {
  const isLoggedIn = false;
  // 로그인이 안되었을시 리다이렉트로 보여지는 페이지 이기때문에 false로 설정하였다
  if (isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div> Mypage 입니다.</div>;
};

export default Mypage;
