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

export default function TableComponent() {
  // ********************************************************

  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    axios
      .get("http://Localhost:5001/api/customers")
      .then((customer) => setCustomer(customer.data))
      .catch((err) => console.log(err));
  }, []);

  // Ensure customer is an array
  const customerList = Array.isArray(customer) ? customer : [];

  console.log(customer);

  return (
    <>
    <TableContainer component={Paper}>
      <Table
        sx={{
          position: "absolute",
          top: "30%",
          left: "17%",
          width: "80%",
          backgroundColor: "white",
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customer.length > 0 ? (
            customer.map((customerItem) => (
              <TableRow key={customerItem._id}>
                <TableCell component="th" scope="row">
                  {customerItem.cid}
                </TableCell>
                <TableCell align="right">{customerItem.name}</TableCell>
                <TableCell align="right">{customerItem.age}</TableCell>
                <TableCell align="right">{customerItem.address}</TableCell>
                <TableCell align="right">{customerItem.email}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No Data Available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
    </TableContainer>
    </>
  );
}
