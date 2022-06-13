'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, 
     getallSingleFiles, deletesinglefile} = require('../controller/fileuploaderController');
    

    
  //  const Auth=require("../middleware/auth")
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);

router.get('/getSingleFiles', getallSingleFiles);

router.delete('/delete/:id', deletesinglefile);



module.exports = {
    routes: router
}