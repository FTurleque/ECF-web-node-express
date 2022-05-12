const db = require('./index')


module.exports = {
    async getAll(sql, params = []) {
        return new Promise((resolve, reject) => {
            db.all(sql, params, (err, rows) => {
                if(err) {
                    console.log(`Erreur SQL : ${err}`)
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    },

    getOne(sql, params = []) {
        return new Promise((resolve, reject) => {
            db.get(sql, params, (err, row) => {
                if(err) {
                    console.log(`Erreur SQL : ${err}`)
                    reject(err)
                } else {
                    resolve(row)
                }
            })
        })
    },
    execute(sql, params = []) {
        return new Promise((resolve, reject) => {
            db.run(sql, params, (err, row) => {
                if(err) {
                    console.log(`Erreur SQL : ${err}`)
                    reject(false)
                } else {
                    console.log('create')
                    resolve(true)
                }
            })
        })
    }
}