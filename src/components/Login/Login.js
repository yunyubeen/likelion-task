import React from "react";
import "./Login.css";
import kakaoIcon from "../../assets/img/kakao.png";
import naverIcon from "../../assets/img/naver.png";
import googleIcon from "../../assets/img/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h2>사용자 로그인</h2>
      <form className="loginform">
        <div className="login-data">
          <label>이메일 주소</label>
          <input type="email" id="email" />
        </div>
        <div className="login-data">
          <label>비밀번호</label>
          <input type="password" id="pwd" />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="remember" />
          <label>아이디 기억하기</label>
        </div>
        <div>
          <button type="submit" className="login-btn">
            로그인
          </button>
        </div>
      </form>

      <div>
        <p>
          <Link to="/signup" className="custom-link">
            이메일로 회원가입
          </Link>
        </p>
        <div className="social-login">
          <img src={kakaoIcon} alt="kakao" />
          <img src={naverIcon} alt="naver" />
          <img src={googleIcon} alt="google" />
        </div>
      </div>
    </div>
  );
};

export default Login;
