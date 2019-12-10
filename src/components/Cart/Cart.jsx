import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import './Cart.css';
class Cart extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="cart-title">
                    <h2 className="cart-h2">GIỎ HÀNG CỦA BẠN (0 sản phẩm)</h2>
                    <h3 className="cart-h2 carth2"><Link to="/cua-hang">Mua thêm sản phẩm khác</Link> </h3>
                
                </div>
                <div className="cart-content">
                <div className="cart-border">

                    <div className="cart-product">
                        hahaha
                    </div>
                    <div className="cart-total">

                        <h3 className="cart-h3-total"> Tổng tiền:&nbsp;&nbsp;0,000 d</h3>

                    </div>
                    <div className="cart-info">
                        <h2>Thông tin khách hàng</h2>
                        <table>
                            <tr>
                                <td>Họ và tên:</td>
                                <td><input className="cart-text" type="text" placeholder="Nhập họ và tên" /></td>
                            </tr>
                            <tr>
                                <td>Số điện thoại:</td>
                                <td><input className="cart-text" type="text" placeholder="Nhập số điện thoại" /></td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td><input className="cart-text" type="text" placeholder="Nhập email" /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <input className="cart-btnBuy" type="submit" value="Đặt hàng" />
                                    <input className="cart-btnCancel" type="submit" value="Huỷ" />
                                </td>
                            </tr>
                        </table>






                    </div>
                    </div>
                </div>
                <Footer />
            </div>



        );
    }
}
export default Cart;