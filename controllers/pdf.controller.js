var pdf = require('html-pdf');
var options = { format: 'Letter' };
const email = require('../config/nodeMailer');

exports.convertpdf = (req, res, err, html) => {
    pdf.create(html, options).toFile('./public/uploads/orderReceipt.pdf', function (err, result) {
        if (err) return console.log(err);
        console.log(result); // result gives file name and path
        // Sending Email
        email.sendMail({
            from: "baydaartravels1@gmail.com", // sender address
            to: req.session.userEmail, // can also be a list of receivers
            subject: "Receipt of your order", // Subject line
            text: "Hello ✔ user from Baydaar Travels", // plain text body
            attachments: [
                {   // file on disk as an attachment  
                    filename: 'orderReceipt.pdf',
                    path: './public/uploads/orderReceipt.pdf' // stream this file
                }]
        });
        console.log('Email sent')
    });
}
