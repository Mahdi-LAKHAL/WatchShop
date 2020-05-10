// Import Express module 
const express = require('express');
// Import mongoose module
const mongoose = require('mongoose');
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


app.get('/', (req, res) => {
    console.log('here in home page');
    const w = new Watch({
        price: 12,
        marque: "swatch",
        image: "image",
        description: "Test Product"
    });

    console.log("my object", w);
    w.save();

});

app.get('/dashboard', (req, res) => {
    //get all watches and return them from /dashboard
    Watch.find((err, documents) => {
        if (err) {
            console.log(" Cannot connect with DB");

        } else {
            console.log("All objects from DB", documents);

        }
    })
})


module.exports = app;