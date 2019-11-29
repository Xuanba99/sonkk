import React from 'react';
import { Row, Col } from 'antd';
import Item from './ItemProduct';

class ProductList extends React.Component {
    render(){
        return (
            <div className="list-product">
               
                <div className="space-item" >
                    <Row gutter={16}> 
                        <Item />
                        <Item />
                        <Item />
                    </Row>

                </div>
             
            
             
            </div>
        );
        
    }
  
}

export default ProductList;
