const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
    trim: true
  },
  description:{
    type: String,
    require: true
  },
  rating:{
    type: Number,
    required:true,
    min:0
  },
  productid:{
    type: Number,
    required: true
  },
  
  createdAt: {  
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);