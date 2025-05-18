const express = require('express');
const router = express.Router();
const Item = require('../models/Product');
const Product = require('../models/Product');

// Get all items
router.get('/', async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { productname,description,rating,productid } = req.body;
    const product = new Product({
     productname,
     rating,
     description,
     productid
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Error creating product' });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const { productname,description,rating,productid } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { productname,description,rating,productid },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: 'Error updating product' });
  }
});

// Delete an item
router.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndpatch(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product patched successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error patching Product' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
  }
});

module.exports = router; 