const repo = require('./repository')

module.exports = {
    // getAll() {
    //     const sql = 'SELECT movie.movieId, movie.title, movie.duration, entries.EntriesId, entries.dateDay, entriesNumber FROM movie INNER JOIN entries ON entries.movieId = movie.movieId'
    //     return repo.getAll(sql)
    // },
    // async create(model) {
    //     const sql = `INSERT INTO movie (title, duration) VALUES (?, ?)`
    //     const params = [model.title, model.duration]
    //     repo.execute(sql, params)
    //     const id = await repo.getOne(`SELECT movieId FROM movie WHERE title=? AND duration=?`, [model.title, model.duration])
    //     model.movieId = id.movieId
    //     const sql2 = `INSERT INTO entries (dateDay, entriesNumber, movieId) VALUES (?, ?, ?)`
    //     const params2 = [model.dateDay, model.entriesNumber, model.movieId]
    //     return repo.execute(sql2, params2)
    // },
    getAll() {
        const sql = 'SELECT movieId, title, duration FROM movie'
        return repo.getAll(sql)
    },
    getById(id) {
        return repo.getOne(`SELECT movieId, title, duration FROM movie WHERE movieId=?`, [id])
    },
    create(model) {
        const sql = `INSERT INTO movie (title, duration) VALUES (?, ?)`
        const params = [model.title, model.duration]
        return repo.execute(sql, params)
    },
    update(model) {
        const sql = `UPDATE movie SET title=?, duration=? WHERE movieId=?`
        const params = [model.title, model.duration, model.movieId]
        return repo.execute(sql, params)
    },
    delete(id) {
        const sql = `DELETE FROM movie WHERE movieId=?`
        return repo.execute(sql, [id])
    }
}