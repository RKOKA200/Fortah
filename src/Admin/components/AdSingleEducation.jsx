import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams , Link} from "react-router-dom";
export default function AdSingleEducation() {
  const [addNew, setAddNew] = useState(false);
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [image,setImage] = useState("")
  const { educationid } = useParams();
  const [lessons, setLessons] = useState([]);
  const [education,setEducation] = useState({});

  const getEducation = () => {
    axios
    .post("http://localhost/fortah-backend/education/getSinlgeProgram", {
      id: parseInt(educationid),
    })
    .then((res) => {
      setEducation(res.data);
    });
  }

  React.useEffect(() => {
    getEducation()
  },[educationid])
  const getAllLessons =() => {
    axios
      .post("http://localhost/fortah-backend/education/getSingleEducation", {
        id: parseInt(educationid),
      })
      .then((res) => {
        setLessons(res.data);
      });
  }

  useEffect(() => {
    getAllLessons()
  }, [educationid]);

  const createLesson = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("education_id", educationid);
    formdata.append("image", video);
    formdata.append("thumbnail",image)

    axios
      .post("http://localhost/fortah-backend/education/addLesson", formdata)
      .then((res) => {
        setAddNew(false)
        getAllLessons()
      });
  };

  return (
    <>
      {addNew && (
        <div className="add-education flex jc-center ai-center">
          <div
            className="add-education-opa"
            onClick={() => setAddNew(false)}
          ></div>
          <form className="flex fd-column ai-center" onSubmit={createLesson}>
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
            <label htmlFor="">Choose Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => {
                setVideo(e.target.files[0]);
              }}
            />
            <label htmlFor="">Choose Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <button>Add Lesson</button>
          </form>
        </div>
      )}
      <div className="single-education">
        <div className="start flex ai-center jc-spaceb">
          <div className="flex ai-center">
            <Link to={`/admin`} className="title fs-26 fw-semi">Educational Sections</Link>
            <span></span>
            <p className="subtitle fs-16 fw-semi">{education && education.title}</p>
          </div>
          <div>
            <button
              className="fs-16 fw-regular"
              onClick={() => setAddNew(true)}
            >
              + Add Video
            </button>
            <button className="fs-16 fw-regular">- Remove Video</button>
          </div>
        </div>
        <div className="items">
          {lessons.map((lesson,index) => (
            <Link to={`/admin/${educationid}/${lesson.id}`} className="item flex fd-column ai-center" key={index} >
              <div className="image">
                <video
                  className="img-res"
                  src={`http://localhost/fortah-backend/files/${lesson.video_src}`}
                  poster={`http://localhost/fortah-backend/files/${lesson.thumbnail}`}
                />
              </div>
              <p className="fs-18 fw-regular">{lesson.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
