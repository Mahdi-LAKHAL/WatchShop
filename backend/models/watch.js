const mongoose = require('mongoose');

const watchSchema = mongoose.Schema({

    price: { type: Number, required: true },
    marque: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }

});

const watch = mongoose.model('watch', watchSchema);
module.exports = watch;