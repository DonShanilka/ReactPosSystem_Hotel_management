import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = (props) => {
  // ********************************************************

  const [customerData, setCustomerData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5001/api/customers")
      .then(customerData => setCustomerData(customerData.data))
      .then(err => console.log(err))
  }, [])

  console.log(customerData)

  // function updateTableHTML(myArray) {
  //   var tableBody = document.getElementById("customer-table-body"),
  //     newRow, newCell;

  //   // Reset the table
  //   tableBody.innerHTML = "";
  //   console.log(myArray);

  //   // Build the new table
  //   for (var i = 0; i < myArray.length; i++) {
  //     newRow = document.createElement("tr");
  //     tableBody.appendChild(newRow);
  //     console.log(myArray[10]);

  //     if (myArray[i] instanceof Array) {
  //       for (var j = 0; j < myArray[i].length; j++) {
  //         newCell = document.createElement("td");
  //         newCell.textContent = update[i][j];
  //         newRow.appendChild(newCell);
  //         console.log(myArray[2]);
  //       }
  //     } else {
  //       newCell = document.createElement("td");
  //       newCell.textContent = myArray[i];
  //       newRow.appendChild(newCell);
  //       console.log(myArray[5]);
  //     }
  //   }

  // }

  const customer = [
    { column1: 'Alice', column2: 'Smith', column3: '30', column4: 'Engineer', column5: 'USA' },
    { column1: 'Bob', column2: 'Jones', column3: '25', column4: 'Designer', column5: 'UK' }
  ];

  const cust = customerData;

  function updateTableHTML(myArray) {
    var tableBody = document.getElementById("customer-table-body"),
      newRow, newCell;

    // Reset the table
    tableBody.innerHTML = "";
    console.log(myArray);

    // Build the new table
    for (var i = 0; i < myArray.length; i++) {
      newRow = document.createElement("tr");
      tableBody.appendChild(newRow);

      // Check if myArray[i] is an array
      if (Array.isArray(myArray[i])) {
        for (var j = 0; j < myArray[i].length; j++) {
          newCell = document.createElement("td");
          newCell.textContent = myArray[i][j];  // Corrected to myArray[i][j]
          newRow.appendChild(newCell);
        }
      } else if (typeof myArray[i] === 'object') {
        // If it's an object, iterate through the object values
        Object.values(myArray[i]).forEach(value => {
          newCell = document.createElement("td");
          newCell.textContent = value;
          newRow.appendChild(newCell);
        });
      } else {
        // For non-array and non-object values, just add the single value
        newCell = document.createElement("td");
        newCell.textContent = myArray[i];
        newRow.appendChild(newCell);
      }
    }
  }



  return (
    <div style={{ width: "70%", position: "absolute", left: "30%" }}>
      <button onClick={() => updateTableHTML(cust)}>Update Table</button>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody id="customer-table-body">
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent

