const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'Musicas',
    password: '',
    database: 'musicas'

});

module.exports = pool.promise();