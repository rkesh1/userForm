import React from "react";
import { Link } from "react-router-dom";
import TableItem from "../Components/TableItem";
const Home = ({ userList, deleteCallback }) => {
  return (
    <div>
      <div className="tableHeader">
        <h2>Number of users: {userList.length}</h2>
        <Link to="/add" className="btn btn-success">
          Add User
        </Link>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email Id</th>
            <th scope="col">Gender</th>
            <th scope="col">Locations</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, key) => (
            <TableItem key={key} data={item} deleteCallback={deleteCallback} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
