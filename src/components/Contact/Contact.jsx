import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import Imagecontact from '../../images/contact.jpg';
import Introcontact from './Introcontact';
import './css/contact.css';
import axios from 'axios';
 
import {Row ,Col } from 'antd';
 
 
 

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.URL='http://localhost:1903/feedback/';
        this.state={
            // name:"",
            // email:"",   
            // errorName:"",
            // errorEmail:"",
            feedbacks:[]
        }
        
    }
    // onHandle=(evt)=>{
    //     var target = evt.target;
    //     var value = target.value;
    //     var name= target.name;
    //     this.setState({
    //         [name]:value
    //     });
    // }
    handleSubmit=()=>{
        var feedback={
            name: this.refs.txtName.value,
            email:this.refs.txtEmail.value,
            problem:this.refs.txtProblem.value,
            content:this.refs.txtContent.value,
        };
        axios.post(this.URL, feedback).then((response)=>{
            if(response.data == true){
               alert("gửi thành công"); 
            }else{
                alert("sorrry baby");
            }
        }); 
        //validation
        //  var patt =/^[a-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
        
        // var errMail ="";
        // var errName ="";
        // if(this.state.name===""){
        //     errName="Không được bỏ trống";
            
        // }else{
        //     errName="";  
            
        // }
        // if(patt.test(this.state.email) ==false){
        //     errMail="Vui lòng điền đúng định dang mail";
            
        // }else{
        //     errMail=""
            
        // }
        // this.setState({
        //     errorEmail:errMail,
        //     errorName:errName
        // });
        
         
         
        
        
    }


    // handleSubmit=(evt)=>{
        // var patt =/^[a-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
        // var errMail ="";
        // var errName ="";
        // if(this.state.name===""){
        //     errName="Không được bỏ trống";
        // }else{
        //     errName=""
        //     console.log(this.state);
        // }
        // if(patt.test(this.state.email) ==false){
        //     errMail="Vui lòng điền đúng định dang mail";
        // }else{
        //     errMail=""
        //     console.log(this.state);
        // }
        // this.setState({
        //     errorEmail:errMail,
        //     errorName:errName
        // });

        // evt.preventDefault();
        //day la gui form len mongodb
        // var feedback={
        //     name: this.refs.txtName.value,
        //     email:this.refs.txtEmail.value,
        //     problem:this.refs.txtProblem.value,
        //     content:this.refs.txtContent.value,
        // };
        //  axios.post(this.URL, feedback).then((response)=>{
        //     if(response.data == true){
        //         console.log("thanh cong");
        //     }else{
        //         alert("sorrry baby");
        //     }
        // }); 
         
    // }
   
    
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
                                             ref="txtName"
                                             onChange={this.onHandle}
                                            placeholder="Nguyễn Văn A"/>
                                </td> 
                               
                            </tr>
                            <tr> 
                                <td></td>
                                {/* <td style={{color:"red"}}>{this.state.errorName}</td> */}
                            </tr>
                            <br/> 
                            <tr>
                                <label>Địa chỉ email</label>
                                <td><input type="text" 
                                            name="email"
                                            ref="txtEmail"
                                            onChange={this.onHandle}
                                            placeholder="nguyenvana@gmail.com"/>
                                </td>
                               
                            </tr>
                            <tr> 
                                <td></td>
                                {/* <td style={{color:"red"}}>  {this.state.errorEmail}</td> */}
                            </tr>
                            <br/> 
                            <tr>
                                <label>Vấn đề của bạn</label>
                                <td><input type="text"   ref="txtProblem"
                                        placeholder="Vd:Đặt hàng không được"/></td>
                            </tr>
                            <br/> 
                            <tr>
                                <label>Nội dung</label>
                                <td><textarea  rows="5" cols="54"   ref="txtContent" placeholder="Nội dụng cần ghi"></textarea></td>
                            </tr>
                            <br/> 
                            <tr>
                                <td></td>
                                <td><input className='btnsubmit' 
                                            type="submit" 
                                            value="GỬI" 
                                                onClick={this.addFeedback}
                                            />
                                </td>
                            </tr>
                        
                             
                        </table>

                    </form>


                    </Col>
                    <Col span={12}>
                      <Introcontact/>
                                
                    </Col>
                </Row>

             </div>
             <div className="footerContact">
                <Footer />
             </div>
            
          </div>
          );
    }
    // componentDidMount(){
    //     this.getAll();
    // }
    // getAll=()=>{
    //     axios.get(this.URL).then((response)=>{
    //         this.setState({
    //             feedbacks:response.data
    //         });
    //      });

    // }
}

export default Contact;
