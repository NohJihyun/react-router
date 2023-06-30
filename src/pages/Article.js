//[[[컴포넌트설명]]]
//1.게시글읽는화면 2.337 중첩된route url파라미터방식적용
//url파라미터 방식 특정데이터 조회할때 사용 id / 이름
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams(); //337 url파라미터방식 useParams 객체 형태로 조회가 가능하다
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};
export default Article;
