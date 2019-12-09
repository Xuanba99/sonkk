import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home';
import Detail from '../DetailProduct/Detail';
import Contact from '../Contact/Contact';
import Store from '../Store/Store';
import About from '../Aboutus/About';
import Blog from '../Blog/Blog';
import Admin from '../admin/Admin';
import Addblog from '../admin/Addblog';
 



class RouterURL extends  React.Component{
    render(){
        return(
            <Router>
                <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route path="/cua-hang" component={Store}/>
                     <Route path="/lien-he" component={Contact}/>
                     <Route path="/gioi-thieu" component={About}/>
                     <Route path="/tin-tuc" component={Blog}/>
                     <Route path="/chi-tiet" component={Detail}/>
                     <Route path="/admin" component={Admin}/>
                     <Route path="/them-bai-viet" component={Addblog}/>
                </Switch>
            </Router>


        );
    }
}
export default RouterURL;