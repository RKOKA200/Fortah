import React from "react";
import Lesson from "../../images/lesson1.jpg";
export default function AdSingleEducation() {
  return (
    <div className="single-education">
      <div className="start flex ai-center jc-spaceb">
        <div className="flex ai-center">
          <p className="title fs-26 fw-semi">Educational Sections</p>
          <span></span>
          <p className="subtitle fs-16 fw-semi">Stimulus and Recovery</p>
        </div>
        <div>
        <button className="fs-16 fw-regular" >+ Add Video</button>
        <button className="fs-16 fw-regular">- Remove Video</button>
        </div>
        
      </div>
      <div className="items">
        <div className="item flex fd-column ai-center">
          <div className="image">
            <img className="img-res" src={Lesson} alt="" />
          </div>
          <p className="fs-18 fw-regular">Lesson 1</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="image">
            <img className="img-res" src={Lesson} alt="" />
          </div>
          <p className="fs-18 fw-regular">Lesson 1</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="image">
            <img className="img-res" src={Lesson} alt="" />
          </div>
          <p className="fs-18 fw-regular">Lesson 1</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="image">
            <img className="img-res" src={Lesson} alt="" />
          </div>
          <p className="fs-18 fw-regular">Lesson 1</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="image">
            <img className="img-res" src={Lesson} alt="" />
          </div>
          <p className="fs-18 fw-regular">Lesson 1</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="image">
            <img className="img-res" src={Lesson} alt="" />
          </div>
          <p className="fs-18 fw-regular">Lesson 1</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="image">
            <img className="img-res" src={Lesson} alt="" />
          </div>
          <p className="fs-18 fw-regular">Lesson 1</p>
        </div>

        <div className="item flex fd-column ai-center">
          <div className="image">
            <img className="img-res" src={Lesson} alt="" />
          </div>
          <p className="fs-18 fw-regular">Lesson 1</p>
        </div>
      </div>
    </div>
  );
}
