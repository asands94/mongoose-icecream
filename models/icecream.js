const mongoose = require('mongoose')

const {Schema, model} = mongoose

const icecreamSchema = new Schema({
    flavor: {type: String},
    dairyFree: {type: Boolean, default: false},
    available: {type: Boolean, default: false}
}, {
    timestamps: true
})

module.exports = model('Icecream', icecreamSchema)