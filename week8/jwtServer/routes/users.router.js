const { isLogin } = require('../middlewares/auth.middleware');
const router = require('express').Router();

router.length('/profile', isLogin , (req,res)=>{
    req.status(200).json({sussess: true, user: req.user});
});

module.exports = router;