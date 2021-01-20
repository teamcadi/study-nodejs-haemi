const { images } = require('../database/image.db');
const { getUserByEmail } = require('../database/user.db');
const { upload } = require('../utils/multer.utils');
const router = require('express').Router();

/**
 * @description 이미지 등록
 * @route POST /images
 * @request @body {email}
 */
router.post('/', upload.single('img') , (req,res)=> {

    const{email} = req.body;
    const id = images[images.length-1].id + 1;
    const path = req.file.destination + '/' + req.file.filename;
    const userId = getUserByEmail(email)
    images.push({id, path, userId})
    res.status(201).json({success:true, message:'업로드성공'})
})

module.exports = router;