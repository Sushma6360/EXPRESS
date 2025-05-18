const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phonenumber: {
    type: Number,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique:true
    
    
  },
  password: {
    type: String,
    required: true,
    minlength:6
  },
  login:{
    type:String,
    enum:['success','not-success'],
    required:true
  },
  
  createdAt: {  
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Login', loginSchema);