const express = require('express')
const router = express.Router()
const icecreamCtrl = require('../controllers/icecream')

router.get('/', icecreamCtrl.index)
router.get('/new', icecreamCtrl.new)
router.get('/:id', icecreamCtrl.show)
router.post('/', icecreamCtrl.create)


module.exports = router