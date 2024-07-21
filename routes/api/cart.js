const express = require('express');
const router = express.Router();
const { getCartProducts, addToCart, updateCart, removeFromCart } = require('../../controllers/api/cartController');

router.route('/')
  .get(getCartProducts)
  .post(addToCart)
  .put(updateCart)
  .delete(removeFromCart)

module.exports = router;