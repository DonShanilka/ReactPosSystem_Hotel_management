import React,{useEffect,useState} from 'react'
import MyCart from './MyCart';

function LoadAllCustomer() {

  const [data, setData] = useState([]);

  const loadAllData = () => {
    fetch('http://Localhost:5001/api/customers')
        .then((response) => response.json())
        .then((json) => setData(json));
  }

  return (
    <div style={{position:"absolute",left:"30%",top:"20%"}}>
      <h1>Load All Customer</h1>
      <button onClick={loadAllData}>Load All Data</button>
      {
        // data.map((testHotel) => (<MyCart title="Card" testHotel={testHotel}/>))
      }
    </div>
  )
}

export default LoadAllCustomer
