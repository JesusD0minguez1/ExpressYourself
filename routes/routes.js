const fs = require("fs");
const config = require("../config");

exports.titleFunction = (req,res) => {
    res.render("Title",{
        title:"Express Yourself lab",
        config
    });
};

exports.index = (req,res) => {
    res.render("orders",{
        title:"Orders",
        config
    });
};

exports.featureFunction = (req,res) => {
    res.render("features",{
        title:"Features",
        config
    });
};


exports.submitted = (req,res) => {

    let order = {
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email
    };

    let orderDatatxt = `
        Name: ${order.name},
        Address: ${order.address},
        Phone: ${order.phone},
        Email: ${order.email}
        ---------------------------------
    `

    fs.appendFile('public/Data.txt', orderDatatxt, err =>{
        if(err) throw err;
        console.log("saved Data");
    });

    res.render("features", {
        title: "Features",
        order,
        config
    });
    
};