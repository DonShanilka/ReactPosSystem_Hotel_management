const Customer = require("../Model/CustomerModel");

const getAllCustomer = async(req,res,next) => {
    let Customers;

    try {
        customer = await Customers.find();
    } catch (err) {
        console.log(err);
    }

    // not found
    if(!customer) {
        return res.status(404).json({message:"Customer Not Found"})
    }
    // Display all users
    return res.staus(200).json({customer});
};

exports.getAllCustomer = getAllCustomer;