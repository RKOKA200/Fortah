import React, { useState, useEffect } from "react";
import Vid from "../../images/vid1.jpg";
import CoverLesson from "../../images/coverlesson.jpg";
import CommentUser from "../../images/commentuser.png";
import AdminPic from "../../images/admin.png"
import Mic from "../../images/Mic.svg";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
export default function AdSingleLesson() {
  const { educationid, lessonid } = useParams();
  const [lessons, setAllLessons] = useState([]);
  const [singleLesson, setSingleLesson] = useState({});
  const [education, setEducation] = useState({});
  const [comments, setComments] = useState([]);
  const [replyText, setReplyText] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const [replyTit, setReplyTit] = useState("");
  const [replies, setReplies] = useState([]);
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
  const [voice, setVoice] = useState(false);

  function handleAudioStop(data) {
    console.log(data);
    setAudioDetails(data);
  }

  function handleAudioUpload(file) {
    console.log(file);
    const formdata = new FormData();
    formdata.append("audio", file);
    formdata.append("comment_id", parseInt(commentId));

    axios
      .post(
        "http://localhost/fortah-backend/education/createReplyAdmin",
        formdata
      )
      .then((res) => {
        console.log(res.data);
        getAllReplies();
        setCommentId(null);
        setVoice(false);
        handleReset();
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

  const getAllReplies = () => {
    axios
      .post("http://localhost/fortah-backend/education/getAllReplies")
      .then((res) => {
        setReplies(res.data);
      });
  };

  useEffect(() => {
    getAllReplies();
    console.log(replies);
  }, [lessonid]);

  const getAllComments = () => {
    axios
      .post("http://localhost/fortah-backend/education/getAllVideoComments", {
        video_id: parseInt(lessonid),
      })
      .then((res) => {
        setComments(res.data);
      });
  };

  useEffect(() => {
    getAllComments();
  }, [lessonid]);

  const createTextReply = () => {
    axios
      .post("http://localhost/fortah-backend/education/replyText", {
        comment_id: parseInt(commentId),
        title: replyTit,
      })
      .then((res) => {
        setReplyTit("");
        setReplyText(false);
        setCommentId(null);
        getAllReplies();
      });
  };

  const getEducation = () => {
    axios
      .post("http://localhost/fortah-backend/education/getSinlgeProgram", {
        id: parseInt(educationid),
      })
      .then((res) => {
        setEducation(res.data);
      });
  };

  React.useEffect(() => {
    getEducation();
  }, [educationid]);

  const getAllLessons = () => {
    axios
      .post("http://localhost/fortah-backend/education/getSingleEducation", {
        id: parseInt(educationid),
      })
      .then((res) => {
        setAllLessons(res.data);
      });
  };

  const getSingleLesson = () => {
    axios
      .post("http://localhost/fortah-backend/education/getSingleLesson", {
        id: parseInt(lessonid),
      })
      .then((res) => {
        setSingleLesson(res.data);
      });
  };
  useEffect(() => {
    getSingleLesson();
  }, [lessonid]);

  useEffect(() => {
    getAllLessons();
  }, [educationid]);

  return (
    <div className="single-lesson">
      <div className="start flex ai-center">
        <Link to={"/admin"} className="title fs-26 fw-semi">
          Educational Sections
        </Link>
        <span id="first-span"></span>
        <Link
          className="subtitle fs-16 fw-regular"
          to={`/admin/${educationid}`}
        >
          {education && education.title}
        </Link>
        <span></span>
        <p className="lesson fs-16 fw-regular">
          {singleLesson && singleLesson.title}
        </p>
      </div>
      <div id="single-lesson" className="item flex ai-start">
        <div className="left">
          {singleLesson && (
            <div className="cover">
              <video
                src={`http://localhost/fortah-backend/files/${singleLesson.video_src}`}
                controls
                className="img-res"
              />
            </div>
          )}

          <div className="info">
            <p className="title fs-26 fw-semi">
              {singleLesson && singleLesson.title}
            </p>
          </div>
          <div
            className="comments flex fd-column ai-start"
            style={{ width: "100%" }}
          >
            <p className="title fs-26 fw-semi">32 comments</p>
            {voice && (
              <Recorder
                style={{ width: "100%" }}
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
            {replyText && (
              <>
                <div className="input flex ai-center">
                  <div className="img">
                    <img src={CommentUser} className="img-res" />
                  </div>
                  <input
                    className="fs-16 fw-light"
                    type="text"
                    placeholder="Add comment..."
                    onChange={(e) => {
                      setReplyTit(e.target.value);
                    }}
                    value={replyTit}
                  />
                </div>
                <button
                  disabled={replyTit === "" ? true : false}
                  onClick={createTextReply}
                  className="add-comment-btn fs-16 fw-regular"
                >
                  Send
                </button>
              </>
            )}

            <div className="items">
              {comments.map((item) => (
                <>
                  <div className="item flex fd-column ai-end ">
                    <div className="top flex ai-center">
                      <div className="img">
                        <img src={CommentUser} className="img-res" />
                      </div>
                      <div className="texts">
                        <p className="title fs-16 fw-regular">User</p>
                        <p className="text fs-14 fw-light">{item.title}</p>
                      </div>
                    </div>
                    <div className="flex ai-center">
                      <button
                        className="reply-comment-btn fs-16 fw-regular"
                        onClick={() => {
                          setVoice(true);
                          setCommentId(item.id);
                        }}
                      >
                        {" "}
                        <img src={Mic} alt="" /> Voice
                      </button>
                      <button
                        className="reply-comment-btn fs-16 fw-regular"
                        onClick={() => {
                          setReplyText(true);
                          setCommentId(item.id);
                        }}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                  {replies
                    .filter((reply) => reply.comment_id === item.id)
                    .map((item2) => (
                      <>
                        {item2.reply_tytpe === "1" ? (
                          <div
                            className="item flex fd-column ai-end "
                            style={{ marginBottom: "40px" }}
                          >
                            <div className="top flex ai-center">
                              <div className="img">
                                <img src={AdminPic} className="img-res" />
                              </div>
                              <div className="texts">
                                <p className="title fs-16 fw-regular">Admin</p>
                                <p className="text fs-14 fw-light">
                                  {item2.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="item flex fd-column ai-end "
                            style={{ marginBottom: "40px" }}
                          >
                            <div className="top flex ai-center">
                              <div className="img">
                                <img src={AdminPic} className="img-res" />
                              </div>
                              <div className="texts">
                                    <p className="title fs-16 fw-regular">Admin</p>
                                <audio className="audio-class"
                                  src={`http://localhost/fortah-backend/files/${item2.title}`}
                                  controls
                                ></audio>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="right flex fd-column">
          {lessons.map((item) => (
            <Link
              to={`/admin/${educationid}/${item.id}`}
              className="video flex ai-center"
            >
              <div className="img">
                <video
                  style={{ width: "80px", height: "80px" }}
                  poster={`http://localhost/fortah-backend/files/${item.thumbnail}`}
                  src={`http://localhost/fortah-backend/files/${item.video_src}`}
                  className="img-res"
                />
              </div>
              <div className="texts">
                <p className="title fs-16 fw-regular">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
