import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Forum() {
  const [discussions, setDiscussions] = useState([]);

  const getAllDiscussions = () => {
    axios
      .get("http://localhost/fortah-backend/topic/getAllDiscussion")
      .then((res) => {
        setDiscussions(res.data);
      });
  };

  useEffect(() => {
    getAllDiscussions();
  }, []);

  return (
    <div id="client-forum-title" className="forum">
      <p  className="title fs-26 fw-semi disc-title">Discussion</p>
      <div className="items flex fd-column ai-start">
        {discussions.map((item) => (
          <Link to={`/client/forum/${item.id}`} className="item flex ai-center">
            <div>
              <img
                style={{ width: "72px", height: "72px" }}
                src={`http://localhost/fortah-backend/files/${item.cover}`}
                className="img-res"
              />
            </div>
            <div className="texts">
              <p id="f-title" className="title fs-24 fw-semi"> {item.title} </p>
              <p className="comments fs-14 fw-regular ">19 comments</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
