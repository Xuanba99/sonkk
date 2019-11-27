import React from 'react';
class Menu extends React.Component{
    render(){
        return(
            <div className="header">
              <div className="nameOfSite">
                <h2><a href="#">PHUKIEN APPLE</a> </h2>
              </div>
              <div className="main-menu"> 
                  <ul className="menu">
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Cửa hàng</a></li>
                    <li><a href="#">Dịch vụ</a></li>
                    <li><a href="#">Liên hệ</a></li>
                  </ul> 
              </div>
          </div>

        );
    }
}
export  default Menu;