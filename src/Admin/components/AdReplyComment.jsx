import React from 'react'
import SingleImg from "../../images/forum1.png";
import Mic from "../../images/Mic.svg"
export default function AdReplyComment() {
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
            <p className="subtitle fs-26 fw-semi">Training |</p>
            <p className="fr-title fs-16 fw-semi">
              How to do the benchpress double time? How to do the benchpress
              double time...
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
            <img src={SingleImg} className="img-res" />
          </div>
          <p className="fs-16 fw-regular">Rei Koka</p>
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
    <form className="reply-form flex fd-column ai-end" >
          <textarea className="fs-16 fw-light" name="" id="" cols="30" rows="10"></textarea>
          <div>
          <button className="fs-16 fw-regular" > <img src={Mic} /> Voice</button>
          <button className="fs-16 fw-regular" >Reply</button>
          </div>

    </form>
  </div>
  )
}
