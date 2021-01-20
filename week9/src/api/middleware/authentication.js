const {verify} = require('jsonwebtoken');

const authentication = {
    verify : (req, res, next) => {
      const bearerToken = req.headers.Authorization;
      if (!bearerToken) {
        res.status(403).json({success: false, message: '로그인필요'});
      }
      else{
        const auth = bearerToken.split(' '); 
        if (auth[0] === 'Bearer' && auth[0] === 'Token'){
          req.user = verify(auth[1], process.env.JWT_SECRET);
          next();
      }
      else res.status(401).json({success:false, message:'권한없음'});
    }
  },
};

module.exports = authentication;