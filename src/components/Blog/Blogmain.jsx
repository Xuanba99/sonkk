import React from 'react';
import { Row, Col } from 'antd';
class Itemblog extends React.Component {
    render(){
        return(
            <div>
            <Row className="content-blog">
                <Col className="img-blog-main" span={22} offset={2}>
                <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2019/01/Apple-iPhone-XI-Max-concept-render-techconfigurations-4.jpg" alt="smartphone"/>

                </Col>

            </Row> 
            <Row>
                <Col span={22} offset={2}>
                    <h2>Apple ra mắt Smart Battery Cases cho iPhone 11: vẫn thiết kế lưng gù xấu xí, có thêm phím vật lý chụp ảnh, giá 129 USD</h2>
                </Col>
            </Row>
            
            </div>


        );
    }

}
export default Itemblog;
 