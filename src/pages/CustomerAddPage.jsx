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

            <Model isOpen={visible}>
              <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </div>
              <button style={{position:"absolute", right:"5%"}} onClick={() => setVisible(false)}>Close model</button>
            </Model>
        
        </div>
    </>
  );
};

export default CustomerAddPage;
