const Icecream = require('../models/icecream')

module.exports = {
    index,
    show,
    new: newIcecream,
    create,
}


async function index (req, res) {
    const icecream = await Icecream.find({})
    res.render('icecream/index', {icecream})
}

async function show (req, res) {
    const icecream = await Icecream.findById(req.params.id)

    res.render('icecream/show', {icecream})
}

function newIcecream (req, res) {
    res.render('icecream/new')
}

async function create(req, res) {
    req.body.available = !! req.body.available
    await Icecream.create(req.body)
    res.redirect('/icecream')
}