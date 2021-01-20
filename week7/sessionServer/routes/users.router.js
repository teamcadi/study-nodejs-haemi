const router = require('express').Router();


/**
 * @description 내정보조회
 * @routes GET/users/:id
 */
router.get('/:id', (req, res, next) => {
    if(req.session.isLogin){
        //내정보 로그인할 수 있는 로직
    }
    else{
        //로그아웃시킴(redirect)
    }
})

module.exports = router;