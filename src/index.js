//[[[멀티페이지 애플리케이션]]]
//사용자의 인터렉션이 많고 다양한 정보를 제공하는 모던 웹 애플리케이션은 이방식이 적합하지 않다 (서버에서 모든 준비해서 응답받는 형식)자원낭비
//[[[싱글펭지 애플리케이션]]]
//싱글페이지 애플리케이션이란 : 하나의 페이지로 이루어짐
//리액트라이브러리를 이용해 뷰 렌더링을 사용자의 브라우저가 담당 웹 애플리케이션이 사용자 브라우저에서 실행이 되면 필요한 부분만 자바스크립트를 사용하여 업데이트 해주는 방식
//새로운 데이터가 필요하면 서버API를 호출하여 필요한 데이터만 새로 불러와서 애플리케이션 사용하는 방식
//Router 적용
//순서 1.보여질 페이지 컴포넌트 생성 2. App.js에서 라이브러리 이용 path로 설정 3. index.js 해당 컴포넌트에서 App.js를 <BrowserRouter> 감싼뒤 출력
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //react-router-dom내장되어 있는 <BrowserRouter> 컴포넌트로 감싸주기
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
