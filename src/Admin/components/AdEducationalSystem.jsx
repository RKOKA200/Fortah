import React, { useState, useEffect } from "react";
import axios from "axios";
import Camera from "../../images/camera.png";
import { Link } from "react-router-dom";

export default function AdEducationalSystem() {
  const [educations, setEducations] = useState([]);
  const [addEducation, setAddEducation] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const getAllEducation = () => {
    axios
      .get("http://localhost/fortah-backend/education/getAllEducation")
      .then((res) => {
        setEducations(res.data);
      });
  };

  React.useEffect(() => {
    getAllEducation();
  }, []);

  const createEducation = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    axios
      .post(
        "http://localhost/fortah-backend/education/createEducation",
        formData
      )
      .then((res) => {
        console.log(res);
        getAllEducation();
      });
  };

  return (
    <>
      {addEducation && (
        <div className="add-education flex jc-center ai-center">
          <div
            className="add-education-opa"
            onClick={() => setAddEducation(false)}
          ></div>
          <form
            id="category-form"
            className="flex fd-column ai-center"
            onSubmit={createEducation}
          >
            <p className="title fs-22 fw-semi">Add Category</p>
            <div className="input flex fd-column ai-start">
              <label htmlFor="">Title</label>
              <input
                value={title}
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <label
              className="fs-14 fw-regular category-label"
              htmlFor="input-file-tag-thumbnail"
            >
              <div className="camera-icon">
                <img src={Camera}></img>
              </div>
              <input
                className="input-file-tag"
                id="input-file-tag-thumbnail"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <p id="category-p">Choose Thumbnail</p>
            </label>

            <button>Create Category</button>
          </form>
        </div>
      )}
      <div className="education">
        <div className="start flex ai-center jc-spaceb">
          <div>
            <p className="title fs-26 fw-semi">Educational Sections</p>
            <p className="subtitle fs-16 fw-regular">
              The time to train smarter is now
            </p>
          </div>
          <button
            className="fs-16 fw-regular"
            onClick={() => setAddEducation(true)}
          >
            + Add Category
          </button>
        </div>
        <div className="items">
          {educations.map((education) => (
            <Link
              to={`/admin/${education.id}`}
              className="item flex fd-column ai-center"
            >
              <div className="cover">
                <img
                  className="img-res"
                  src={`http://localhost/fortah-backend/files/${education.image}`}
                  alt=""
                />
              </div>
              <p className="fs-16 fw-regular">{education.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
