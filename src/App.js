import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import AddUser from "./Pages/Add";
import userData from './data/userData'
import "./App.css";



function Add() {
  return (
    <div>
      <h2>Add</h2>
    </div>
  );
}

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      userList: [],
    }
  }
  componentDidMount(){
    this.setState({
      userList: userData
    });
  }

  deleteCallback = id => {
    const {userList} = this.state;
    const updatedUserList = userList.filter(item => item.id !== id );
    this.setState({
      userList: updatedUserList
    });
  }

  handleEdit = (data, newUser = false) => {
    const {userList} = this.state;
    if(newUser){
      const newData = {...data, id: userList.length + 1};
      userList.push(newData);
    }else{
      userList.forEach((item, key)  => {
        if(item.id == data.id){
          userList[key] = data;
        }
      });
    }
    
    this.setState({
      userList
    });
  
  }
  render(){
    const {userList} = this.state;
  return (
    <div className="container">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home  userList={userList} deleteCallback={this.deleteCallback} />
            </Route>
            {/* <Route exact  path="/edit/:id" component={Edit} /> */}
            <Route exact  path="/edit/:id" render={(props) => ( <Edit {...props} userList={userList} handleEdit={this.handleEdit} /> )} />
            <Route path="/add" render={props => (<AddUser handleEdit={this.handleEdit} />)} />
  
          </Switch>
      </Router>
    </div>
  )}
}

export default App;
