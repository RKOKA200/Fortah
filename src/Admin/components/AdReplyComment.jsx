import React, { useState, useEffect } from "react";
import SingleImg from "../../images/forum1.png";
import Mic from "../../images/Mic.svg";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import CommentUser from "../../images/commentuser.png";
export default function AdReplyComment() {
  const { commentid, forumid } = useParams();
  const [comments, setComments] = useState([]);
  const [voice, setVoice] = useState(false);
  const [title, setTitle] = useState("");
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
        user_type: parseInt(localStorage.getItem("type"))
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
        getAllComments()
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
            <img className="img-res" src={SingleImg} alt="" />
          </div>
          <div className="info">
            <div className="flex ai-center">
              <p className="title fs-26 fw-semi">Discussion |</p>
              <p className="subtitle fs-26 fw-semi">Training </p>
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
            <p className="fs-16 fw-regular">{commentid.user_type === "1" ? "Admin" : "User" }</p>
          </div>
          <div className="right">
            <p className="fs-16 fw-regular">
              Hey guys! I am subscribed to jps and Id like to hear your opinion
              one of his advice He is a big advocate of full body training and I
              would like to adapt his 3 time per week full body routine but he
              says that you need to have difffrent rotations. My gym is pretty
              minimalistic ( no fancy machines) and I can only use a smith,
              barbells, dumbbells and some basic machines like a leg curl.
              That's the reason why I cant put together two rotations and now i
              wonder if the exact same routine perfomed three times a week will
              slow down my progress. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore Thanks in advance!
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
                      <audio controls src={`http://localhost/fortah-backend/files/${item.title}`} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="comments flex fd-column ai-start">
              <div className={item.user_type === "1" ? "item flex fd-column ai-end" :  "item flex fd-column ai-start " } >
                <div className="top flex ai-center">
                  <div className="img">
                    <img src={CommentUser} className="img-res" />
                  </div>
                  <div className="texts">
                    <p className="title fs-16 fw-regular">{item.user_type === "1" ? "Admin" : "User" }</p>
                    <p className="text fs-14 fw-light">
                        {item.title}
                    </p>
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
