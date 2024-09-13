import React, { useState } from 'react'
import {useNavigate} from 'react-router'
import Model from "react-modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function AddCustomer() {

  const [visible, setVisible] = useState(false);

  const history = useNavigate();
  const [inputsData, setInputsData] = useState({
    cid:"",
    name:"",
    age:"",
    address:"",
    email:"",
  });

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

        <Model
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
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="ID"
              variant="outlined"
              name='cid'
              value={inputsData.cid}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name='name'
              value={inputsData.name}
            />
            <TextField
              sx={{ margin: "20px", width: "91%" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name='address'
              value={inputsData.address}
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
              name='email'
              value={inputsData.email}
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
              name='age'
              value={inputsData.age}
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
            
            <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
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
        </Model>
      </div>
  )
}

export default AddCustomer
