import React, { useState } from "react";
import "./CustomerPage.css";
import Table from "../components/TableComponent";
import "../pages/CustomerPage.css";
import AddCustomer from "../components/Customer/AddCustomer/AddCustomer";
import LoadAllCustomer from "../components/Customer/LoadCustomer/LoadAllCustomer";
import MyCart from "../components/Customer/LoadCustomer/MyCart";
import CustomerTable from "../components/Customer/TableComponent/CustomerTable";


const CustomerAddPage = () => {

  return (
    <>
      <div className="customerPageMainDiv">
        <Table />
        <CustomerTable />
        <AddCustomer />
      </div>
    </>
  );
};

export default CustomerAddPage;
