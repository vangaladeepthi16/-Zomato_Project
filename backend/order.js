const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: String,
    restaurantId: mongoose.Schema.Types.ObjectId,
    items: [{ name: String, price: Number }],
    total: Number
});

module.exports = mongoose.model('Order', orderSchema);