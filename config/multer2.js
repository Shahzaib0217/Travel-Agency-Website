const multer = require('multer');

// multer storage engine
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/tourBanners')
    }, // err,dest
    filename: function (req, file2, callback) {
        callback(null, file2.originalname)
    }
});
var upload2 = multer({ storage: storage });

module.exports = upload2;
