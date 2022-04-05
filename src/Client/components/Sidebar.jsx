import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.png";
import EdIcon from "../../images/ed_icon.svg";
import EdIconWhite from "../../images/ed_icon_white.svg";

import ForumIcon from "../../images/forum_icon.svg";
import ForumIconWhite from "../../images/forum_icon_white.svg"

import MacroIcon from "../../images/macro_icon.svg"
import MacroIconWhite from "../../images/macro_icon_white.svg";

import SettingsIcon from "../../images/settings_icon.svg";
import SettingsIconWhite from "../../images/settings_icon_white.svg";

import { useLocation, Link } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("client");

  const { pathname } = useLocation();

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

  return (
    <div className="sidebar">
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
    </div>
  );
}
