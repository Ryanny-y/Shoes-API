const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlishSchema = new Schema({
  _id: {
    type: String,
    requird: true
  }
});

module.exports = mongoose.model("Wishlist", WishlishSchema);