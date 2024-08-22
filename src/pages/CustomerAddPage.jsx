import React, { useState } from 'react';
import './CustomerPage.css'


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
            <serchBarComponent/>
        </div>
    </>
  );
};

export default CustomerAddPage;
