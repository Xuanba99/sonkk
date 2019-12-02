import React from 'react';
import { Row, Col } from 'antd';
class Itemblog extends React.Component {
    render(){
        return(
            <Row className="content-blog">
                <Col className="img-blog" span={11}>
                <img src="http://genknews.genkcdn.vn/thumb_w/660/2019/12/2/photo-1-15752739316061535113609.jpg" alt="smartphone"/>

                </Col>
                <Col span={12} offset={1}><h3>Google chơi chiêu giống Vsmart: hoàn tiền 100 USD để "an ủi" người dùng đã mua Pixel 4 với giá 799 USD</h3></Col>
            </Row> 
        );
    }

}
export default Itemblog;
 