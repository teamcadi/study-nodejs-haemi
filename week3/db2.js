//connection pool 만들고 connection 꺼내오기
const mysql=require('mysql2/promise');

//(익명함수)()
(async function(){
    const pool = await mysql.createPool({
    host: 'localhost',
    user: 'root', 
    database: 'cadi',
    password: 'hamham2010.',
    waitForConnections : true,
    connectionLimit:10,
    });

    const conn1 = await pool.getConnection();
    const conn2 = await pool.getConnection();
    const conn3 = await pool.getConnection();
    

 //   const [row] = conn.query('select * from todo');
 //   console.log(row.title);

})();