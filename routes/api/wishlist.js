const express = require('express');
const router = express.Router();
const { getWishlistProducts, addToWishlist, deleteFromWishlist } = require("../../controllers/api/wishlistController");

router.route('/')
  .get(getWishlistProducts)
  .post(addToWishlist)
  .delete(deleteFromWishlist)

module.exports = router;