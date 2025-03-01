const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    restaurantId: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mongoose.model('Menu', menuSchema);