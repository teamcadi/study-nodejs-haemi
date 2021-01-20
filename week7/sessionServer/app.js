const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session)
const app = express();

const SECRET = 'HAM';

//load middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(
    session({
        store: new FileStore(),
        secret: SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000*60,
            secure: false,
            httpOnly: true,
        },
    }),
);

//Load router
app.use('/auth', require('./routes/auth.router'));
app.use('/users', require('./routes/users.router'));

//없는경로
app.use((req, res) =>{
    res.status(404).json({ success: false, message: '없는경로' });
});

//error handling
app.use((err, req, res, next) => {
    //nest(err)
    res.status(500).json({ success:true, message: err.message});
});

app.listen(9000, err => {
    if (err) console.error(err.message);
    else console.log('server start');
});