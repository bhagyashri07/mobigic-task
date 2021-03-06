'use strict';

const SingleFile = require("../model/singlefile");



const singleFileUpload = async (req, res, next) => {
    try {
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}




const getallSingleFiles = async (req, res, next) => {
    try {
        const files = await SingleFile.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(400).send(error.message);
    }

}







const deletesinglefile = async (req, res, next) => {
    try {
        // Find the file to be delete and delete it
        let file = await singlefile.findById(req.params.id);
        if (!file) { return res.status(404).send("Not Found") }



        file = await singlefile.findByIdAndDelete(req.params.id)
        res.json({ "Success": "file has been deleted", res: file });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

}

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

module.exports = {
    singleFileUpload,

    getallSingleFiles,

    deletesinglefile,
}