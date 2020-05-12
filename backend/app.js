// Import Express module 
const express = require('express');
// Import mongoose module
const mongoose = require('mongoose');
// Import body parser module
const bodyParser = require('body-parser');
// Import watch module
const Watch = require('./models/watch');
// Import user module
const User = require('./models/user');
// Import contact module
const Contact = require('./models/contact');
// Create express  APP
const app = express();
// Connect BE with MongoDB via mongoose
mongoose.connect('mongodb://localhost:27017/darklookDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, X-Requested-with");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});

// app.get('/', (req, res) => {
//     console.log('here in home page');
//     const w = new Watch({
//         price: 12,
//         marque: "swatch",
//         image: "image",
//         description: "Test Product"
//     });

//     console.log("my object", w);
//     w.save();

// });

// app.get('/dashboard', (req, res) => {
//     //get all watches and return them from /dashboard
//     Watch.find((err, documents) => {
//         if (err) {
//             console.log(" Cannot connect with DB");

//         } else {
//             console.log("All objects from DB", documents);

//         }
//     })
// })
// Add New Product
app.post('/api/addwatch', (req, res) => {
    console.log('Post from FE');
    console.log(req.body);

    const w = new Watch({
        price: req.body.price,
        marque: req.body.marque,
        image: req.body.image,
        description: req.body.description
    })
    w.save();
    // Sending response to FE
    //status 201 = insertion done

    res.status(201).json({ message: " watch added succefully" })
})


// get all products 
//url : http://localhost:3000/api/allproducts

app.get('/api/allproducts', (req, res) => {

    Watch.find((err, documents) => {

        //status 200 = OK
        res.status(200).json({
            message: "List of watches fetched",
            watches: documents
        })

    });

})

module.exports = app;