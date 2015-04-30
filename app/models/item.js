// app/models/item.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var itemSchema = mongoose.Schema({

    title: {
        type: String,
        required: 'Title is required'
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// create the model for items and expose it to our app
module.exports = mongoose.model('Item', itemSchema);