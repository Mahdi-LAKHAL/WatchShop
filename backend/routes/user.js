// Import Express module 
const express = require('express');
// Import Router
const router = express.Router();
// Import User Module
const User = require('../models/user')
    // Add use to DB
router.post('/signup', (req, res) => {

    console.log("here in Signup");
    console.log("req Body", req.body);

    const user = new User({

        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        password: req.body.password

    });


    user.save()
        .then(
            result => {
                res.status(200).json({
                    message: "User added successfully",
                    result: result
                })
            }
        ).catch(
            err => {
                res.status(500).json({
                    error: err
                })
            })
});
//Login
router.post('/signin', (req, res) => {

});

module.exports = router;