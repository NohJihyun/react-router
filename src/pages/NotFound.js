//[[[컴포넌트설명]]]
//NotFound 페이지를 찾을수 없을때 보여주는 화면

const NotFound = () => {
  return (
    // 인라인스타일 {{}} style을 선언하지 않고 값을 바로 지정하는 방법
    <div
      style={{
        display: "flex",
        alignItems: "center", // 센터 정렬
        justifyContent: "center", // 가로축 기준 좌우정렬
        fontSize: 64,
        position: "absolute", // 가장 가까운 위치에 있는 조상 요소를 기준으로 배치한다.
        width: "100%",
        height: "100%",
      }}
    >
      404페이지 입니다.
    </div>
  );
};

export default NotFound;
