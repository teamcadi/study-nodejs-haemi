const{images} = require('../database/image.db')
const{users} = require('../database/user.db')
const router = require('express').Router();

router.use((req,res,next)=>{
    console.log('라우터 미들웨어 들렀다감');
    next();
})

router.get('/users', (req,res)=>{
    res.status(200).json(users);
})

router.get('/images', (req,res)=>{
    res.status(200).json(images);
})

module.exports = router;