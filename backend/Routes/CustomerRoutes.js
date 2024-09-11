const express = require("express");
const router = express.Router();
const CustomerController = require("../Controllers/CustomerControlle");

router.get("/customers",CustomerController.getAllCustomer);
router.post("/addcustomers",CustomerController.addCustomer);
router.put("/updatecustomers/:id",CustomerController.updateCustomer);
router.delete("/deletecustomers",CustomerController.deleteCustomer);
router.get("/Onecustomers/:id",CustomerController.getById);


// export 
module.exports = router;
