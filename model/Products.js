const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size_available: {
    type: [{
      size: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      _id: false
    }]
  },
  stock_quantity: {
    type: Number,
  },
  stock_status: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  keywords: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);