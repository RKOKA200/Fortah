import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.png";
import EdIcon from "../../images/ed_icon.svg";
import EdIconWhite from "../../images/ed_icon_white.svg";
import ForumIcon from "../../images/forum_icon.svg";
import ForumIconWhite from "../../images/forum_icon_white.svg";
import SettingsIcon from "../../images/settings_icon.svg";
import SettingsIconWhite from "../../images/settings_icon_white.svg";
import LogOutIconWhite from "../../images/logout_white.png"
import { useLocation, Link } from "react-router-dom";
import Close from "../../images/close.png";
import { useNavigate } from "react-router-dom";
export default function Sidebar({ isOpen, closeSide }) {
  const [active, setActive] = useState("admin");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (pathname === "/admin") {
      setActive("admin");
    } else if (pathname === "/admin/forum") {
      setActive("forum");
    } else if (pathname === "/admin/settings") {
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
          to="/admin"
          className={
            active === "admin"
              ? "link active flex ai-center"
              : "link flex ai-center"
          }
        >
          <img
            style={{ marginRight: "20px" }}
            src={active === "admin" ? EdIcon : EdIconWhite}
          />
          <p className="fs-16 fw-regular">Educational Sections</p>
        </Link>

        <Link
          to="/admin/forum"
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
          to="/admin/settings"
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
      <button className="link flex ai-center" onClick={logout} > 
        <img
          style={{ marginRight: "20px", width: "24.55px", height: "24.55px"}}
          src={LogOutIconWhite}
        />
          Logout
      </button>
    </div>
  );
}
