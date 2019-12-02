import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import Itemblog from './Itemblog';
import Blogmain from './Blogmain';
import { Row, Col } from 'antd';
import './Blog.css';
 

class Blog extends React.Component {
  render(){
    return (
        <div className='body1'>
             <Menu/>
              <div className="advantage-blog">
                <img src="https://www.suzuki.com.vn/images/GSX/Gsx-featurebanner1.jpg"  alt="quảng cáo xe cub"/>

                <hr style={{marginTop:20}}/>
                <Row  >
                    <Col span={8}>
                      <Itemblog/>
                      <Itemblog/>
                      <Itemblog/>
                      <Itemblog/>
                    </Col>



                    <Col span={16}>
                      <Blogmain/>

                    </Col>
                </Row>
              </div>

             <div className="footerContact">
                <Footer />
             </div>
        </div>
    );
  }
}

export default Blog;
