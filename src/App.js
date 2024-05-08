import "./App.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Article from "./components/Article.js";
import Button from "./components/Button.js";
import Title from "./components/Title.js";

function App() {
  const login = "로그인";
  const myInfo = "내 정보";

  const info = ["이용약관", "개인정보처리방침", "고객센터", "사업자 정보확인"];

  const news = [
    "로보뉴스",
    "[리포트 브피링] 삼성전자, '기회가 왔다' 목표가 94,000원",
    "[서울 = 뉴스핌] 로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해 '기회가 왔다'라며 투자의견 '매수(유지)'의 신규 리포트를 발행하였고, 목표를 94,000원으로 내놓았다...",
    "https://s3-alpha-sig.figma.com/img/bdf4/2965/7458d9a36ced3929ad84a79fa527d95c?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SeWDaRD1ezBQxr-urqVa4ALOcxVXL-Emfcr3X14-9bIj9hxSVQuO~plNRTxXqTzMRHrRXHr6veab4VMEXe0zUVfR~EtM8X-fkxneVam2LrEWLErCvnYmjyNekeGWnLU1c3ot5UYhXeuFX7oHLOH5-EEND9ML-W7y0vtVQWyhUy8sDTJENjMvbahc4qhFy9u4kOZxigPJ4Xn4BGwxHsaXqgTM5Yr-gr-skI52kcQ9S8kPZwx32hblrgIxz4BFhYLkBc2omgy6~X9AO0Gf-b6cc2dL921n5zYnQDaSWGTbHPqfT6KJP9ymxdMFbxp0diskhlw0sJi0U0XArW5Mykh90A__",
  ];

  const text = "버튼";
  const title = "제목";
  const subtitle = "부제목";

  return (
    <div>
      <Header status={login} />
      <Header status={myInfo} />
      <Footer array={info} />
      <Button text={text} />
      <hr />
      <Article array={news} />
      <Title title={title} subtitle={subtitle} />
    </div>
  );
}

export default App;
