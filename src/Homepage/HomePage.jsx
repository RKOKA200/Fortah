import Logo from "../images/logo.png";
import HomePic from "../images/home-pic.png";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="home flex">
      <div className="left">
        <img src={Logo} alt="Logo" />
        <p className="title fs-42 fw-semi">Welcome</p>
        <p className="text fs-16 fw-light">
          Fortah is not your usual fitness application filled with unrealistic
          promises and a bunch of different workouts that are ineffective and
          have no evidence-based approach. Instead it aims to have a much bigger
          goal. Fortah means Fundamentals of Resistance Training and
          Hypertrophy, which reflects our goal to deliver accurate and
          evidence-based information about all the variables that play a role in
          resistance training, and how that information can be applied in the
          gym floor.
        </p>
        <p id="second-paragraph" className="text fs-16 fw-light">
          We believe every individual deserves to have a high level of education
          which unfortunately in the fitness industry is severely lacking
          specially when it comes to beginners. Rather our goal is to deliver
          the necessary basics to have an understanding of human anatomy,
          physics and biomechanics and how these variables play a role in the
          wider picture. By learning the fundamentals you will be able to be a
          critical thinker and a problem solver in any gym situation rather than
          blindly following what you are told to do.
        </p>
        <Link to="/login" className="login-btn fs-20 fw-regular">Login</Link>
      </div>
      <div className="right">
        <img className="img-res" src={HomePic} alt="" />
      </div>
    </div>
  );
}
