const multer = require('multer');

// multer storage engine
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/tourCards')
    }, // err,dest
    filename: function (req, file1, callback) {
        callback(null, file1.originalname)
    }
});
var upload1 = multer({ storage: storage });

module.exports = upload1;
