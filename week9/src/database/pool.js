require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
    user: 'root', 
    database: 'cadi',
    password: 'hamham2010.',
    waitForConnections : true,
    connectionLimit:5,
});

(async () => {
   const conn = await pool.getConnection();

   // create database, table
   //   await conn.execute('create database board');
   // todo: post, comment, like, image
   await conn.execute(`
   CREATE TABLE post(
     id int(11) NOT NULL AUTO_INCREMENT,
     title varchar(20) NOT NULL, 
     content text NOT NULL,
     user_id int(11),
     createAt timestamp NOT NULL DEFAULT current_timestamp(),
     updateAt timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
     PRIMARY KEY (id),
     CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES user (id)
     )
   `);
   
   await conn.release();
   console.log('end');
 })();

module.exports = {
  getConn: () => pool.getConnection(),
};
