require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();

const port = process.env.PORT || 5000;
const mailServer = process.env.MAIL_SERVER;
const user = process.env.USER;
const pwd = process.env.PWD;
const toEmail = process.env.TO_EMAIL;

app.use('/v1', route);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const transporter = nodemailer.createTransport({
    port: 465,
    host: mailServer,
    auth: {
        user: user,
        pass: pwd,
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

route.post('/text-mail', (req, res) => {
    const {from, senderName, subject, text } = req.body;
    const mailData = {
        from: from,
        to: toEmail,
        subject: subject,
        text: 'Hey there,\nThis is a message from the contact form of your website:\n\n' + text + '\n\nBest regards,\n' + senderName,
        html: '<b>Hey there,</b><p>This is a message from the contact form of your website:</p><p>' + text + '</p><br>Best regards,<br/></n>' + senderName,
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});
