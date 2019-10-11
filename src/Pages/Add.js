import React from "react";
import { Link } from "react-router-dom";

class AddUser extends React.Component {
  constructor(props){
      super(props);
      console.log('Editttt', props);
      this.state = {
          name: '',
          phoneNumber: '',
          emailId: '',
          gender: '',
          location:[],
          successMsg: false,
          errorMsg: false,
          disabled: true
      }
  }

  changeHandler = (e) => {
    const multiple = e.target.multiple;
    const options = e.target.options;
    const name = e.target.id;
    let value = [];
    if(multiple){
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
              value.push(options[i].value);
            }
          }
    }else{
        value = e.target.value;
    } 
    this.setState({
        [name]: value,
        disabled: false
    });
  }

  submitForm = () => {
    const {handleEdit} = this.props;
    const {id, name, phoneNumber, emailId, gender, location} = this.state;
    const updatedData = {
        id,
        name, 
        phoneNumber, 
        emailId, 
        gender, 
        location
    }
    handleEdit(updatedData, true);
    this.setState({
        successMsg: true
    })

  }
  render() {
    const {name, phoneNumber, emailId, gender, location, successMsg, disabled} = this.state;
     
    return (
      <div className="form-edit">
          
          {successMsg && 
          <div class="alert alert-success" role="alert">
            <strong>Well done!</strong> successfully added.
            </div>
            }
            <h1>Add User</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              className="form-control"
              id="phoneNumber"
              type="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailId"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={emailId}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Gender</label>
            <select className="form-control" value={gender} id="gender"  onChange={this.changeHandler}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location" >Location</label>
            <select className="form-control" id="location" multiple  onChange={this.changeHandler} value={location}>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <Link className="btn btn-info" to="/">Home</Link> &nbsp; &nbsp;
          <button type="button" className="btn btn-primary" onClick={this.submitForm} disabled={disabled}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddUser;
