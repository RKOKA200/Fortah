import React from 'react'
import Disc from "../../images/forum1.png"
export default function Forum() {
  return (
    <div className='forum'>
        <p className="title fs-26 fw-semi">Discussion</p>
        <div className="items flex fd-column ai-start">
            <div className="item flex ai-center">
                <div>
                  <img src={Disc} className="img-res" />
                </div>
              <div className="texts">
                <p className='title fs-24 fw-semi' >Training</p>
                <p className="comments fs-14 fw-regular ">19 comments</p>
              </div>
            </div>

            <div className="item flex ai-center">
                <div>
                  <img src={Disc} className="img-res" />
                </div>
              <div className="texts">
                <p className='title fs-24 fw-semi' >Nutrition</p>
                <p className="comments fs-14 fw-regular ">19 comments</p>
              </div>
            </div>

            <div className="item flex ai-center">
                <div>
                  <img src={Disc} className="img-res" />
                </div>
              <div className="texts">
                <p className='title fs-24 fw-semi' >Equipments</p>
                <p className="comments fs-14 fw-regular ">19 comments</p>
              </div>
            </div>

                        <div className="item flex ai-center">
                <div>
                  <img src={Disc} className="img-res" />
                </div>
              <div className="texts">
                <p className='title fs-24 fw-semi' >Others</p>
                <p className="comments fs-14 fw-regular ">19 comments</p>
              </div>
            </div>
        </div>
    </div>
  )
}
