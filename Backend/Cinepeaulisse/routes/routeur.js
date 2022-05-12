const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const validator = require('../middlewares/validator')

// Route pour les films
router.get('/films/:id', homeController.getById)
router.get('/films', homeController.index)
router.post('/films', validator.validatorMovie, homeController.add)

// route pour les entrées

module.exports = router