import React, { useState, useEffect } from "react";
import axios from "axios";
import TableComponent from "../../TableComponent";

function CustomerTable() {
    const [customer, setCustomerData] = useState([]);

    // Fetch customer data on component mount
    useEffect(() => {
        axios.get("http://localhost:5001/api/customers")
            .then(response => setCustomerData(response.data))
            .catch(err => console.log(err));
    }, []);

    console.log(customer)

    const customerArray = Object.values(customer);

    console.log(customerArray);

    return (
        <div>
            {customerArray.map((test) => (<TableComponent title="Table" test={test} />))}
        </div>
    )
}

export default CustomerTable