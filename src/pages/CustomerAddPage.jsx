import React, { useState } from 'react';
import './'

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

    </>
  );
};

export default CustomerAddPage;
