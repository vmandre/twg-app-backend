const express = require('express')
const router = express.Router()
const ProductModel = require('../mongo/model/product')
// Load categories from json file
const categories = require('./categories.json');

// Limit of items to send to the client application
const MAX_REG = 12;

// GET products from database, limiting the result to MAX_REG
// if exists param on the request, then, the search is for 'product name' OR 'brand'
router.get('/', (req, res) => {
  let page = req.query.page;
  let nameProduct = req.query.name;

  console.log('GET products. page:', page);
  console.log('nameProduct', nameProduct);
  
  ProductModel.find({ $or: [{ name: new RegExp(nameProduct, 'i') }, { brand: new RegExp(nameProduct, 'i') }] }, (err, data) => {  
    if (err) {
        console.log('error on getting products', err);       
        res.send(err)
    }

    if (data.length === 0){
      return res.status(404).json(data)
    }
    res.status(200).json(data)

  }).skip( page > 0 ? ( ( page - 1 ) * MAX_REG ) : 0 )
  .limit(MAX_REG)  

});

// GET products from database, using the category name as parameter,
// limiting the result to MAX_REG
router.get('/category', (req, res) => {
  let page = req.query.page;
  let categoryName = req.query.category;

  console.log('GET products by category. page:', page);
  console.log('categoryName', categoryName);
  
  ProductModel.find({ categories: new RegExp(categoryName, 'i')  }, (err, data) => {  
    if (err) {
        console.log('error on getting products by category', err);       
        res.send(err)
    }
    res.json(data)
  }).skip( page > 0 ? ( ( page - 1 ) * MAX_REG ) : 0 )
  .limit(MAX_REG)  

});


// GET all distinct categories from a static json file
router.get('/categories', (req, res) => {
  console.log('GET categories');
  res.status(200).json(categories)
});

module.exports = router