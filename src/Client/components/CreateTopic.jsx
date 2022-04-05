import React from "react";

export default function CreateTopic({closeModal}) {
  return (
    <div className="create-topic flex jc-center ai-center">
      <div className="opa" onClick={closeModal} ></div>
      <div className="model flex fd-column ai-center">
        <p className="title fs-22 fw-semi">Create Topic</p>
        <form className="flex fd-column ai-start">
          <div className="input flex fd-column ai-start">
            <label className="fs-16 fw-regular" htmlFor="">Title</label>
            <input type="text" name="" id="" className="fs-16 fw-regular"/>
          </div>
          <div className="input flex fd-column ai-start">
            <label htmlFor="" className="fs-16 fw-regular">Description</label>
            <textarea name="" id="" cols="30" rows="10" className="fs-16 fw-regular"></textarea>
          </div>
          <p className="photo fs-16 fw-regular" >Add Photos</p>
          <button className="fs-16 fw-semi">Create Topic</button>
        </form>
      </div>
    </div>
  );
}
