const express = require('express')
const router = express.Router()
const icecreamCtrl = require('../controllers/icecream')

router.get('/', icecreamCtrl.index)
router.get('/:id', icecreamCtrl.show)

module.exports = router