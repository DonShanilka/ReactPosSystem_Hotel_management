import React, { useState } from 'react';
import './CustomerPage.css'
import SearchAppBar from '../components/SerchBar';
import Table from '../components/TableComponent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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

  return (
    <>
        <div className='customerPageMainDiv'>
            <SearchAppBar/>
            <Button variant="contained" color="success" sx={{position:"absolute", left:"20%", top:"20%"}}>Success</Button>
            <Table/>
        </div>
    </>
  );
};

export default CustomerAddPage;
