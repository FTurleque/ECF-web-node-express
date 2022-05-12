const sqlite3 = require('sqlite3')
const path = require('path')

const dbPath = path.join(__dirname, 'database', 'cinepeaulisse.db')

const db = new sqlite3.Database(dbPath, (err) => {
    if(err) {
        console.loge(`Erreur SQL : ${err}` )
    }
    console.log('Database connected !')
})

module.exports = db