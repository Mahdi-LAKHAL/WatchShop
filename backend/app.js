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
// Import User Routes
const userRoutes = require('./routes/user');
// Import Auth module
const auth = require('./auth/auth');
// Create express  APP
const app = express();
const multer = require('multer');
// The path module provides utilities for working with file and directory paths
const path = require('path');
// Using /images as per default folder of images
app.use('/images', express.static(path.join('backend/images')));
// Connect BE with MongoDB via mongoose
mongoose.connect('mongodb://localhost:27017/darklookDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, X-Requested-with, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error('Mime Type is Invalid');
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase();
        const extension = MIME_TYPE[file.mimetype];
        cb(null, name + Date.now() + '.' + extension);
    }
});

// Add New Product
app.post('/api/addwatch', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('Req File', req.file);

    // req.protocol: http or https

    url = req.protocol + '://' + req.get('host');
    const imagePath = url + '/images/' + req.file.filename;

    const w = new Watch({
        name: req.body.name,
        price: req.body.price,
        marque: req.body.marque,
        image: imagePath,
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

//Get Watch ByID
//URL : http://localhost:3000/api/watches/:id

app.get('/api/watches/:id', (req, res) => {
    Watch.find({ _id: req.params.id }).then(
        watch => {
            if (watch) {
                res.status(200).json(watch);

            } else {
                console.log("Watch not Found");
                res.status(404).json({
                    message: "404 Not Found"
                })
            }
        }
    )
});

//delete Watch ByID
//URL : http://localhost:3000/api/watches/:id

app.delete('/api/watches/:id', auth, (req, res) => {
    Watch.deleteOne({ _id: req.params.id }).then(
        data => {
            console.log("deleted", data);

        }
    )
    res.status(200).json({
        message: "Deleted Successfully "
    });
});

//update Watch ByID
//URL : http://localhost:3000/api/watches/:id

app.put('/api/watches/:id', auth, (req, res) => {

    console.log("req Body", req.body);

    const watch = new Watch({
        _id: req.body._id,
        price: req.body.price,
        marque: req.body.marque,
        image: req.body.image,
        description: req.body.description
    });
    Watch.updateOne({ _id: req.body._id }, watch).then(
        data => {
            if (data) {
                res.status(200).json({
                    message: "Updates successfully"
                })
            } else {
                console.log("Error Update");

            }
        }
    )
})

app.use('/api/user', userRoutes);


module.exports = app;