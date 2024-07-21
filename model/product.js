const mongoose = require('mongoose');
const Products = require('./Products');

class Product {
  name;
  description;
  brand;
  category;
  images;
  price;
  size_available;
  stock_status;
  stock_quantity;
  gender;
  weight;
  keywords;

  constructor(productDetails) {
    this.name = productDetails.name;
    this.description = productDetails.description;
    this.brand = productDetails.brand;
    this.category = productDetails.category;
    this.images = productDetails.images;
    this.price = productDetails.price;
    this.size_available = productDetails.size_available;
    this.stock_quantity = this.calculateStockQuantity();
    this.stock_status = productDetails.stock_status;
    this.gender = productDetails.gender;
    this.weight = productDetails.weight;
    this.keywords = productDetails.keywords;
  }

  calculateStockQuantity() {
    return this.size_available.reduce((acc, cur) => cur.quantity + acc, 0);
  }
}

const products = [
  {
    name: "Samba OG Shoes",
    description: "Classic Adidas design meets timeless elegance in these iconic white Samba OG sneakers, blending heritage style with modern comfort.",
    brand: "Adidas",
    category: "Footwear",
    images: [
      'Adidas/Samba/Cloud_White_Black/Samba_OG_Shoes_White_01.avif',
      'Adidas/Samba/Cloud_White_Black/Samba_OG_Shoes_White_02.avif',
      'Adidas/Samba/Cloud_White_Black/Samba_OG_Shoes_White_03.avif',
      'Adidas/Samba/Cloud_White_Black/Samba_OG_Shoes_White_04.avif'
    ],
    price: 6800,
    size_available: [
      {
        size: "3.5 UK",
        quantity: 10
      },
      {
        size: "4 UK",
        quantity: 15
      },
      {
        size: "5 UK",
        quantity: 19
      },
      {
        size: "5.5 UK",
        quantity: 21
      },
      {
        size: "6 UK",
        quantity: 12
      },
      {
        size: "7 UK",
        quantity: 32
      },
      {
        size: "7.5 UK",
        quantity: 10
      },
      {
        size: "8 UK",
        quantity: 11
      },
      {
        size: "8.5 UK",
        quantity: 2
      },
      {
        size: "9 UK",
        quantity: 18
      },
      {
        size: "9.5 UK",
        quantity: 10
      },
      {
        size: "10 UK",
        quantity: 5
      }
    ],
    stock_status: "In Stock",
    gender: "Unisex",
    weight: "11.8 oz",
    keywords: ["Adidas", "Samba", "Samba OG"]
  },
  {
    name: "Samba OG Shoes",
    description: "Classic Adidas design meets timeless elegance in these iconic white Samba OG sneakers, blending heritage style with modern comfort.",
    brand: "Adidas",
    category: "Footwear",
    images: [
      'Adidas/Samba/Cloud_White_Green/Samba_OG_Shoes_White_01.avif',
      'Adidas/Samba/Cloud_White_Green/Samba_OG_Shoes_White_02.avif',
      'Adidas/Samba/Cloud_White_Green/Samba_OG_Shoes_White_03.avif',
      'Adidas/Samba/Cloud_White_Green/Samba_OG_Shoes_White_04.avif'
    ],
    price: 6800,
    size_available: [
      {
        size: "3.5 UK",
        quantity: 10
      },
      {
        size: "4 UK",
        quantity: 15
      },
      {
        size: "4.5 UK",
        quantity: 12
      },
      {
        size: "5 UK",
        quantity: 16
      },
      {
        size: "5.5 UK",
        quantity: 19
      },
      {
        size: "6.5 UK",
        quantity: 4
      },
      {
        size: "7 UK",
        quantity: 32
      },
      {
        size: "7.5 UK",
        quantity: 11
      },
      {
        size: "8 UK",
        quantity: 14
      },
      {
        size: "8.5 UK",
        quantity: 5
      },
      {
        size: "9 UK",
        quantity: 18
      },
      {
        size: "9.5 UK",
        quantity: 2
      },
      {
        size: "10 UK",
        quantity: 1
      }
    ],
    stock_status: "In Stock",
    gender: "Unisex",
    weight: "11.8 oz",
    keywords: ["Adidas", "Samba", "Samba OG"]
  },
  {
    name: "Samba OG Shoes",
    description: "Classic Adidas design meets timeless elegance in these iconic white Samba OG sneakers, blending heritage style with modern comfort.",
    brand: "Adidas",
    category: "Footwear",
    images: [
      'Adidas/Samba/Cloud_White_Magenta/Samba_OG_Shoes_White_01.avif',
      'Adidas/Samba/Cloud_White_Magenta/Samba_OG_Shoes_White_02.avif',
      'Adidas/Samba/Cloud_White_Magenta/Samba_OG_Shoes_White_03.avif',
      'Adidas/Samba/Cloud_White_Magenta/Samba_OG_Shoes_White_04.avif'
    ],
    price: 6800,
    size_available: [
      {
        size: "3.5 UK",
        quantity: 10
      },
      {
        size: "4 UK",
        quantity: 15
      },
      {
        size: "4.5 UK",
        quantity: 12
      },
      {
        size: "5 UK",
        quantity: 16
      },
      {
        size: "5.5 UK",
        quantity: 19
      },
      {
        size: "6.5 UK",
        quantity: 4
      },
      {
        size: "7 UK",
        quantity: 32
      },
      {
        size: "7.5 UK",
        quantity: 11
      },
      {
        size: "8 UK",
        quantity: 14
      },
      {
        size: "8.5 UK",
        quantity: 5
      },
      {
        size: "9 UK",
        quantity: 18
      },
      {
        size: "9.5 UK",
        quantity: 2
      },
      {
        size: "10 UK",
        quantity: 1
      }
    ],
    stock_status: "In Stock",
    gender: "Unisex",
    weight: "11.8 oz",
    keywords: ["Adidas", "Samba", "Samba OG"]
  },
  {
    name: "Samba OG Shoes",
    description: "Classic Adidas design meets timeless elegance in these iconic white Samba OG sneakers, blending heritage style with modern comfort.",
    brand: "Adidas",
    category: "Footwear",
    images: [
      'Adidas/Samba/Core_Black_White/Samba_OG_Shoes_Black_01.avif',
      'Adidas/Samba/Core_Black_White/Samba_OG_Shoes_Black_02.avif',
      'Adidas/Samba/Core_Black_White/Samba_OG_Shoes_Black_03.avif',
      'Adidas/Samba/Core_Black_White/Samba_OG_Shoes_Black_04.avif',
    ],
    price: 6800,
    size_available: [
      {
        size: "3.5 UK",
        quantity: 2
      },
      {
        size: "4 UK",
        quantity: 15
      },
      {
        size: "4.5 UK",
        quantity: 12
      },
      {
        size: "5 UK",
        quantity: 12
      },
      {
        size: "6.5 UK",
        quantity: 4
      },
      {
        size: "7 UK",
        quantity: 29
      },
      {
        size: "8 UK",
        quantity: 15
      },
      {
        size: "8.5 UK",
        quantity: 14
      },
      {
        size: "9 UK",
        quantity: 14
      },
      {
        size: "9.5 UK",
        quantity: 17
      },
      {
        size: "10 UK",
        quantity: 12
      }
    ],
    stock_status: "In Stock",
    gender: "Unisex",
    weight: "11.8 oz",
    keywords: ["Adidas", "Samba", "Samba OG"]
  },
  {
    name: "Samba OG Shoes",
    description: "Classic Adidas design meets timeless elegance in these iconic white Samba OG sneakers, blending heritage style with modern comfort.",
    brand: "Adidas",
    category: "Footwear",
    images: [
      'Adidas/Samba/Core_Black_Scarlet/Samba_OG_Shoes_Black_01.avif',
      'Adidas/Samba/Core_Black_Scarlet/Samba_OG_Shoes_Black_02.avif',
      'Adidas/Samba/Core_Black_Scarlet/Samba_OG_Shoes_Black_03.avif',
      'Adidas/Samba/Core_Black_Scarlet/Samba_OG_Shoes_Black_04.avif',
    ],
    price: 6800,
    size_available: [
      {
        size: "3.5 UK",
        quantity: 10
      },
      {
        size: "4 UK",
        quantity: 15
      },
      {
        size: "4.5 UK",
        quantity: 12
      },
      {
        size: "5 UK",
        quantity: 16
      },
      {
        size: "5.5 UK",
        quantity: 12
      },
      {
        size: "6.5 UK",
        quantity: 4
      },
      {
        size: "7 UK",
        quantity: 12
      },
      {
        size: "7.5 UK",
        quantity: 11
      },
      {
        size: "8 UK",
        quantity: 14
      },
      {
        size: "8.5 UK",
        quantity: 5
      },
      {
        size: "9 UK",
        quantity: 13
      },
      {
        size: "9.5 UK",
        quantity: 2
      },
      {
        size: "10 UK",
        quantity: 1
      }
    ],
    stock_status: "In Stock",
    gender: "Unisex",
    weight: "11.8 oz",
    keywords: ["Adidas", "Samba", "Samba OG"]
  },
].map(product => {
  return new Product(product)
})

const insertToDataBase = async () => {
  products.forEach(async product => {
    const { name, description, brand, category, images, price, size_available, stock_quantity, stock_status, gender, weight, keywords} = product ;
    await Products.create({
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
  })
}

module.exports = insertToDataBase;