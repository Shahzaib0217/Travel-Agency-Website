const multer = require('multer');

// multer storage engine
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images')
    }, // err,dest
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});
var upload = multer({ storage: storage });

module.exports = upload;
