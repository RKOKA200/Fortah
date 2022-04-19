import React, { useState, useEffect } from "react";
import SingleImg from "../../images/forum1.png";
import Mic from "../../images/Mic.svg";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import CommentUser from "../../images/commentuser.png";
export default function AdReplyComment() {
  const { commentid, forumid } = useParams();
  const [comments, setComments] = useState([]);
  const [voice, setVoice] = useState(false);
  const [title, setTitle] = useState("");
  const [singleDisc, setSingleDisc] = useState(null);
  const [singleTopic, setSingleTopic] = useState(null);
  useEffect(() => {
    axios
      .post("http://localhost/fortah-backend/topic/getSingleDiscussion", {
        id: parseInt(forumid),
      })
      .then((res) => {
        setSingleDisc(res.data);
      });
  }, [forumid]);

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
    getAllComments();
  }, []);

  const createComment = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/fortah-backend/topic/createComment", {
        title,
        topic_id: commentid,
        type: 1,
        user_type: parseInt(localStorage.getItem("type")),
      })
      .then((res) => {
        setTitle("");
        getAllComments();
      });
  };

  const [audioDetails, setAudioDetails] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0,
    },
  });

  function handleAudioStop(data) {
    console.log(data);
    setAudioDetails(data);
  }

  function handleAudioUpload(file) {
    console.log(file);
    const formdata = new FormData();
    formdata.append("audio", file);
    formdata.append("topic_id", parseInt(commentid));
    formdata.append("type", 2);

    axios
      .post(
        "http://localhost/fortah-backend/topic/createCommentAdmin",
        formdata
      )
      .then((res) => {
        console.log(res.data);
        getAllComments();
      });
  }

  function handleCountDown(data) {
    console.log(data);
  }

  function handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    setAudioDetails(reset);
  }

  return (
    <div className="reply-comment">
      <div className="enter flex ai-center jc-spaceb" style={{ width: "100%" }}>
        <div className="item flex ai-center">
          <div className="flex">
            <img
              className="img-res"
              src={
                singleTopic !== null
                  ? `http://localhost/fortah-backend/files/${singleTopic.image}`
                  : ""
              }
              style={{ width: "72px", height: "72px" }}
              alt=""
            />
          </div>
          <div className="info">
            <div className="flex ai-center">
              <Link to={"/admin/forum"} className="title fs-26 fw-semi">
                Discussion |
              </Link>
              <Link
                to={`/admin/forum/${forumid}`}
                className="subtitle fs-26 fw-semi"
              >
                {singleDisc !== null && singleDisc.title} |{" "}
              </Link>
              <p className="fr-title fs-16 fw-semi">
                {singleTopic !== null && singleTopic.title}
              </p>
            </div>
            <p className="comments fs-14 fw-light">5 comments</p>
          </div>
        </div>
      </div>

      <div className="item flex fd-column ai-start">
        <p className="date fs-16 fw-regular">January 16, 2022 at 12:02pm</p>
        <div className="main flex ai-start">
          <div className="left flex fd-column ai-center ">
            <div className="img">
              <img src={CommentUser} className="img-res" />
            </div>
            <p className="fs-16 fw-regular">
              {commentid.user_type === "1" ? "Admin" : "User"}
            </p>
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
                    <p className="title fs-16 fw-regular">
                      {item.user_type === "1" ? "Admin" : "User"}
                    </p>
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
        {!voice && (
          <textarea
            className="fs-16 fw-light"
            name=""
            id=""
            cols="30"
            rows="10"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></textarea>
        )}
        <div>
          {voice === false ? (
            <button
              type="button"
              onClick={() => setVoice(true)}
              className="fs-16 fw-regular"
            >
              {" "}
              <img src={Mic} /> Voice
            </button>
          ) : (
            <button
              type="button"
              className="fs-16 fw-regular"
              onClick={() => setVoice(false)}
            >
              {" "}
              <img src={Mic} /> Cancel Voice
            </button>
          )}

          {!voice && (
            <button type="submit" className="fs-16 fw-regular">
              Reply
            </button>
          )}
        </div>
      </form>
      {voice && (
        <Recorder
          record={true}
          title={"New recording"}
          audioURL={audioDetails.url}
          showUIAudio
          handleAudioStop={(data) => handleAudioStop(data)}
          handleAudioUpload={(data) => handleAudioUpload(data)}
          handleCountDown={(data) => handleCountDown(data)}
          handleReset={() => handleReset()}
          mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
        />
      )}
    </div>
  );
}
