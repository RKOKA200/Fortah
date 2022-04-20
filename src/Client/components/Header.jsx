import React from "react";
import Bell from "../../images/bell.svg";
import User from "../../images/user.png";
import ArrowDown from "../../images/chevron-down.svg";
import Ham from "../../images/ham.png";
export default function Header({ showSide }) {
  return (
    <div className="header flex jc-end ai-center">
      <div className="ham" onClick={showSide}>
        <img src={Ham} alt="" />
      </div>
      <div className="notification flex ai-center jc-center">
        <img src={Bell} />
      </div>
      <div className="user flex ai-center">
        <div className="pic">
          <img src={User} alt="" />
        </div>
        <p className="text fs-16 fw-semi">John Doe</p>
        <img id="the-arrow" src={ArrowDown} />
      </div>
    </div>
  );
}
