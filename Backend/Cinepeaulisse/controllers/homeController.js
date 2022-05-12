const repoMovie = require('../models/movieRepository')
const { validationResult } = require('express-validator')

module.exports = {
    async index(req, res) {
        try {
            let result = await repoMovie.getAll()
            res.send(result)
        } catch (error) {
            res.status(500).end()
        }
    },
    async getById(req, res) {
        try {
            const id = req.params.id
            let result = await repoMovie.getById(id)
            res.send(result)
        } catch (error) {
            res.status(500).end()
        }
    },
    async add(req, res) {
        const validatorErrors = validationResult(req)
        if(!validatorErrors.isEmpty()) {
            res.status(400).send(validatorErrors)
        } else {
            try {
                const model = req.body
                repoMovie.create(model)
                res.redirect('/films')
            } catch (error) {
                res.status(500).end()
            }
        }
    }
}