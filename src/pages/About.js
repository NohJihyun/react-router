//[[[컴포넌트설명]]]
//326(react-router싱글페이지)웹싸이트 소개하는 화면
//335(react-router싱글페이지)ruute에서 쿼리스트링 사용 파싱작업
import { useLocation, useSearchParams } from "react-router-dom";
//334(react-router싱글페이지 route에서 쿼리스트링 적용)
const About = () => {
  //335 쿼리스트링값 ?detail=ture&mode=1 값을 파싱하여 문자열 형태로 만든다
  //335 useSearchParams hook : 배열타입 값 반환 1원소는: 쿼리파라미터 조회,수정하는 메서드들이 담긴 객체를 반환한다.2원소는:쿼리파라미터를 객체형태로 업데이트할수있는 함수를 반환한다.
  const [searchParams, setSearchParams] = useSearchParams(); // useSearchParams hook : 배열타입 값 반환 1원소는: 쿼리파라미터 조회,수정하는 메서드들이 담긴 객체를 반환한다.
  const detail = searchParams.get("detail"); //searchParams의 get으로 쿼리파라미터를 조회 set으로 수정 **get으로 조회시 문자열로 조회됨** | 객체반환 | 조회시 쿼리파라미터가 조회되지 않으면 null
  const mode = searchParams.get("mode"); //searchParams의 get으로 쿼리파라미터를 조회 set으로 수정 **get으로 조회시 문자열로 조회됨** | 객체반환 | 조회시 쿼리파라미터가 조회되지 않으면 null

  //335 [[[파싱작업]]] : 파싱은 데이터 분해/분석 --> 원하는 형태로 가공해서 만드는 작업 | 웹상에 주어진 정보를 내가 원하는 형태로 가공하여 적용
  //335 문자열로 나올수 있게 작업 key : value 형태로
  //335 이벤트핸들링 함수 onToggleDetail , onIncreaseMode
  const onToggleDetail = () => {
    //335 파싱작업
    //335 setSearchParams
    //335 setSearchParams는 객체형태로 업데이트 할수있는 함수를 반환한다.
    //335 삼항연산자를 사용하여 ture false를 비교하는데 쿼리파라미터를 get으로 조회해올때 문자열로 조회가 되기때문에 '' 꼭 사용해야한다
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  //335 파싱작업
  //335 setSearchParams
  //335 setSearchParams는 객체형태로 업데이트 할수있는 함수를 반환한다.
  //335 삼항연산자를 사용하여 형변환을 해주었고 , 조회시 쿼리파라미터가 없으면 null로 나오는데 null로 나오는 부분을 비교하였다
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  //334useLocation hook을 사용하면 이해당 훅은 location 객체를 반환한다.
  //334location객체는 현재 사용자가 보기있는 페이지의 정보를 담고있다
  //334이객체에는 5가지 값이 들어있다 1.pathname 2.search 3.hash 4.state 5.key | 334설명 참고
  const location = useLocation(); //useLocation hook
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      {/*334쿼리스트링 jsx | location객체에search값을 통해 페이지의 정보를 조회 : 맨앞의 ? 문자를 포함한 쿼리스트링값 화면에출력 => 쿼리스트링값 ?detail=ture&mode=1*/}
      {/* <p>쿼리스트링: {location.search}</p> */}
      {/*335 쿼리파라미터를 ?detail=ture&mode=1 파싱하여 문자열로 화면 출력 인벤트핸들링 설정 */}
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle Detail</button>
      <button onClick={onIncreaseMode}>Mode +1</button>
    </div>
  );
};

export default About;
