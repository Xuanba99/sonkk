import React from 'react';
class Footer extends React.Component{
    render(){
        return(
            <div className="main-footer">
                    <div className="content-footer"> 
                            <div className="socialApp">
                           

                                
                            </div>
                            <div className="help-footer">
                                <label>Hỗ trợ khách hàng</label>
                                <ul>
                                    <li>Tổng đài hỗ trợ</li>
                                    <li>Giới thiệu</li>
                                    <li>Bảo hành</li>
                                    <li>Cửa hàng</li>
                                </ul>

                            </div>
                            

                            <div className="main-menu1"> 
                                <ul className="menu-footer">
                                    <li><a href="#">Trang chủ</a></li>
                                    <li><a href="#">Cửa hàng</a></li>
                                    <li><a href="#">Dịch vụ</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul> 
                            </div>
                    </div>
                
            </div>
             

        );
    }
}
export  default Footer;