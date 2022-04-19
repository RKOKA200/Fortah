import React, { useState, useEffect } from "react";
import Vid from "../../images/vid1.jpg";
import CoverLesson from "../../images/coverlesson.jpg";
import CommentUser from "../../images/commentuser.png";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
export default function SingleLesson() {
  const { educationid, lessonid } = useParams();
  const [lessons, setAllLessons] = useState([]);
  const [singleLesson, setSingleLesson] = useState({});
  const [education, setEducation] = useState({});
  const [desc, setDesc] = useState("");
  const [comments, setComments] = useState([]);

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
    getAllComments()
  },[lessonid])

  const getEducation = () => {
    axios
      .post("http://localhost/fortah-backend/education/getSinlgeProgram", {
        id: parseInt(educationid),
      })
      .then((res) => {
        setEducation(res.data);
      });
  };

  const createComment = () => {
    axios
      .post(
        "http://localhost/fortah-backend/education/createClientVideoComment",
        { title: desc, video_id: parseInt(lessonid) }
      )
      .then((res) => {
        getAllComments();
        setDesc("")
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
        <Link to={"/client"} className="title fs-26 fw-semi">
          Educational Sections
        </Link>
        <span id="first-span"></span>
        <Link
          className="subtitle fs-16 fw-regular"
          to={`/client/${educationid}`}
        >
          {education && education.title}
        </Link>
        <span></span>
        <p className="lesson fs-16 fw-regular">
          {singleLesson && singleLesson.title}
        </p>
      </div>
      <div className="item flex ai-start">
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
            {/* <p className="desc fs-16 fw-light">
              Breath cintroll with diagraph , legs 90/90, supline Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure.
            </p> */}
          </div>
          <div className="comments flex fd-column ai-start">
            <p className="title fs-26 fw-semi">32 comments</p>
            <div className="input flex ai-center">
              <div className="img">
                <img src={CommentUser} className="img-res" />
              </div>
              <input
                className="fs-16 fw-light"
                type="text"
                placeholder="Add comment..."
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
            <button
              onClick={createComment}
              disabled={desc === "" ? true : false}
              className="add-comment-btn fs-16 fw-regular"
            >
              Send
            </button>
            <div className="items">
              {comments.map((item) => (
                <div className="item flex fd-column ai-end ">
                  <div className="top flex ai-center">
                    <div className="img">
                      <img src={CommentUser} className="img-res" />
                    </div>
                    <div className="texts">
                      <p className="title fs-16 fw-regular">Profile 1</p>
                      <p className="text fs-14 fw-light">{item.title}</p>
                    </div>
                  </div>
                  <button className="reply-comment-btn fs-16 fw-regular">
                    Reply
                  </button>
                </div>
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
