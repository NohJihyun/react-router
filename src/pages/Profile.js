//[[[컴포넌트설명]]]
//326(react-router싱글페이지) 1.URL파라미터:/profile/velopert 주로 id/이름 특정데이터 조회 |2.쿼리스트링 :articles?page=1&keyword-react : 키워드검색, 페이지네이션, 정렬방식등 데이터조회후 필요한 옵션전달
//326(react-router싱글페이지) URL파라미터 사용
//326(react-router싱글페이지) 1.useParams-hook을이용 객체형태로 조회가능 2.Route컴포넌트에props로 설정 3.username URL 파라미터를 통하여 프로필을 조회한다
//profile/velopert url 주소창에 작성하면 페이지이동
import { useParams } from "react-router-dom";

// 객체안에 객체 (key:값) 형태로 데이터를 담아둠
const data = {
  jihyun: {
    name: "노지현",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전소설 주인공",
  },
};

const Profile = () => {
  const params = useParams(); //useParams-hook을이용 객체형태로 조회가능
  const profile = data[params.username]; //username URL 파라미터를 통하여 프로필을 조회한다

  //상위 기본설정된 데이터를 조회한후 프로필이 존재하면 프로필 정보를, 존재하지 않으면 존재하지 않는 프로필입니다 보여주도록 설정
  return (
    <div>
      <h1>사용자 프로필</h1>
      {/* 프로필을 받아와서 삼항연산자를 사용해서 화면에 출력하였다  */}
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  );
};

export default Profile;
