import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import './detail.css';
import { Row, Col , Icon} from 'antd';
import Iphone11 from '../../images/iphone11.jpg';

class Detail extends React.Component{
    render(){
        return(
            <div className='body1'>
            <Menu/>
                <div className="detail-body">
                <Row className="div-nameofproduct">
                    <Col span={24}>
                        <h2>iPhone 11 Pro Max 64GB</h2>
                    </Col>
                </Row>
                
                    <Row>
                        <Col span={12}>
                            <img className="imageproduct" src={Iphone11}/>
                        </Col>
                        <Col span={12} >
                                <h1 className="price">33.000.000</h1>
                                <p className="shipnow"><Icon className="dashboard" type="dashboard" /> SẢN PHẨM GIAO HÀNG TRONG 1 GIỜ</p>
                                <input className="btnbuy-addtocart" type="button" value="MUA NGAY"/>

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
export default Detail;