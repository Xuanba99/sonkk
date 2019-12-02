import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import { Row, Col } from 'antd';
import { Button, Radio, Icon } from 'antd';
import './About.css';

class About extends React.Component {
  
  render(){
    
    return (

        <div className='body1'>
             <Menu/>
             <div className="content-About">
              <Row className="about">
                  <Col span={12}>
                    <h2>Một vài điều về chung tôi</h2>
                    <p>Chuyên cung cấp ashdjahsdjhasjdasjdajshjashdjashd 
                    asdasdasd asdasdasd á asdasdas á asdasd á asd á á á asd a
                    Chuyên cung cấp ashdjahsdjhasjdasjdajshjashdjashd 
                    asdasdasd asdasdasd á asdasdas á asdasd á asd á á á asd a
                    Chuyên cung cấp ashdjahsdjhasjdasjdajshjashdjashd 
                    asdasdasd asdasdasd á asdasdas á asdasd á asd á á á asd a
                    Chuyên cung cấp ashdjahsdjhasjdasjdajshjashdjashd 
                    asdasdasd asdasdasd á asdasdas á asdasd á asd á á á asd a
                    Chuyên cung cấp ashdjahsdjhasjdasjdajshjashdjashd 
                    asdasdasd asdasdasd á asdasdas á asdasd á asd á á á asd a
                    Mua hàng ngay để được các sản phẩm tốt nhất
                    </p>
                    <Button type="danger">Cửa hàng</Button>
                  </Col>
                  <Col className="imgAbout" span={12}>
                     <img src="https://i1.wp.com/geoawesomeness.com/wp-content/uploads/2017/05/Apple-logo.png?ssl=1"/>


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

export default About;
