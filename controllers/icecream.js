const Icecream = require('../models/icecream')

module.exports = {
    index,
    show
}


async function index (req, res) {
    const icecream = await Icecream.find({})
    res.render('icecream/index', {icecream})
}

async function show (req, res) {
    const icecream = await Icecream.findById(req.params.id)

    res.render('icecream/show', {icecream})
}