const Product = require('../../model/Products');

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);    
  } catch (error) {
    res.status(500).json({"message": error.message})
  }
};

const addNewProduct = async (req, res) => {
  const { name, description, brand, category, images, price, size_available, stock_status, gender, weight, keywords} = req.body;
  
  try {
    const stock_quantity = size_available.reduce((acc, cur) => {
      return cur.quantity + acc;
    }, 0);
    console.log(size_available);

    await Product.create({
      name,
      description,
      brand,
      category,
      images,
      price, 
      size_available,
      stock_quantity,
      stock_status,
      gender,
      weight,
      keywords
    });

    res.status(201).json({"message": "Product Added"});
  } catch (error) {
    res.status(500).json({"message": error.message});
  }
}

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({_id: req.params.id}).exec();
    if(!product) return res.status(400).json({"message": `Product ID ${req.params.id} not found.`});
    res.json(product);
  } catch (error) {
    res.status(500).json({"message": error.message});
  }
};


module.exports = {addNewProduct, getProduct, getSingleProduct };
