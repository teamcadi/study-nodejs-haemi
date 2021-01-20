const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/jwt.config')

const authMiddleware = {
    isLogin: (req, res, next)=>{
        //1. 토큰이 있는지 없는지 validator
        //2. 헤더에서 토큰 값 가져오기
        const token = req.headers.authorization.split(' ')[1];
        if (!token) res.status(401).json({success: false, message: '토큰없음'});
        else{
            //3. 토큰해독하기
            const payload = jwt.verify(token, secretKey);
            console.log(payload);
            //4. DB에서 user 검색
            const user = users.find(user => user.id == payload.userId);
            if(!user){
                res.status(401).json({success: false, message: 'user없음'});
            }
            else{
                //5. 다음 미들웨어에서 유저 사용할수있게 함
                req.user = user;
                next();
            }
        }



        
    },
};

module.exports = authMiddleware;