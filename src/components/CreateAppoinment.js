import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import './CreateAppoinment.css'

export default class CreateAppoinment extends Component {
        constructor(props){
            super(props);

            this.onChangeFirstname=this.onChangeFirstname.bind(this);
            this.onChangeLastname=this.onChangeLastname.bind(this);
            this.onChangeAddress=this.onChangeAddress.bind(this);
            this.onChangeTimeslot=this.onChangeTimeslot.bind(this);
            this.onChangeDate=this.onChangeDate.bind(this);
            this.onSubmit=this.onSubmit.bind(this);

                this.state={
                Firstname:"",
                Lastname:"",
                Address:"",
                Timeslot:0,
                date: new Date(),
                addresss:[]
                }
            }
        componentDidMount() {
          axios.get('http://localhost:5000/addresss/')
          .then(response =>{
                if(response.data.length > 0){
                  this.setState({
                              addresss:response.data.map(adds => adds.Address),
                              Address:response.data[0].Address
                              }) 
                }
          })     
          }
          onChangeFirstname(e) {
              this.setState({
                  Firstname: e.target.value
              });
          }
          onChangeLastname(e) {
              this.setState({
                  Lastname: e.target.value
              });
          }
          onChangeAddress(e) {
              this.setState({
                  Address: e.target.value
              });
          }
          onChangeTimeslot(e) {
              this.setState({
                  Timeslot: e.target.value
              });
          }
          onChangeDate(date) {
              this.setState({
                  date:date
              });
          }

        onSubmit(e) {
            e.preventDefault();
                const apoin = {
                Firstname: this.state.Firstname,
                Lastname: this.state.Lastname,
                Address: this.state.Address,
                Timeslot: this.state.Timeslot,
                date: this.state.date   
                }

          console.log(apoin);

          axios.post('http://localhost:5000/appoinments/add',apoin)
            .then(res => console.log(res.data));

            this.setState({
            Firstname: '',
            Lastname: '',
            Timeslot: '',
            date:   ''
            })

            //window.location='/a';
        }

    render(){
        return(
            <div>
      <h3>Create New Appoinment  Log</h3>
      <form className="my-create" onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Firstname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Firstname}
              onChange={this.onChangeFirstname}
              />
        </div>

        <div className="form-group"> 
          <label>Lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Lastname}
              onChange={this.onChangeLastname}
              />
        </div>

        <div className="form-group"> 
          <label>Address: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.Address}
              onChange={this.onChangeAddress}>
              {
                this.state.addresss.map(function(add) {
                  return <option 
                    key={add}
                    value={add}>{add}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <label>Timeslot (in hours): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Timeslot}
              onChange={this.onChangeTimeslot}
              />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create New Appoinment" className="btn btn-outline-success"  />
        </div>
      </form>
    </div>
        )
    }

}