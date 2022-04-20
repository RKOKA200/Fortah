import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function EducationalSystem() {
  const [educations, setEducations] = useState([]);

  const getAllEducation = () => {
    axios
      .get("http://localhost/fortah-backend/education/getAllEducation")
      .then((res) => {
        setEducations(res.data);
      });
  };

  React.useEffect(() => {
    getAllEducation();
  }, []);

  return (
    <div className="education">
      <p className="title fs-26 fw-semi">Educational Sections</p>
      <p className="subtitle fs-16 fw-regular">
        Choose the best program that fits your needs
      </p>

      <div className="items">
        {educations.map((item) => (
          <Link
            to={`/client/${item.id}`}
            className="item flex fd-column ai-center"
          >
            <div className="cover">
              <img
                className="img-res"
                src={`http://localhost/fortah-backend/files/${item.image}`}
                alt=""
              />
            </div>
            <p className="fs-16 fw-regular">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
