import React from 'react';
import { Row, Col,Icon } from 'antd';
import {Link} from 'react-router-dom';
import { formatCountdown } from 'antd/lib/statistic/utils';

class ItemProduct extends React.Component {
    render(){
        var products = this.props.products;
        var isLoaded = this.props.isLoaded;
      
          if(!isLoaded){
              return <div>Loading <Icon type="loading" /></div>
          }else{
              
            return (
                <div>
                {products.map(product=>(
                    <Col className="gutter-row" span={8} key={product._id}>
                        <div className="gutter-box">
                            <h3>{product.name}</h3> 
                            <Row>
                                <Col span={9} offset={1}><h4 className="price-product">{product.price} vnđ</h4>
                                <p>{product.detail}<br/> 64GB</p>
                                <button className="btnDetail">  <Link to="/chi-tiet">CHI TIẾT</Link> </button> 
                            
                                </Col>
                                <Col span={9}><img className="img-item" src={`data:image/png;base64,${product.image}`}/></Col>
                            </Row>
                     </div> 
                     </Col>
                ))} 
             
                 
                </div>
              );

          }
        
       
    }
 
}

 
 
 

export default ItemProduct;
