import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import { Row, Col } from 'antd';
import { Button, Radio, Icon } from 'antd';
import {Link} from 'react-router-dom';
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
                    <p>Một ngày đẹp trời ông Thái Xuân Ba đã nãy nở lên một ý tưởng tuyệt vời để có thể mang lại cho mọi người một trang
                    web uy tín chất lượng với nhưng sản phẩm công nghệ của samsung và apple v nên chúng tôi đã tạo nên trang web này. Với tất cả
                    tiền trong túi mình có chỉ võn vẹn 50000USD ông đã đầu tư cho web và kho lưu trữ. Kho lưu trữ có diện tích lên tới hơn 300m2. 
                    Đặt tại NY. hihi
                    </p>
                    <Button type="danger"><Link to="/cua-hang">Cửa hàng</Link> </Button>
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
