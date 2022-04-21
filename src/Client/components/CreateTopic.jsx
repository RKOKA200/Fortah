import React, { useState } from "react";
import axios from "axios";

export default function CreateTopic({ closeModal, forumid }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const createTopic = (e) => {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("image", image);
    formdata.append("desc_id", parseInt(forumid));
    formdata.append("user_id", parseInt(localStorage.getItem("id")));
    axios
      .post("http://localhost/fortah-backend/topic/createTopic", formdata)
      .then((res) => {
        if (res.data.status === 1) {
          closeModal();
        }
      });
  };

  return (
    <div className="create-topic flex jc-center ai-center">
      <div className="opa" onClick={closeModal}></div>
      <div className="model flex fd-column ai-center">
        <p className="title fs-22 fw-semi">Create Topic</p>
        <form className="flex fd-column ai-start" onSubmit={createTopic}>
          <div className="input flex fd-column ai-start">
            <label className="fs-16 fw-regular" htmlFor="">
              Title
            </label>
            <input
              type="text"
              name=""
              id=""
              className="fs-16 fw-regular"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="input flex fd-column ai-start">
            <label htmlFor="" className="fs-16 fw-regular">
              Description
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="fs-16 fw-regular"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <input
            required
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button className="fs-16 fw-semi">Create Topic</button>
        </form>
      </div>
    </div>
  );
}
