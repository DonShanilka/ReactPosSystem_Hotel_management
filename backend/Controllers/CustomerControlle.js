const { set } = require("../App");
const Customer = require("../Model/CustomerModel");


const getAllCustomer = (req,res,next) => {
   Customer.find()
            .then(customer => {
                res.json({customer})
            })
            .catch(error => {
                res.json({error})
            });
};

const addCustomer = (req,res,next) => {
    const customer = new Customer({
        cid: req.body.cid,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        email: req.body.email
    });
    customer.save()
            .then(addcustomer => {
                res.json({addcustomer})
            })
            .catch(error => {
                res.json({error})
            });
}

const updateCustomer = (req,res,next) => {

    const id = req.params.id;
    const {cid,name,age,address,email} = req.body;

    Customer.findByIdAndUpdate(id ,{cid: cid,name: name,age:age,address:address,email:email})
            .then(update => {
                res.json({update})
            })
            .catch(error => {
                res.json({error})
            });
}

const deleteCustomer = (req,res,next) => {
    const id = req.params.id;
    
    Customer.findByIdAndDelete(id)
            .then(deleted => {
                res.json({deleted})
            }) 
            .catch(error => {
                res.json({error})
            })
}

const getById = async(req,res,next) => {
    const id = req.params.id;

    let cust;

    try{
        cust = await Customer.findById(id);
    } catch(err) {
        console.log(err);
    }

    if (!cust) {
        return res.status(404).json({message:"no Customer"});
    } else {
        return res.status(200).json({cust});
    }
}

exports.getAllCustomer = getAllCustomer;
exports.addCustomer = addCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;
exports.getById = getById;