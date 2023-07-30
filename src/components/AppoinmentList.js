import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Appoinment = props => (
    <tr>
      <td>{props.appoinment.Firstname}</td>
      <td>{props.appoinment.Lastname}</td>
      <td>{props.appoinment.Address}</td>
      <td>{props.appoinment.Timeslot}</td>
      <td>{props.appoinment.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.appoinment._id}>edit</Link> | <a href="#" onClick={() => { props.deleteAppoinment(props.appoinment._id) }}>delete</a>
      </td>
    </tr>
  )

export default class AppoinmentList extends Component {
    constructor(props){
        super(props);

        this.deleteAppoinment = this.deleteAppoinment.bind(this);
        
        this.state = {appoinments: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/appoinments/')
        .then(response =>{
            this.setState({ appoinments: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteAppoinment(id) {
        axios.delete('http://localhost:5000/appoinments/'+id)
          .then(response => { console.log(response.data)});

          this.setState({
            appoinments: this.state.appoinments.filter(el => el._id !== id)
          })
        }

        AppoinmentList() {
            return this.state.appoinments.map(currentappoinment => {
              return <Appoinment appoinment={currentappoinment} deleteAppoinment={this.deleteAppoinment} key={currentappoinment._id}/>;
            })
          }

    render(){
        return(
            <div>
        <h3>Logged Appoinments</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Address</th>
              <th>Timeslot</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.AppoinmentList() }
          </tbody>
        </table>
      </div>
        )
    }

}