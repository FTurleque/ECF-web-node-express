const repoSessions = require('../models/sessionsRepository')
const { validationResult } = require('express-validator')

module.exports = {
    async index(req, res) {
        try {
            let result = await repoSessions.getAll()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).end()
        }
    },
    async getById(req, res) {
        try {
            const id = req.params.id
            let result = await repoSessions.getById(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).end()
        }
    },
    async add(req, res) {
        try {
            const model = req.body
            repoSessions.create(model)
            res.status(201).redirect('/seances')
        } catch (error) {
            res.status(500).end()
        }
    },
    async modify(req, res) {
        const model = req.body
        model.id = req.params.id
        let result = await repoSessions.update(model)
        res.status(202).json(result)
    },
    async remove(req, res) {
        const idMovie = req.params.id
        let result = await repoSessions.delete(idMovie)
        res.status(202).json(result)
    }
}