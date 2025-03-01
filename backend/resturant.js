const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    cuisine: String,
    rating: Number
});

module.exports = mongoose.model('Restaurant', restaurantSchema);