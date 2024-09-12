import * as React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

export default function TableComponent() {

  // const URL = "http://localhost:5001/customers"; 

  // const fettchHandler = async () => {
  //   return await axios.get(URL).then((res) => res.data);
  // };


  // ********************************************************
  const [customer, setCustomer] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5001/customers')
      .then(customer => setCustomer(customer.data))
      .catch(err => console.log((err)))
    }, []);

    return (
      <>
        
      </>
    );
  }

