import Half from "../images/half-logo.png";
import Logo from "../images/logo.png";
import { useState } from "react";
import Email from "../images/email.svg";
import Eye from "../images/eye.svg";
import Eye2 from "../images/eye-hide.svg";
export default function Login() {
  const [active, setActive] = useState("login");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="login flex fd-column ai-center">
      <div className="half">
        <img className="img-res" src={Half} alt="" />
      </div>
      <div className="logo">
        <img className="img-res" src={Logo} alt="" />
      </div>
      <div
        className={
          active === "login"
            ? "main flex fd-column ai-center"
            : "main-reg flex fd-column ai-center"
        }
      >
        <div className="active-routes flex ai-center">
          <p
            onClick={() => {
              setActive("login");
            }}
            className={
              active === "login"
                ? "fs-28 fw-semi active"
                : "fs-28 fw-semi default"
            }
          >
            Login
          </p>
          <span className="fs-28 fw-semi">/</span>
          <p
            onClick={() => {
              setActive("register");
            }}
            className={
              active === "register"
                ? "fs-28 fw-semi active"
                : "fs-28 fw-semi default"
            }
          >
            Register
          </p>
        </div>

        {active === "login" ? (
          <>
            <div className="input flex ai-center">
              <img src={Email} alt="" />
              <div className="input-desc flex fd-column ai-start">
                <label className="fs-14 fw-semi" htmlFor="email">
                  Email
                </label>
                <input className="fs-14 fw-semi" id="email" type="email" />
              </div>
            </div>
            <div className="input flex ai-center">
              <img src={Email} alt="" />
              <div className="input-desc flex fd-column ai-start">
                <label className="fs-14 fw-semi" htmlFor="pass">
                  Password
                </label>
                <input
                  className="fs-14 fw-semi"
                  id="pass"
                  type={showPass ? "text" : "password"}
                />
              </div>
              <img
                onClick={() => {
                  setShowPass(!showPass);
                }}
                src={showPass ? Eye : Eye2}
                alt=""
              />
            </div>
            <button className="login-btn fs-16 fw-semi">Login</button>
          </>
        ) : (
          <div className="register flex fd-column ai-center">
            <div className="inputs flex ai-start">
              <div className="input flex fd-column ai-start ">
                <label className="fs-18 fw-semi" htmlFor="">
                  Name
                </label>
                <input className="fs-18 fw-semi" type="text" />
              </div>
              <div className="input flex fd-column ai-start">
                <label className="fs-18 fw-semi" htmlFor="">
                  Email
                </label>
                <input className="fs-18 fw-semi" type="email" />
              </div>
            </div>

            <div className="inputs flex ai-start">
              <div className="input flex fd-column ai-start ">
                <label className="fs-18 fw-semi" htmlFor="">
                  Age
                </label>
                <input className="fs-18 fw-semi" type="number" />
              </div>
              <div className="input flex fd-column ai-start">
                <label className="fs-18 fw-semi" htmlFor="">
                  Password
                </label>
                <input className="fs-18 fw-semi" type="password" />
              </div>
            </div>
            <button className="reg-btn fs-16 fw-semi">Register</button>
          </div>
        )}
      </div>
    </div>
  );
}
