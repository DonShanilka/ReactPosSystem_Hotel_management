import React, { useState } from "react";
import { useNavigate } from "react-router";
// import Model from "react-modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Modal from "react-modal";

function AddCustomer() {
  const [visible, setVisible] = useState(false);

  const history = useNavigate();
  
  const [cid, setCid] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleIdChange = (e) => {
    setCid(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

  const formdata = {cid,name,age,address,email};
  console.log("Customer Data" , formdata);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      cid: cid,
      name: name,
      age:age,
      address: address,
      email: email
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
 
  return (
    <div>
      <Button
        variant="contained"
        color="success"
        sx={{ position: "absolute", right: "2%", top: "18%" }}
        onClick={() => setVisible(true)}
      >
        + Add Customer
      </Button>

      <Modal
        isOpen={visible}
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.692)",
            position: "absolute",
            width: "85%",
            height: "100%",
            left: "15%",
            top: "0%",
            zIndex: "20",
          },
          content: {
            height: "80%",
            width: "40%",
            top: "5%",
            left: "29%",
          },
        }}
      >
        <div className="customer-Form-Div">
          <br />
          <form onSubmit={handleOnSubmit}>
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="ID"
              variant="outlined"
              name="cid"
              value={cid}
              onChange={handleIdChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              sx={{ margin: "20px", width: "91%" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="address"
              value={address}
              onChange={handleAddressChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="Country"
              variant="outlined"
            />
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="Room No:"
              variant="outlined"
            />
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="Age"
              variant="outlined"
              name="age"
              value={age}
              onChange={handleAgeChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="Hotale Date"
              variant="outlined"
            />
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="Out Date"
              variant="outlined"
            />
            <TextField
              sx={{ margin: "20px", width: "90%" }}
              id="outlined-basic"
              label="Status"
              variant="outlined"
            />

            <Stack direction="row" spacing={1}>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </form>
        </div>
        <button
          style={{
            position: "absolute",
            right: "1%",
            top: "2%",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "none",
            color: "#ff1a1a",
          }}
          onClick={() => setVisible(false)}
        >
          X
        </button>
      </Modal>
    </div>
  );
}

export default AddCustomer;
