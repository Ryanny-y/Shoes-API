const Wishlist = require('../../model/Wishlist');


const getWishlistProducts = async (req, res) => {
  try {
    const wishlistProducts = await Wishlist.find();
    res.json(wishlistProducts);
  } catch (error) {
    res.status(500).json({"message": error.message})
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { id } = req.body;
    if(!id) return res.status(400).json({"message": "Id is Required!"});
    const duplicate = await Wishlist.findOne({_id: id}).exec();
    if(duplicate) return res.status(409).json({"message": "Product is already in the wishlist"});
    await Wishlist.create({
      _id: id
    });
    res.status(201).json({"message": "Added to Wishlist"});
  } catch (error) {
    res.status(500).json({"message": error.message})
  }
};

const deleteFromWishlist = async (req, res) => {
  try {
    const product = await Wishlist.findOne({_id: req.body.id}).exec();
    if(!product) return res.status(400).json({"message": `Product ID ${req.body.id} not found!`});
    await Wishlist.deleteOne({_id: req.body.id})
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({"message": error.message})
  }
};

module.exports = { getWishlistProducts, addToWishlist, deleteFromWishlist };