const express = require('express');
const router = express.Router();
const Login=require ('../models/login');

// Get all items
router.get('/', async (req, res) => {
  try {
    const login=await Login.find();
    res.json(login);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Login' });
  }
});

// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);
    if (!login) {
      return res.status(404).json({ message: 'Login is not found'})
    }
    res.json(Login);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Login' });
  }
}); 

// Create a new item
router.post('/', async (req, res) => {
  try {
const { name, phonenumber, email, password, login } = req.body;
const newLogin = new Login({
  name,
  phonenumber,
  email,
  password,
  login
});
await newLogin.save();
res.status(201).json(newLogin);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const login= await Login.findByIdAndUpdate(
      req.params.id,
      { name,phonenumber,email,password,login}
       
    );
    if (!login) {
      return res.status(404).json({ message: 'Login not found' });
    }
    res.json(login);
  } catch (error) {
    res.status(400).json({ message: 'Error updating Login' });
  }
});

// Delete an item
router.patch('/:id', async (req, res) => {
  try {
    const login = await login.findByIdAndpatch(req.params.id);
    if (!Login) {
      return res.status(404).json({ message: 'Login not found' });
    }
    res.json({ message: 'Login patched successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error patching Login' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const login = await login.findByIdAndDelete(req.params.id);
    if (!login) {
      return res.status(404).json({ message: 'Login not found' });
    }
    res.json({ message: 'Login deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Login' });
  }
});

module.exports = router; 