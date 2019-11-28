import React from 'react';
 
import 'antd/dist/antd.css';
import Menu from './Menu';
import Footer from '../Footer/Footer';
import Menusub from './Menusub';
import Slider from './Slider';

function Home() {
  return (
    <div>
    <Menu/>
    <Menusub/>
    <Slider/>
        


         <div className="content"> 
            
         </div>
         <div>
           <Footer/>
         </div>
    </div>
  );
}

export def