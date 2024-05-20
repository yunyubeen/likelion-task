import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Button from "./components/Button";
import Title from "./components/Title";
import Textbook from "./components/Textbook/Textbook";
import Login from "./components/Login/Login";

function App() {
  const login = "로그인";
  const myInfo = "내 정보";

  const info = ["이용약관", "개인정보처리방침", "고객센터", "사업자 정보확인"];

  const news = [
    "로보뉴스",
    "[리포트 브피링] 삼성전자, '기회가 왔다' 목표가 94,000원",
    "[서울 = 뉴스핌] 로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해 '기회가 왔다'라며 투자의견 '매수(유지)'의 신규 리포트를 발행하였고, 목표를 94,000원으로 내놓았다...",
    "https://s3-alpha-sig.figma.com/img/bdf4/2965/7458d9a36ced3929ad84a79fa527d95c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OaZrd~o2ArQ3e3bPXNYfPMw5khIQWd0KkT0wqFtfXA0nJtJyPW8QeMRcZYRr25eHhJfx17y4kAVkPfOjxv0sWXbd1-FYBZcftFl7u~59glfZZ61qvuYRIt2OA7ozxXCj8O40AhYJozaQLU-OjHAlYRhmmqLwA~yRJWHL5ZfR3Uv0-GJgEVJUIpSdfqGO3ENF8-LN7BuK3dkUGQwAcwR1JEBMi6yWfrSRLcsrPIH8~5MbRKfZSJ2t477FYUsBFTSDIub1vTk2MflWHkfFSU-s46VqjpQx7pclP3urFaCLInCy~Hv0e7nRvsi8SXObMQwpXKAbUXI97N5jw-m3d6KipQ__",
  ];

  const textbooks = [
    {
      text: "주식 기본 용어, 알고 시작하자!",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/56bd/01c3/ee396acdecf45aa83c16732f6aa5107e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HGgKo5BOKo54Y59rPUZHfEXEsEYRjG5sCdM1ZIrSa9-~n4PNMNfeSZRGK-or7DQ4S7kNUhMvwyq4tugYbNj7xNEXRALIVgzA-yIRU3UbCP0XyFT6wMXWea7vj-73bUtv0ihpBdBYZakRStlTy5rwgHg8OOs9lQNHygmnNGbjYALU0WmzVb-BHGwLwJ5xXullpv7wIjKCyvR0Kcc-dT-M0IqSmKHgcKXyEs6Ll77XCm4Q0J9lPAVbqUfwQZyAkctb16QmATwfGhdLWiLO0QjJ~XDUI4uUkG7CUpAZU4SgBipN6VUZ1OZkVAVn7nEL~7DWB6fX628bFVpHe-3e9Xrmnw__",
    },
  ];

  const text = "버튼";
  const title = "제목";
  const subtitle = "부제목";

  return (
    <Router>
      <div className="container">
        <Header status={login} />
        <Header status={myInfo} />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <>
                <Footer array={info} />
                <Button text={text} />
                <hr />
                <Article array={news} />
                <Textbook textbook={textbooks} />
                <Title title={title} subtitle={subtitle} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
