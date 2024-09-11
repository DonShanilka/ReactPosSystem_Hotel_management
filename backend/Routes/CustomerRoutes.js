const express = require("express");
const router = express.Router();
const CustomerController = require("../Controllers/CustomerControlle");

router.get("/customers",CustomerController.getAllCustomer);
router.post("/addcustomers",CustomerController.addCustomer);
router.put("/updatecustomers",CustomerController.updateCustomer);
router.delete("/deletecustomers",CustomerController.deleteCustomer);


// export 
module.exports = router;
