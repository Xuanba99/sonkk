import React from 'react';
import './App.css';
import Menu from './components/Home/Menu';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
    <Menu/>
      <div className="slider">
        <div>
        <img src="https://cdn.vox-cdn.com/thumbor/DqZ_YBYBAVZtBF1PFi2fj4DOszM=/0x0:1280x800/1200x800/filters:focal(538x298:742x502)/cdn.vox-cdn.com/uploads/chorus_image/image/61897327/apple8.0.png"/>
        </div>
        <button className="btnslider prev">Prev</button>
        <button className="btnslider next">Next</button>
       
          
      </div>
         <div className="content"> 

         </div>
         <div>
           <Footer/>
         </div>
    </div>
  );
}

export default App;
