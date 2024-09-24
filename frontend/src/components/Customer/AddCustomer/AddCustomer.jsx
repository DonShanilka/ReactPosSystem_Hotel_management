import React, { useState } from "react";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Modal from "react-modal";
import TableComponent from "../../TableComponent";
import { Alert } from "@mui/material";

function AddCustomer() {
  const [visible, setVisible] = useState(false);
  const history = useNavigate();

  const [cid, setCid] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [hotelDate, setHotelDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [status, setStatus] = useState("");

  // Handlers for the new fields
  const handleIdChange = (e) => {
    setCid(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleRoomNoChange = (e) => {
    setRoomNo(e.target.value);
  };

  const handleHotelDateChange = (e) => {
    setHotelDate(e.target.value);
  };

  const handleOutDateChange = (e) => {
    setOutDate(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // Save customer data
  function saveCustomer(e) {
    e.preventDefault();
    console.log(cid + "" + name + "" + address + "" + age + "" + email)
    const newCustomer = {
      cid,
      name,
      age,
      address,
      email,
      country,
      roomNo,
      hotelDate,
      outDate,
      status,
    };

    console.log(newCustomer);
    axios.post("http://Localhost:5001/api/addcustomers", newCustomer).then((res) => {
      console.log(res)
      alert("Stuent Added")
    }).catch((err) => {
      alert(err)
    })
  }

  // Load all data
  const [customerData, setCustomerData] = useState([]);

  const loadAllData = () => {
    fetch("http://localhost:5001")
      .then((response) => response.json())
      .then((json) => setCustomerData(json));
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
          <form onSubmit={saveCustomer}>
            <TextField
              sx={{ margin: "20px" }}
              id="customer-id"
              label="ID"
              variant="outlined"
              value={cid}
              onChange={handleIdChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="customer-name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              sx={{ margin: "20px", width: "91%" }}
              id="customer-address"
              label="Address"
              variant="outlined"
              value={address}
              onChange={handleAddressChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="customer-country"
              label="Country"
              variant="outlined"
              value={country}
              onChange={handleCountryChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="customer-email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="customer-roomno"
              label="Room No:"
              variant="outlined"
              value={roomNo}
              onChange={handleRoomNoChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="customer-age"
              label="Age"
              variant="outlined"
              value={age}
              onChange={handleAgeChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="hotel-date"
              label="Hotel Date"
              variant="outlined"
              value={hotelDate}
              onChange={handleHotelDateChange}
            />
            <TextField
              sx={{ margin: "20px" }}
              id="out-date"
              label="Out Date"
              variant="outlined"
              value={outDate}
              onChange={handleOutDateChange}
            />
            <TextField
              sx={{ margin: "20px", width: "90%" }}
              id="customer-status"
              label="Status"
              variant="outlined"
              value={status}
              onChange={handleStatusChange}
            />

            <Stack direction="row" spacing={1}>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
              // onClick={loadAllData}
              >
                Send
              </Button>
            </Stack>

            {customerData.map((testHotel) => (
              <TableComponent key={testHotel.id} testHotel={testHotel} />
            ))}
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
