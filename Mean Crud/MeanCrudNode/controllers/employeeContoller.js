const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee.js');

router.get('/', (req, res, next) => {
    Employee.find().then((response) => {
        res.send(response);
    }).catch(() => {
        res.send("Unable to Get data")
        console.log("An error occured" + JSON.stringify(err));
    })
})

router.post('/', (req, res, next) => {
    var emp = Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    })
    emp.save().then((response) => {
        res.send(response);
    }).catch(() => {
        res.send("Unable to Get data")
        console.log("An error occured" + JSON.stringify(err));
    })
});

router.get('/:id', (req, res, next) => {
    var id=req.params.id;
    Employee.findById(id).then((response) => {
        res.send(response);
    }).catch(() => {
        res.status(400).send("No user present with this id");
        console.log("An error occured" + JSON.stringify(err));
    })
})

router.put('/:id', (req, res, next) => {
    var id=req.params.id;
    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(id,{$set:emp},{new:true}).then((response) => {
        res.send(response);
    }).catch(() => {
        res.status(400).send("No user present with this id");
        console.log("An error occured" + JSON.stringify(err));
    })
});

router.delete('/:id', (req, res, next) => {
    var id=req.params.id;
    Employee.findByIdAndRemove(id).then((response) => {
        res.send(response);
    }).catch(() => {
        res.status(400).send("No user present with this id");
        console.log("An error occured" + JSON.stringify(err));
    })
})

module.exports = router;