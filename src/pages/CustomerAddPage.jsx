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
            <Button variant="contained" color="success" sx={{position:"absolute", right:"2%", top:"20%"}} onClick={() => setVisible(true)}>+ Add Customer</Button>
            <Table/>

            <Model isOpen={visible} style={{
              overlay:{
                background:  "rgba(172, 172, 172, 0.541)",
                position:"absolute",
                width:"85%",
                height:"100%",
                left:"15%",
                top:"0%",
                zIndex:"5"
              },
              content:{
                height:"60%",
                width:"94%",
                top:"30%",
                left:"1.5%"
              }
            }}>
              <div>
                <TextField id="outlined-basic" label="ID" variant="outlined" />
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Address" variant="outlined" />
                <TextField id="outlined-basic" label="Country" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Room No:" variant="outlined" />
                <TextField id="outlined-basic" label="Booking Date" variant="outlined" />
                <TextField id="outlined-basic" label="Hotel Date" variant="outlined" />
                <TextField id="outlined-basic" label="Out Date" variant="outlined" />
                <TextField id="outlined-basic" label="Status" variant="outlined" />
                <TextField id="outlined-basic" label="Action" variant="outlined" />
              </div>
              <button style={{
                position:"absolute", 
                right:"2%", top:"3%", 
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
