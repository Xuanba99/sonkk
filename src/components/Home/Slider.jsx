import React from 'react';
import { Row, Col } from 'antd';
 

function Slider() {
  return (
      <Row className="slider-father">
          <Col  span={17}> 
            <div className="slider">
            <div>
            <img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/25/637102405422254673_banner-BlackFriday-H1-2X.png"/>
            </div>
            <div className="btnChangeimg">
            <button className="btnslider prev">Prev</button>
            <button className="btnslider next">Next</button>
            </div>
          
        
            </div>
        </Col>
          <Col span={7}>
              <div className="advantage">
                  <img src="https://images.fpt.shop/unsafe/fit-in/385x88/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/22/637100031483524827_F-H2_385x88@2x.png"/>
                  <img className="ad-img2" src="https://images.fpt.shop/unsafe/fit-in/385x88/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/1/637081654200877009_Banner-S10e-H2-2X.png"/>
                  <img className="ad-img2" src="https://images.fpt.shop/unsafe/fit-in/385x88/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/1/637081654200877009_Banner-S10e-H2-2X.png"/>
              </div>
              
          </Col>
      </Row>
    
  );
}

export default Slider;
