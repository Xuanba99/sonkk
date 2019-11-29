import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Menu from './Menu';
import Footer from '../Footer/Footer';
import Menusub from './Menusub';
import Slider from './Slider';
import Avantage from './Advantage';
import Advantage from './Advantage';
import ProductList from './ProductList';

function Home() {
  return (
    <div className="body">
    <Menu/>
    <Menusub/>
    <Slider/>
    <Advantage/>
        
         <div className="content"> 
         <Row className="newphone">
            <Col span={6} offset={2}><h1>ĐIỆN THOẠI MỚI NHẤT</h1></Col>
         </Row>


         <ProductList/>
         <ProductList/>
         <ProductList/>
         </div>
         <div>
           <Footer/>
         </div>
    </div>
  );
}

export default Home;
