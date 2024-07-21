const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    require: true,
    default: 1
  },
  delivery_option: {
    type: String,
    required: true,
    default: "1"
  },
});

module.exports = mongoose.model('Cart', CartSchema);