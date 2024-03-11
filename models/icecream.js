const mongoose = require('mongoose')

const {Schema, model} = mongoose

const icecreamSchema = new Schema({
    flavor: {type: String},
    dairyFree: {type: Boolean},
    available: {type: Boolean}
}, {
    timestamps: true
})

module.exports = model('Icecream', icecreamSchema)