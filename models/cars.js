
var mongoose = require('mongoose');
//create a schema
var PostSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    condition: String,
    year: Number,
    body: String,
    color: String
});
//tell mongoose to create a real model from our schema and export it
module.exports = mongoose.model('cars', PostSchema)
