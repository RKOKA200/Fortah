import React from "react";
import Vid from "../../images/vid1.jpg";
import CoverLesson from "../../images/coverlesson.jpg";
import CommentUser from "../../images/commentuser.png";
export default function SingleLesson() {
  return (
    <div className="single-lesson">
      <div className="start flex ai-center">
        <p className="title fs-26 fw-semi">Tranining Programs</p>
        <span></span>
        <p className="subtitle fs-16 fw-regular">Stimulus and Recovery</p>
        <span></span>
        <p className="lesson fs-16 fw-regular">Lesson 1</p>
      </div>
      <div className="item flex ai-start">
        <div className="left">
          <div className="cover">
            <img src={CoverLesson} className="img-res" />
          </div>
          <div className="info">
            <p className="title fs-26 fw-semi">LBP 7 Day Program - Day 1</p>
            <p className="desc fs-16 fw-light">
              Breath cintroll with diagraph , legs 90/90, supline Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure.
            </p>
          </div>
          <div className="comments flex fd-column ai-start">
            <p className="title fs-26 fw-semi">32 comments</p>
            <div className="input flex ai-center">
              <div className="img">
                <img src={CommentUser} className="img-res" />
              </div>
              <input className="fs-16 fw-light" type="text" placeholder="Add comment..." />
            </div>
            <button className="add-comment-btn fs-16 fw-regular" >Send</button>
            <div className="items">
                <div className="item flex fd-column ai-end ">
                    <div className="top flex ai-center">
                        <div className="img">
                            <img src={CommentUser} className="img-res" />
                        </div>
                        <div className="texts">
                            <p className="title fs-16 fw-regular" >Profile 1</p>
                            <p className="text fs-14 fw-light" >Pershendetje doja tju beja nje pyetje ju lutem ne lidhje me nje nga ushtrimet e ksaj pajisje.</p>
                        </div>
                    </div>
                    <button className="reply-comment-btn fs-16 fw-regular" >Reply</button>
                </div>
            </div>
          </div>
        </div>
        <div className="right flex fd-column">
          <div className="video flex ai-center">
            <div className="img">
              <img src={Vid} alt="" className="img-res" />
            </div>
            <div className="texts">
              <p className="title fs-18 fw-semi">LBP 7 Day</p>
              <p className="desc fs-13 fw-regular">
                Breath cintroll with diagraph , legs 90/90, supline
              </p>
            </div>
          </div>
          <div className="video flex ai-center">
            <div className="img">
              <img src={Vid} alt="" className="img-res" />
            </div>
            <div className="texts">
              <p className="title fs-18 fw-semi">LBP 7 Day</p>
              <p className="desc fs-13 fw-regular">
                Breath cintroll with diagraph , legs 90/90, supline
              </p>
            </div>
          </div>
          <div className="video flex ai-center">
            <div className="img">
              <img src={Vid} alt="" className="img-res" />
            </div>
            <div className="texts">
              <p className="title fs-18 fw-semi">LBP 7 Day</p>
              <p className="desc fs-13 fw-regular">
                Breath cintroll with diagraph , legs 90/90, supline
              </p>
            </div>
          </div>
          <div className="video flex ai-center">
            <div className="img">
              <img src={Vid} alt="" className="img-res" />
            </div>
            <div className="texts">
              <p className="title fs-18 fw-semi">LBP 7 Day</p>
              <p className="desc fs-13 fw-regular">
                Breath cintroll with diagraph , legs 90/90, supline
              </p>
            </div>
          </div>
          <div className="video flex ai-center">
            <div className="img">
              <img src={Vid} alt="" className="img-res" />
            </div>
            <div className="texts">
              <p className="title fs-18 fw-semi">LBP 7 Day</p>
              <p className="desc fs-13 fw-regular">
                Breath cintroll with diagraph , legs 90/90, supline
              </p>
            </div>
          </div>
          <div className="video flex ai-center">
            <div className="img">
              <img src={Vid} alt="" className="img-res" />
            </div>
            <div className="texts">
              <p className="title fs-18 fw-semi">LBP 7 Day</p>
              <p className="desc fs-13 fw-regular">
                Breath cintroll with diagraph , legs 90/90, supline
              </p>
            </div>
          </div>
          <div className="video flex ai-center">
            <div className="img">
              <img src={Vid} alt="" className="img-res" />
            </div>
            <div className="texts">
              <p className="title fs-18 fw-semi">LBP 7 Day</p>
              <p className="desc fs-13 fw-regular">
                Breath cintroll with diagraph , legs 90/90, supline
              </p>
            </div>
          </div>
          <div className="video flex ai-center">
            <div className="img">
              <img src={Vid} alt="" className="img-res" />
            </div>
            <div className="texts">
              <p className="title fs-18 fw-semi">LBP 7 Day</p>
              <p className="desc fs-13 fw-regular">
                Breath cintroll with diagraph , legs 90/90, supline
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
