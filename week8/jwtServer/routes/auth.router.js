const users = require('../database/users');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/jwt.config')

router.post('/login', async(req,res)=>{
    const {email, password} = req.body;
    // 1. 이메일로 유저가 있는지 SELECT
    const user = users.find(user => user.email == email);
    if (!user){
         // 1-1. 실패시 400 에러 주기
         res.status(404).json({success: true, message: '이메일없음'});
    }
    else{
    // 2. 비밀번호 비교하기
    }
    if(await bcrypt.compare(password, user.password)){
        // 2-1. 토큰만들기 access token
        const token = jwt.sign({userId: user.id}, secretKey);
        // 3. 로그인 성공 응답하기 201 (token 넘겨주기)
        res.status(201).json({success: true, message:'로그인성공', token});
    }
    else{
    // 2-2. 실패했다면 403
    res.status(403).json({success: false, message: ' 비번틀림'});
    
    }
});


router.post('/register', async(req,res)=>{
    const{ email, password} = req.body;
    // 1. 데이터베이스에 이메일 있는지 확인
    const user = users.find(user => user.email == email);
    if (user){
        res.status(403).json({success:false, message: '이미가입함'})
    }
    else{
        // 2. 비밀번호 암호화 -> crypto, bcrypt, argon2
        const salt = await bcrypt.genSalt(10);
        const hashPW = await bcrypt.hash(password, salt);
        // 3. 기존 이메일과 암호화된 비밀번호를 INSERT
        users.push({id: users[users.length-1].id+1, email, password: hashPW});
        // 4. 회원가입성공 응답 201 (login 페이지로 redirect)
        res.status(201).json({success:true, message: '가입성공'});
    }
});

module.exports = router;