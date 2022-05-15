const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesController')
const sessionsController = require('../controllers/sessionsController')
const validator = require('../middlewares/validator')

// Route pour les films
router.get('/films/:id', moviesController.getById)
router.put('/films/:id', moviesController.modify)
router.get('/films', moviesController.index)
router.post('/films', validator.validatorMovie, moviesController.add)

// Route cross-table Films Entrées
router.get('/seances/:id', sessionsController.getById)
router.put('/seances/:id', sessionsController.modify)
router.get('/seances', sessionsController.index)
router.post('/seances', validator.validatorMovie, sessionsController.add)

module.exports = router