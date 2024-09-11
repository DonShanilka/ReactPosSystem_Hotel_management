const express = require("express");
const router = express.Router();

//Insert Model
const CustomerModel = require("../Model/CustomerModel");
// Insert Controller
const CustomerController = require("../Controllers/CustomerControlle");

router.get("/",CustomerController.getAllCustomer);

// export 
module.exports = router;
