const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    contact_first_name: { type: String, required: true },
    contact_last_name: { type: String, required: true },
    contact_email: { type: String, required: true },
    contact_message: { type: String, required: true }

});

const contact = mongoose.model('contact', contactSchema);
module.exports = contact;