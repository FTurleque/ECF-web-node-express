const repo = require('./repository')

module.exports = {
    getAll() {
        const sql = 'SELECT entriesId, dateDay, entriesNumber, movieId FROM entries'
        return repo.getAll(sql)
    },
    getById(id) {
        return repo.getOne(`SELECT entriesId, dateDay, entriesNumber, movieId FROM entries WHERE entriesId=?`, [id])
    },
    create(model) {
        // Verification que le film existe bien
        const sql = `INSERT INTO entries (dateDay, entriesNumber, movieId) VALUES (?, ?, ?)`
        const params = [model.dateDay, model.entriesNumber, model.movieId]
        return repo.execute(sql, params)
    },
    update(model) {
        const sql = `UPDATE entries SET dateDay=?, entriesNumber=?, movieId=? WHERE entriesId=?`
        const params = [model.title, model.duration, model.movieId]
        return repo.execute(sql, params)
    },
    delete(id) {
        const sql = `DELETE FROM entries WHERE entriesId=?`
        return repo.execute(sql, [id])
    }
}