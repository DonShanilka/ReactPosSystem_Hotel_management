import React, { useState } from "react";
import "./CustomerPage.css";
import Table from "../components/TableComponent";
import "../pages/CustomerPage.css";
import AddCustomer from "../components/Customer/AddCustomer/AddCustomer";
import LoadAllCustomer from "../components/Customer/LoadCustomer/LoadAllCustomer";
import MyCart from "../components/Customer/LoadCustomer/MyCart";


const CustomerAddPage = () => {

  const [visible, setVisible] = useState(false);

  // ###################################################################
  const [customerData, setCustomerData] = useState([]);

  const loadallCustomer = () => {
    fetch("http://Localhost:3000")
      .then((respons) => respons.json())
      .then((json) => setCustomerData(json));
  };

  return (
    <>
      <div className="customerPageMainDiv">
        <Table />
        <AddCustomer />
      </div>
    </>
  );
};

export default CustomerAddPage;
