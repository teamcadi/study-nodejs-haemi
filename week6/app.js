const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
const { upload } = require ('./utils/multer.util');


//application middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//multer setting
const multerOption = {
    storage: multer.diskStorage({
        destination:(req, file, cb)=>{
            console.log('dest');
            //...
            req.custom = 1;
            cb(null, 'upload/');
        },
        filename:(req, file, cb)=>{
            console.log('filename');
            console.log(req.custom);
            cb(null, file.originalname);
        },
    }),
    limits: {fileSize: 20*1024*1024},
};
//const upload = multer(multerOption);

//router - 과제 !!!!!!!!!!! 여러파일올리기 
app.post('/single', upload.single('haemi-file'),(req, res, next) => {
        res.status(201).json(req.file);
    });

app.post('/', upload.single('haemi-files', 4),(req, res, next) => {
         res.status(201).json(req.file);
    });

// port binding
app.listen(9000, ()=>{
    console.log('server start');
});