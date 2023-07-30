import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbars from "./Navbars";
import AppoinmentList from "./AppoinmentList";
import EditAppoinment from "./EditAppoinment";
import CreateAppoinment from "./CreateAppoinment";
import CreateAddress from "./CreateAddress";
import Header from "./Header";

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
            <Router>
            <Header/>
                <Navbars/>
                <br/>
                <Route path="/" exact component ={AppoinmentList}/>
                <Route path="/edit/:id" component ={EditAppoinment}/>
                <Route path="/create" component ={CreateAppoinment}/>
                <Route path="/user" component ={CreateAddress}/>
                </Router>        
    
     
    )
  }
}

export default Profile