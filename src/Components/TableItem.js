import React from "react";
import { Link } from "react-router-dom";
const TableItem = ({ data, deleteCallback }) => (
    <tr>
      <td>{data.name}</td>
      <td>{data.phoneNumber}</td>
      <td>{data.emailId}</td>
      <td>{data.gender}</td>
      <td>{data.location.join(',')}</td>
      <td><Link className="btn btn-info" to={`/edit/${data.id}`}>Edit</Link> <button className="btn btn-danger" onClick={()=> deleteCallback(data.id)}>Delete</button></td>
    </tr>
  )
export default TableItem;
