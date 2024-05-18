import "./App.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Article from "./components/Article.js";
import Button from "./components/Button.js";
import Title from "./components/Title.js";
import Textbook from "./components/Textbook/Textbook.js";

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
    },
  ];

  const text = "버튼";
  const title = "제목";
  const subtitle = "부제목";

  return (
    <div className="container">
      <Header status={login} />
      <Header status={myInfo} />
      <Footer array={info} />
      <Button text={text} />
      <hr />
      <Article array={news} />
      <Textbook textbook={textbooks} />
      <Title title={title} subtitle={subtitle} />
    </div>
  );
}

export default App;
