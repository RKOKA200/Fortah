import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.png";
import EdIcon from "../../images/ed_icon.svg";
import EdIconWhite from "../../images/ed_icon_white.svg";

import ForumIcon from "../../images/forum_icon.svg";
import ForumIconWhite from "../../images/forum_icon_white.svg";

import MacroIcon from "../../images/macro_icon.svg";
import MacroIconWhite from "../../images/macro_icon_white.svg";

import SettingsIcon from "../../images/settings_icon.svg";
import SettingsIconWhite from "../../images/settings_icon_white.svg";

import { useLocation, Link } from "react-router-dom";
import Close from "../../images/close.png";
import { useNavigate } from "react-router-dom";
export default function Sidebar({ isOpen, closeSide }) {
  const [active, setActive] = useState("client");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (pathname === "/client") {
      setActive("client");
    } else if (pathname === "/client/forum") {
      setActive("forum");
    } else if (pathname === "/client/macro") {
      setActive("macro");
    } else if (pathname === "/client/settings") {
      setActive("settings");
    }
  }, [pathname]);

  const logout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("type");
  };
  return (
    <div className={isOpen ? "sidebar sidebar-show" : "sidebar"}>
      <div className="close" onClick={closeSide}>
        <img src={Close} alt="" />
      </div>
      <div>
        <img src={Logo} className="img-res" alt="Logo" />
      </div>
      <nav className="sidebar-links">
        <Link
          to="/client"
          className={
            active === "client"
              ? "link active flex ai-center"
              : "link flex ai-center"
          }
        >
          <img
            style={{ marginRight: "20px" }}
            src={active === "client" ? EdIcon : EdIconWhite}
          />
          <p className="fs-16 fw-regular">Educational Sections</p>
        </Link>
        <Link
          to="/client/macro"
          className={
            active === "macro"
              ? "link active flex ai-center"
              : "link flex ai-center"
          }
        >
          <img
            style={{ marginRight: "20px" }}
            src={active === "macro" ? MacroIcon : MacroIconWhite}
          />
          <p className="fs-16 fw-regular">Macro Builder</p>
        </Link>
        <Link
          to="/client/forum"
          className={
            active === "forum"
              ? "link active flex ai-center"
              : "link flex ai-center"
          }
        >
          <img
            style={{ marginRight: "20px" }}
            src={active === "forum" ? ForumIcon : ForumIconWhite}
          />
          <p className="fs-16 fw-regular">Forum</p>
        </Link>
        <Link
          to="/client/settings"
          className={
            active === "settings"
              ? "link active flex ai-center"
              : "link flex ai-center"
          }
        >
          <img
            style={{ marginRight: "20px" }}
            src={active === "settings" ? SettingsIcon : SettingsIconWhite}
          />
          <p className="fs-16 fw-regular">Settings</p>
        </Link>
      </nav>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
