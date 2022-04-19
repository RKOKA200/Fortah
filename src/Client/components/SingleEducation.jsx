import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function SingleEducation() {
  const { educationid } = useParams();
  const [lessons, setLessons] = useState([]);
  const [education, setEducation] = useState({});

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
        setLessons(res.data);
      });
  };

  useEffect(() => {
    getAllLessons();
  }, [educationid]);

  return (
    <div className="single-education">
      <div className="start flex ai-center">
      <Link to={`/client`} className="title fs-26 fw-semi">Educational Sections</Link>
        <span></span>
        <p className="subtitle fs-16 fw-semi">{education && education.title}</p>
      </div>
      <div className="items">
        {lessons.map((item) => (
          <Link
            to={`/client/${educationid}/${item.id}`}
            className="item flex fd-column ai-center"
          >
            <div className="image">
              <img
                className="img-res"
                src={`http://localhost/fortah-backend/files/${item.thumbnail}`}
                alt=""
              />
            </div>
            <p className="fs-18 fw-regular">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
