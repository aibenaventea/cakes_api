const mongoose = require('../config/mongoose')

const CakesSchema = new mongoose.Schema({
    userName: {type: String, required: [true, 'userName: is empty']},
    comment: {type: String, default:''},
    stars: {type: Number, default:0},
    cakeImg: {type: String, default:''}
}, {timestamps:true}
);

const cakes = mongoose.model('cake', CakesSchema);

module.exports = cakes;