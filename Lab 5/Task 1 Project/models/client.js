const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Client schema
const ClientSchema = new Schema({

  // Email: 
    // {
    //     type:String,
    //     required: true,
    // },
    // FirstName : 
    // {
    //     type: String,
    // },
    // LastName: 
    // {
    //     type: String,
    // },
    // PhoneNumber:
    // {
    //     type: Number,
    // },
    // UserName: 
    // {
    //     type: String,
    //     unique: true,
    // },
    // OR 
    
  email: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  phoneNumber: String,
  username: {
    type: String,
    unique: true
  }
})

// Create Client model
const Client = mongoose.model('clients', ClientSchema);
module.exports = Client;
