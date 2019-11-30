import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import Imagecontact from '../images/contact.jpg';
import './css/contact.css';
 
import {Row ,Col } from 'antd';
 
 
 

class Contact extends React.Component{
    constructor(props){
        super();
        this.state={
            name:"",
            email:"",   
            errorName:"",
            errorEmail:""
        }
        
    }
    onHandle=(evt)=>{
        var target = evt.target;
        var value = target.value;
        var name= target.name;
        this.setState({
            [name]:value
        });
    }


    handleSubmit=(evt)=>{
        var errMail ="";
        var errName ="";
        if(this.state.name===""){
            errName="Không được bỏ trống";
        }else{
            errName=""
            console.log(this.state);
        }
        if(!this.state.email.includes("@")){
            errMail="Vui lòng điền Gmail của bạn";
        }else{
            errMail=""
            console.log(this.state);
        }
        this.setState({
            errorEmail:errMail,
            errorName:errName
        });
        evt.preventDefault();
         
    }
    
    render(){
        return (
          <div className='body1'>
             <Menu/>
             <div className="contentcontact">
                 <img src={Imagecontact}/>
             </div>
             <h2 className="title">FEEDBACK TO US, WE TRY SUPPORT YOU IS THE BEST WAY</h2>


             <div className="form">
                <Row>
                    <Col span={12}>
                    <form onSubmit={this.handleSubmit}>
                        <h3 className="giveus">Give us your problem or anything you want</h3>
                        <table>
                            <tr>
                                <label>Tên của bạn</label>
                                <td><input type="text" 
                                             name="name"
                                             onChange={this.onHandle}
                                            placeholder="Nguyễn Văn A"/>
                                </td> 
                               
                               
                            </tr>
                            <tr> 
                                <td></td>
                                <td style={{color:"red"}}>{this.state.errorName}</td>
                            </tr>
                            <br/> 
                            <tr>
                                <label>Địa chỉ email</label>
                                <td><input type="text" 
                                            name="email"
                                            onChange={this.onHandle}
                                            placeholder="nguyenvana@gmail.com"/>
                                </td>
                               
                            </tr>
                            <tr> 
                                <td></td>
                                <td style={{color:"red"}}>  {this.state.errorEmail}</td>
                            </tr>
                            <br/> 
                            <tr>
                                <label>Vấn đề của bạn</label>
                                <td><input type="text" 
                                        placeholder="Đặt hàng không được"/></td>
                            </tr>
                            <br/> 
                            <tr>
                                <label>Nội dung</label>
                                <td><textarea  rows="5" cols="54" placeholder="Nội dụng cần ghi"></textarea></td>
                            </tr>
                            <br/> 
                            <tr>
                                <td></td>
                                <td><input className='btnsubmit' 
                                            type="submit" 
                                            value="GỬI"/>
                                </td>
                            </tr>
                        </table>

                    </form>


                    </Col>
                    <Col span={12}>

                        
                    </Col>
                </Row>

             </div>
             <div className="footerContact">
                <Footer />
             </div>
            
          </div>
          );
    }
}

export default Contact;
