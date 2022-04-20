import React, { useState, useEffect } from "react";
import CreateTopic from "./CreateTopic";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SingleForum() {
  const [newTopic, setNewTopic] = useState(false);
  const { forumid } = useParams();
  const [singleDisc, setSingleDisc] = useState(null);
  const [topics, setTopics] = useState([]);
  const closeModal = () => {
    setNewTopic(false);
  };

  const getAllTopics = () => {
    axios
      .post("http://localhost/fortah-backend/topic/getAllTopics", {
        disc_id: parseInt(forumid),
      })
      .then((res) => {
        setTopics(res.data);
      });
  };

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
    getAllTopics();
  }, [forumid]);

  return (
    <>
      {newTopic && <CreateTopic forumid={forumid} closeModal={closeModal} />}
      <div className="single-forum flex fd-column">
        <div
          className="enter flex ai-center jc-spaceb"
          style={{ width: "100%" }}
        >
          <div className="item flex ai-center">
            <div className="flex">
              <img
                className="img-res"
                style={{ width: "72px", height: "72px" }}
                src={
                  singleDisc !== null &&
                  `http://localhost/fortah-backend/files/${singleDisc.cover}`
                }
                alt=""
              />
            </div>
            <div className="info">
              <div className="flex ai-center">
                <Link to={'/client/forum'} className="title fs-26 fw-semi">Discussion </Link>
                <p className="subtitle fs-26 fw-semi">{singleDisc !== null && singleDisc.title}</p>
              </div>
              <p className="comments fs-14 fw-light">5 comments</p>
            </div>
          </div>

          <button
            onClick={() => {
              setNewTopic(true);
            }}
            className="create-topic-btn fs-16 fw-regular"
          >
            + Create Topic
          </button>
        </div>
        <div className="topics">
          {topics.map((item) => (
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
                </div>
              </div>
              <Link
                to={`/client/forum/${forumid}/${item.id}`}
                className="reply-btn fs-16 fw-regular"
              >
                Reply
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
