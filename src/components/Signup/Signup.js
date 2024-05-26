import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form className="signupform">
        <div>
          <label>이름</label>
          <input type="text" id="name" />
        </div>
        <div className="horizontal-container">
          <div>
            <label>이메일</label>
            <input type="email" id="email" />
          </div>

          <div>
            <button type="submit" className="mini-btn">
              인증하기
            </button>
          </div>
        </div>

        <div>
          <label>비밀번호</label>
          <input type="password" id="pwd" />
        </div>
        <div>
          <label>비밀번호 재입력</label>
          <input type="password" id="pwd" />
        </div>

        <div>
          <button type="submit" className="signup-btn">
            <p>회원가입</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
