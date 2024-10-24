const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'admin',
    database: 'store'
})


module.exports = pool;