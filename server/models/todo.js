let mongoose = require('mongoose');

//create a contact model class
let todoSchema = mongoose.Schema({
    subject: String,
    description: String,
    category: String,
    date: Date
},
{
    collection: "todoCollection"
})

module.exports = mongoose.model('test', contactSchema);