const db = require('mysql2/promise');
require('dotenv').config();

const pool = db.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // database: ,
    waitForConnections: true,
    connectionLimit: 5,
});

(async () => {
    const conn = await pool.getConnection();

    await conn.execute('CREATE DATABASE CADI_FINAL');
    conn.end();

})();

module.exports = {
    getConn: _ => pool.getConnection(),
};