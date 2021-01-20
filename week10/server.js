const express = require('express'); //commonjs (import from)
const morgan = require('morgan');
const app = express();
require('dotenv').config(); //process.env.환경변수

// Application setting
app.set('PORT', process.env.PORT);

//Application middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Load router
app.use('/auth', require('./'))

app.listen(app.get('PORT'), (err)=>{
    if (err){
        console.log(err.message);
        process.exit(0);
    }
    else console.log('서버시작중');
});
