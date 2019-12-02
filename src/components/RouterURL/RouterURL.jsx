import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Store from '../Store/Store';
import About from '../Aboutus/About';
import Blog from '../Blog/Blog';



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
                </Switch>
            </Router>


        );
    }
}
export default RouterURL;