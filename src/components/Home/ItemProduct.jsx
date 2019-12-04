import React from 'react';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import { formatCountdown } from 'antd/lib/statistic/utils';
 

class ItemProduct extends React.Component {
    render(){
        return (
            <div>
             <Col className="gutter-row" span={8} >
                        <div className="gutter-box">
                            <h3>Iphone XI</h3>
                            <Row>
                                <Col span={9} offset={1}><h4>Giá: 19.000.000</h4>
                                <p>Mô tả: 4GB RAM <br/> 64GB</p>
                                <button className="btnDetail">  <Link to="/chi-tiet">CHI TIẾT</Link> </button> 
                                {/* <input  className="btnDetail" value='asđ' /> */}
                                 
                                </Col>
                                <Col span={9}><img className="img-item" src="https://halomobile.vn/wp-content/uploads/2019/05/iphone-xi-min.png"/></Col>
                            </Row>
                        </div> 
                    
            </Col>
            </div>
          );
    }
 
}

 
 
 

export default ItemProduct;
