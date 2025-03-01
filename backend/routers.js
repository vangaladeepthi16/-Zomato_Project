const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Get all restaurants
router.get('/', async(req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});

// Add a new restaurant
router.post('/', async(req, res) => {
    const { name, location, cuisine, rating } = req.body;
    const newRestaurant = new Restaurant({ name, location, cuisine, rating });
    await newRestaurant.save();
    res.json({ message: 'Restaurant Added' });
});

module.exports = router;