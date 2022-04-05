import React from "react";
import Cat1 from "../../images/Category1.png";
import Cat2 from "../../images/Category2.png";
import Cat3 from "../../images/Category3.png";
import Cat4 from "../../images/Category4.png";
import Cat5 from "../../images/Category5.png";

export default function AdEducationalSystem() {
  return (
    <div className="education">
      <div className="start flex ai-center jc-spaceb">
        <div>
          <p className="title fs-26 fw-semi">Educational Sections</p>
          <p className="subtitle fs-16 fw-regular">
            Choose the best program that fits your needs
          </p>
        </div>
        <button className="fs-16 fw-regular" >+ Add Category</button>
      </div>
      <div className="items">
        <div className="item flex fd-column ai-center">
          <div className="cover">
            <img className="img-res" src={Cat1} alt="" />
          </div>
          <p className="fs-18 fw-regular">
            Introduction and Purpose of the curriculum
          </p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="cover">
            <img className="img-res" src={Cat2} alt="" />
          </div>
          <p className="fs-18 fw-regular">Stimulus and Recovery</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="cover">
            <img className="img-res" src={Cat3} alt="" />
          </div>
          <p className="fs-18 fw-regular">Exercise Selection Principles</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="cover">
            <img className="img-res" src={Cat4} alt="" />
          </div>
          <p className="fs-18 fw-regular">Muscle Physiology</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="cover">
            <img className="img-res" src={Cat5} alt="" />
          </div>
          <p className="fs-18 fw-regular">Strength & Resistance Profile</p>
        </div>
      </div>
    </div>
  );
}
