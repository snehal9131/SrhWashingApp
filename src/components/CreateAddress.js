import React, { Component } from 'react';
import axios from 'axios';  
import './CreateAddress.css'

export default class CreateAddresss extends Component {
    constructor(props){
        super(props);

       
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

            this.state={
            Address:"",
            }
        }
        onChangeAddress(e){
        this.setState({
            Address: e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();

            const add = {
            Address:this.state.Address,       
            }
            console.log(add);

            axios.post('http://localhost:5000/addresss/add', add)
            .then(res => console.log(res.data));

            this.setState({
            Address:''
            })
        }
    
    
    render(){
        return(
            <div>
            <h3>Create New Address</h3>
            <form className="my-create" onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Address: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.Address}
                    onChange={this.onChangeAddress}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create Address" className="btn btn-outline-success" />
              </div>
            </form>
          </div>
        )
    }
}