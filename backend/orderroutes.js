const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place an order
router.post('/', async(req, res) => {
    const { user, restaurantId, items, total } = req.body;
    const newOrder = new Order({ user, restaurantId, items, total });
    await newOrder.save();
    res.json({ message: 'Order Placed Successfully' });
});

// Get all orders
router.get('/', async(req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

module.exports = router;