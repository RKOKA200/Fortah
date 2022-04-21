import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Camera from "../../images/camera.png";
import axios from "axios";
export default function AdForum() {
  const [addNew, setAddNew] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [discussion, setDiscussions] = useState([]);
  const createDiscussion = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    axios
      .post("http://localhost/fortah-backend/topic/createDiscussion", formData)
      .then((res) => {
        if (res.data.status === 1) {
          setAddNew(false);
          getAllDiscussions();
        }
      });
  };

  const getAllDiscussions = () => {
    axios
      .get("http://localhost/fortah-backend/topic/getAllDiscussion")
      .then((res) => {
        setDiscussions(res.data);
      });
  };

  useEffect(() => {
    getAllDiscussions();
  }, []);

  return (
    <>
      {addNew && (
        <div className="add-education flex jc-center ai-center">
          <div
            className="add-education-opa"
            onClick={() => setAddNew(false)}
          ></div>
          <form
            className="flex fd-column ai-center"
            onSubmit={createDiscussion}
          >
            <p className="title fs-22 fw-semi">Create Discussion</p>
            <div className="input flex fd-column ai-start">
              <label className="fs-16 fw-regular" htmlFor="">
                Discussion Title
              </label>
              <input
                value={title}
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label
                className="fs-14 fw-regular file-label"
                htmlFor="input-file-tag"
              >
                <div className="camera-icon">
                  <img src={Camera}></img>
                </div>
                <p>Add Photo</p>
                <input
                  className="input-file-tag"
                  id="input-file-tag"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </label>
            </div>

            <button>Create Discussion</button>
          </form>
        </div>
      )}
      <div className="forum">
        <div className="start flex ai-center jc-spaceb">
          <p className="title fs-26 fw-semi">Discussion</p>
          <div>
            <button
              className="fs-16 fw-regular"
              onClick={() => setAddNew(true)}
            >
              + Add Discussion
            </button>
            <button className="fs-16 fw-regular">- Remove Discussion</button>
          </div>
        </div>

        <div className="items flex fd-column ai-start">
          {discussion.map((item) => (
            <Link
              to={`/admin/forum/${item.id}`}
              className="item flex ai-center"
            >
              <div>
                <img
                  style={{
                    width: "72px",
                    height: "72px",
                  }}
                  src={`http://localhost/fortah-backend/files/${item.cover}`}
                  className="img-res"
                />
              </div>
              <div className="texts">
                <p className="title fs-24 fw-semi">{item.title}</p>
                <p className="comments fs-14 fw-regular ">19 comments</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
