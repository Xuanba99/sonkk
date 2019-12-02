import React from 'react';
import { Icon } from 'antd';


class Introcontact extends React.Component{
    render(){
        return(
            <div>
            <table >
                <tr  >
                    <td className="title-contactt"  >Địa chỉ:</td>
                    <td>Chúng tôi chỉ bán online</td>
                </tr>
                <tr>
                    <td className="title-contactt">Số điện thoại:</td>
                    <td>1900 12345</td>
                    
                </tr>
                <tr>
                    <td className="title-contactt">Gmail:</td>
                    <td>Xuanba1903@gmail.com</td>
                </tr>
                <tr>
                    <td className="title-contactt">Theo dõi chúng tôi tại:</td>
                    <td><Icon type="facebook" className="iconsocial facebook" /><Icon type="apple" className="iconsocial apple"/><Icon type="youtube" className="iconsocial youtube"/></td>
                    
                   
                </tr>
            </table>

        </div>
        );
    }
}
export default Introcontact;
