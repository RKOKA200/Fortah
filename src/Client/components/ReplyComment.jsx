import React, { useState, useEffect } from "react";
import SingleImg from "../../images/forum1.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CommentUser from "../../images/commentuser.png";
export default function ReplyCommnet() {
  const { commentid, forumid } = useParams();
  const [singleTopic, setSingleTopic] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [singleDisc, setSingleDisc] = useState(null);

  const getAllComments = () => {
    axios
      .post("http://localhost/fortah-backend/topic/getComments", {
        topic_id: parseInt(commentid),
      })
      .then((res) => {
        setComments(res.data);
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
    getAllComments();
  }, []);

  const getSingleTopic = () => {
    axios
      .post("http://localhost/fortah-backend/topic/getSingleTopic", {
        id: parseInt(commentid),
      })
      .then((res) => {
        setSingleTopic(res.data);
      });
  };

  useEffect(() => {
    getSingleTopic();
  }, []);

  const createComment = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/fortah-backend/topic/createComment", {
        title: comment,
        topic_id: parseInt(commentid),
        type: 1,
        user_type: parseInt(localStorage.getItem("type")),
      })
      .then((res) => {
        setComment("");
        getAllComments();
      });
  };

  return (
    <div className="reply-comment">
      <div className="enter flex ai-center jc-spaceb" style={{ width: "100%" }}>
        <div className="item flex ai-center">
          <div className="flex">
            <img className="img-res" src={SingleImg} alt="" />
          </div>
          <div className="info">
            <div className="flex ai-center">
              <Link to={'/client/forum'} className="title fs-26 fw-semi">Discussion |</Link>
              <Link to={`/client/forum/${forumid}`} className="subtitle fs-26 fw-semi">{singleDisc !== null && singleDisc.title} |</Link>
              <p className="fr-title fs-16 fw-semi">
                {singleTopic !== null && singleTopic.title}
              </p>
            </div>
            <p className="comments fs-14 fw-light">5 comments</p>
          </div>
        </div>
      </div>

      <div className="item flex fd-column ai-start">
        {/* <p className="date fs-16 fw-regular">January 16, 2022 at 12:02pm</p> */}
        <div className="main flex ai-start">
          <div className="left flex fd-column ai-center ">
            <div className="img">
              <img
                src={
                  singleTopic !== null &&
                  `http://localhost/fortah-backend/files/${singleTopic.image}`
                }
                className="img-res"
              />
            </div>
            {/* <p className="fs-16 fw-regular">Rei Koka</p> */}
          </div>
          <div className="right">
            <p className="fs-16 fw-regular">
              {singleTopic !== null && singleTopic.description}
            </p>
          </div>
        </div>
      </div>

      {comments.map((item) => (
        <>
          {item.type === "2" ? (
            <div className="comments flex fd-column ai-start">
              <div className="item flex fd-column ai-end ">
                <div className="top flex ai-center">
                  <div className="img">
                    <img src={CommentUser} className="img-res" />
                  </div>
                  <div className="texts">
                    <audio
                      controls
                      src={`http://localhost/fortah-backend/files/${item.title}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="comments flex fd-column ai-start">
              <div
                className={
                  item.user_type === "1"
                    ? "item flex fd-column ai-end"
                    : "item flex fd-column ai-start "
                }
              >
                <div className="top flex ai-center">
                  <div className="img">
                    <img src={CommentUser} className="img-res" />
                  </div>
                  <div className="texts">
                    <p className="title fs-16 fw-regular">{item.user_type === "1" ? "Admin" : "User" }</p>
                    <p className="text fs-14 fw-light">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
      <form
        className="reply-form flex fd-column ai-end"
        onSubmit={createComment}
      >
        <textarea
          className="fs-16 fw-light"
          name=""
          id=""
          cols="30"
          rows="10"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <button className="fs-16 fw-regular">Reply</button>
      </form>
    </div>
  );
}
