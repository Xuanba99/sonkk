import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import ProductList from '../Home/ProductList';
 
 

class  Store extends React.Component {
  render(){
    return (
        <div className='body1'>
             <Menu/>


             <div >
             <ProductList/>
             <ProductList/>
             <ProductList/>
             <ProductList/>

             </div>
             <div className="footerContact">
                <Footer />
             </div>
        </div>
    );
  }
}

export default Store;
