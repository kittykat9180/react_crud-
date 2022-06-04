import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import AddUser from './Components/AddUser'
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PNF";
import EditUser from "./Components/EditUser";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App(){
    return(
       <Router>
           <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/adduser' component={AddUser}></Route>
                <Route path='/edituser/:id' component={EditUser}></Route>
                <Route path='*' component={PageNotFound} ></Route>
            </Switch>
           </div>
       </Router>
    );
}

export default App;