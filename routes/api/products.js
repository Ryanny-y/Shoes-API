const express = require('express');
const router = express.Router();
const { addNewProduct, getProduct, getSingleProduct } = require('../../controllers/api/productController');

router.route('/',)
  .get(getProduct)
  .post(addNewProduct);

router.get('/:id', getSingleProduct);

module.exports = router;