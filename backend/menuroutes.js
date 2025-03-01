const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// Get menu by restaurant ID
router.get('/:restaurantId', async(req, res) => {
    const menu = await Menu.find({ restaurantId: req.params.restaurantId });
    res.json(menu);
});

// Add a menu item
router.post('/', async(req, res) => {
    const { restaurantId, name, price } = req.body;
    const newMenu = new Menu({ restaurantId, name, price });
    await newMenu.save();
    res.json({ message: 'Menu Item Added' });
});

module.exports = router;