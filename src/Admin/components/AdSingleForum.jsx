import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function AdSingleForum() {
  const { forumid } = useParams();
  const [singleDisc, setSingleDisc] = useState(null);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost/fortah-backend/topic/getSingleDiscussion", {
        id: parseInt(forumid),
      })
      .then((res) => {
        setSingleDisc(res.data);
      });
  }, [forumid]);

  useEffect(() => {
    axios
      .post("http://localhost/fortah-backend/topic/getAllTopics", {
        disc_id: parseInt(forumid),
      })
      .then((res) => {
        setAllTopics(res.data);
      });
  }, [forumid]);

  return (
    <div id="forum-1" className="single-forum flex fd-column">
      <div className="enter flex ai-center jc-spaceb" style={{ width: "100%" }}>
        <div className="item flex ai-center">
          <div className="flex">
            <img
              style={{ width: "72px", height: "72px" }}
              className="img-res"
              src={
                singleDisc !== null &&
                `http://localhost/fortah-backend/files/${singleDisc.cover}`
              }
              alt=""
            />
          </div>
          <div className="info">
            <div className="flex ai-center">
              <Link to={"/admin/forum"} className="title fs-26 fw-semi">
                Discussion{" "}
              </Link>
              <p className="subtitle fs-22 fw-semi">
                {singleDisc !== null && singleDisc.title}
              </p>
            </div>
            <p className="comments fs-14 fw-light">5 comments</p>
          </div>
        </div>

        <button className="delete-topic-btn fs-16 fw-regular">- Delete</button>
      </div>
      <div className="topics">
        {allTopics.map((item) => (
          <div className="item flex ai-center jc-spaceb">
            <div className="left flex ai-center">
              <div className="img">
                <img
                  src={`http://localhost/fortah-backend/files/${item.image}`}
                  className="img-res"
                  alt=""
                />
              </div>
              <div className="info  flex fd-column ai-start">
                <p className="title fs-16 fw-semi">{item.title}</p>
                {/* <span className="extra flex ai-center">
                  <p className="fs-14 fw-light"> 5 hours ago </p>
                  <p className="fs-14 fw-light">by Adam Smith</p>
                </span> */}
              </div>
            </div>
            <Link
              to={`/admin/forum/${forumid}/${item.id}`}
              className="reply-btn fs-16 fw-regular"
            >
              Reply
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
