
import * as React from 'react';
import './CustomerPage.css'
import SearchAppBar from '../components/SerchBar';
import Table from '../components/TableComponent';
import Button from '@mui/material/Button';
import Model from 'react-modal'
import '../pages/CustomerPage.css'
import TextField from '@mui/material/TextField';




const CustomerAddPage = () => {

  const [visible, setVisible] = useState(false)


  return (
    <>
        <div className='customerPageMainDiv'>
            <SearchAppBar/>
            <Button variant="contained" color="success" sx={{position:"absolute", right:"2%", top:"20%"}} onClick={() => setVisible(true)}>+  Add Customer</Button>
            <Table/>

            <Model isOpen={visible} style={{
              overlay:{
                background:  "rgba(0, 0, 0, 0.692)",
                position:"absolute",
                width:"85%",
                height:"100%",
                left:"15%",
                top:"0%",
                zIndex:"20"
              },
              content:{
                height:"80%",
                width:"38%",
                top:"5%",
                left:"29%"
              }
            }}>
              <div className='customer-Form-Div'>
                <br /> <br />
                <TextField sx={{margin: "10px"}} id="outlined-basic" label="ID" variant="outlined" />
                <TextField sx={{margin: "10px"}} id="outlined-basic" label="Name" variant="outlined" />
                <TextField sx={{margin: "10px", width:"94%"}} id="outlined-basic" label="Address" variant="outlined" />
                <TextField sx={{margin: "10px",width:"94%"}} id="outlined-basic" label="Email" variant="outlined" />
                <TextField sx={{margin: "10px"}} id="outlined-basic" label="Country" variant="outlined" />
                <TextField sx={{margin: "10px"}} id="outlined-basic" label="Room No:" variant="outlined" />
                <TextField sx={{margin: "10px"}} id="outlined-basic" label="Booking Date" variant="outlined" /> 
                <TextField sx={{margin: "10px"}} id="outlined-basic" label="Out Date" variant="outlined" />
                
                <br /><br /><br />
                <Button sx={{margin: "10px"}} variant="contained" color="success">Save</Button>
                <Button variant="contained">Update</Button>
              </div>
              <button style={{
                position:"absolute", 
                right:"1%", top:"2%", 
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
