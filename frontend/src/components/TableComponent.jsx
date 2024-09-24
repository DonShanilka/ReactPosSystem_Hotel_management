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

export default function TableComponent(props) {
  // ********************************************************
  const [data, setData] = useState([]);

  // const loadAllData = () => {
  //   fetch('mongodb://localhost:27017/')
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }

  return (
    <>
      {/* <button onClick={loadAllData()} style={{ position: "absolute", left: "30%", top: "10%" }}>{console.log(data)} Load All Data</button> */}

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
            <TableRow>
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="right">{data.cid}</TableCell>
              <TableCell align="right">{data.name}</TableCell>
              <TableCell align="right">{data.age}</TableCell>
              <TableCell align="right">{data.address}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </TableContainer>
    </>
  );
}
