/**
 * 1. 디비 드라이버 호출
 * 2.디비 연동 설정
 * 3. 디비 연동 = 커넥션 개체 생성
 * 4. 커넥션 개체를 총해 sql 던짐
 */

const mysql = require('mysql2/promise');

async function main(){
    try{
const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'cadi',
    password: 'hamham2010.',
});

    const [row] = await conn.query("select * from todo");
    console.log(row);
    }
    catch (e){
        console.error(e.message);
    }
};

// await conn.execute();

}

main();