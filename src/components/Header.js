import { useState } from "react";
import "./Header.css";
import 기본프로필 from "../assets/img/기본프로필 1.svg";
import 가로형로고 from "../assets/img/가로형 로고.svg";

const Header = ({ status }) => {
  return (
    <div id="header">
      <div id="logo">
        <img src={가로형로고} />
      </div>
      <div id="tab">
        <span>뉴스</span>
        <span>교과서</span>
      </div>
      <div id="empty"></div>
      <div id="search">
        <input type="text" placeholder="Search..." />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z"
            fill="black"
          />
        </svg>
      </div>
      <div id="status">
        {status === "로그인" ? (
          <span>{status}</span>
        ) : (
          <>
            <span>{status}</span>
            &nbsp;
            <img src={기본프로필} height={36} />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
