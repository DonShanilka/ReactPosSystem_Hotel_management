import React, { useState } from 'react';
import './CustomerPage.css'
import SearchAppBar from '../components/SerchBar';
import Table from '../components/TableComponent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Model from 'react-modal'
import zIndex from '@mui/material/styles/zIndex';
import '../pages/CustomerPage.css'
import Form from '../components/Forms';
import TextField from '@mui/material/TextField';
import { Margin, Padding } from '@mui/icons-material';

const CustomerAddPage = () => {
  const [customer, setCustomer] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Customer added:', customer);
  };

  const [visible, setVisible] = useState(false)

  return (
    <>
        <div className='customerPageMainDiv'>
            <SearchAppBar/>
            <Button variant="contained" color="success" sx={{position:"absolute", right:"2%", top:"18%"}} onClick={() => setVisible(true)}>+ Add Customer</Button>
            <Table/>

            <Model isOpen={visible} style={{
              overlay:{
                background:  "rgba(0, 0, 0, 0.692)",
                position:"absolute",
                width:"85%",
                height:"100%",
                left:"15%",
                top:"0%",
                zIndex:"20"
              },
              content:{
                height:"80%",
                width:"40%",
                top:"5%",
                left:"29%"
              }
            }}>
              <div className='customer-Form-Div'>
                <br />
                <TextField sx={{margin: "20px"}} id="outlined-basic" label="ID" variant="outlined" />
                <TextField sx={{margin: "20px"}} id="outlined-basic" label="Name" variant="outlined" />
                <TextField sx={{margin: "20px", width:"91%"}} id="outlined-basic" label="Address" variant="outlined" />
                <TextField sx={{margin: "20px"}} id="outlined-basic" label="Country" variant="outlined" />
                <TextField sx={{margin: "20px"}} id="outlined-basic" label="Email" variant="outlined" />
                <TextField sx={{margin: "20px"}} id="outlined-basic" label="Room No:" variant="outlined" />
                <TextField sx={{margin: "20px"}} id="outlined-basic" label="Booking Date" variant="outlined" />
                <TextField sx={{margin: "20px"}} id="outlined-basic" label="Hotale Date" variant="outlined" />
                <TextField sx={{margin: "20px"}} id="outlined-basic" label="Out Date" variant="outlined" />
                <TextField sx={{margin: "20px", width:"90%"}} id="outlined-basic" label="Status" variant="outlined" />
                <Button sx={{margin: "20px"}} variant="contained" color="success">Save</Button>
                <Button sx={{margin: "20px"}} variant="outlined" color="error">Delete</Button>
              </div>
              <button style={{
                position:"absolute", 
                right:"1%", top:"2%", 
                borderRadius:"50%",
                backgroundColor:"white",
                border:"none",
                color:"#ff1a1a"}} onClick={() => setVisible(false)}>X</button>
            </Model>
        
        </div>
    </>
  );
};

export default CustomerAddPage;