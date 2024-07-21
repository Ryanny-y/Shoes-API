const Cart = require('../../model/Cart');

const getCartProducts = async (req, res) => {
  try {
    const cartProducts = await Cart.find();
    res.json(cartProducts);
  } catch (error) {
    res.status(500).json({"message": error,message});
  }
  
};

const addToCart = async (req, res) => {
  try {
    const {id} = req.body;
    if(!id) return res.status(400).json({"message": "Product to add is required!"});
    const duplicate = await Cart.findOne({ _id: id}).exec();
    if(duplicate) {
      await Cart.updateOne({_id: id}, {$set: {quantity: duplicate.quantity + Number(req.body.quantity)}});
      res.sendStatus(200);
    } else {
      const addedProduct = Cart.create({
        _id: id,
        quantity: Number(req.body.quantity),
        delivery_option: req.body.delivery_option
      });
      res.status(201).json({"message": "Added To Cart"});
    }
  } catch (error) {
    res.status(500).json({"message": error.message});
  }
};

const updateCart = async (req, res) => {
  try {
    const product = await Cart.findOne({ _id: req.body.id}).exec();
    if(!product) return res.status(400).json({"message": `Product ID ${req.body.id} not found!`});
    const { quantity, delivery_option } = req.body;

    if(quantity) {
      await Cart.updateOne({_id: product.id}, {$set: {quantity: req.body.quantity }});
    } else if (delivery_option) {
      await Cart.updateOne({_id: product.id}, {$set: {delivery_option: req.body.delivery_option }});
    }
    res.status(200).json({"message": "updated successfuly"});
  } catch (error) {
    res.status(500).json({"message": error.message});
  }
};

const removeFromCart = async (req, res) => {
  try {
    const product = await Cart.findOne({_id: req.body.id});
    if(!product) return res.status(400).json({"message": `Product ID ${req.body.id} not found!`});
    await Cart.deleteOne({_id: product.id});
    res.sendStatus(200);

  } catch (error) {
    res.status(500).json({"message": error.message});
  }
};


module.exports = { getCartProducts, addToCart, updateCart, removeFromCart };