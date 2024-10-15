import React, { useState, useEffect } from "react";
import axios from "axios";

const TableComponent = (props) => {

  return (
    <div style={{ width: "70%", position: "absolute", left: "15%" }}>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{props.test._id}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;


// http://localhost:5001/api/customers