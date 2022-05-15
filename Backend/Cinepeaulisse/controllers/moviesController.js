const repoMovies = require('../models/moviesRepository')
const { validationResult } = require('express-validator')

module.exports = {
    async index(req, res) {
        try {
            let result = await repoMovies.getAll()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).end()
        }
    },
    async getById(req, res) {
        try {
            const id = req.params.id
            let result = await repoMovies.getById(id)
            res.status(200).send(result)
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
                repoMovies.create(model)
                res.status(201).redirect('/films')
            } catch (error) {
                res.status(500).end()
            }
        }
    },
    async modify(req, res) {
        const model = req.body
        model.id = req.params.id
        let result = await repoMovies.update(model)
        res.status(202).json(result)
    },
    async remove(req, res) {
        const idMovie = req.params.id
        let result = await repoMovies.delete(idMovie)
        res.status(202).json(result)
    }
}