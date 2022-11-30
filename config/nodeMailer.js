"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "baydaartravels1@gmail.com",
        pass: process.env.APP_PASS, // app password
    },
});

module.exports = transporter;