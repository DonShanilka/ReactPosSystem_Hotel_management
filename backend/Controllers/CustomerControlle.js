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
    const {cid,name} = req.body;

    Customer.updateOne({cid:cid}, {set: {name: name}})
            .then(update => {
                res.json({update})
            })
            .catch(error => {
                res.json({error})
            });
}

const deleteCustomer = (req,res,next) => {
    const id = req.body.id;
    
    Customer.deleteOne({id:id})
            .then(deleted => {
                res.json({deleted})
            }) 
            .catch(error => {
                res.json({error})
            })
}


exports.getAllCustomer = getAllCustomer;
exports.addCustomer = addCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;