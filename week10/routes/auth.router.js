const bcrypt = require('bcrypt');
const { JsonWebTokenError } = require('jsonwebtoken');
const { getConn } = require('../database/pool');
const router = require('express').Router();

router.post('/login', (req, res, next)=>{
    let conn;
    let result;
    try{
        conn = await getConn();
        const { email, password } = req.body;
        const [[user]] = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
        if(!user) result = {success:false, message:'없는 이메일'};
        else if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({id:user.id, email:user.email}, process.env.SECRET_KEY)
            result = {success: true, token};
        }
        else{
            result = {success: false, message: '비번틀림'};
        }
    }
    catch (e){
        next(e);
    }
    finally{
        if (conn) conn.release();
        res.status(201).json({ success: true})
    }
});

router.post('/register', (req, res, next)=>{
    let conn;
    try{
        conn = await getConn();
        const { email, name, password } = req.body;
        const hashPw = await bcrypt.hash(password, 11);
        await conn.execute(`
        INSERT INTO user(email, name, password)
        VALUES(?, ?, ?)
        `,
        [email, name, hashPw],
        );
    }
    catch (e){
        next(e);
    }
    finally{
        if (conn) conn.release();
        res.status(201).json({ success: true})
    }
});

module.exports = router;