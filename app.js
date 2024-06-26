import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import { transporter } from "./mailTransporter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Force HTTPS
//app.use((req, res, next) => {
//    if (req.headers['x-forwarded-proto'] !== 'https') {
//        res.redirect(`https://${req.headers.host}${req.url}`);
//    } else {
//        next();
//    }
//});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Set EJS as template module, paths to templates
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Set middleware for static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

//Definitions of paths for rendering EJS files
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Tábor Střelka' });
});

app.get('/ke-stazeni', (req, res) => {
    res.render('ke-stazeni', { pageTitle: 'Ke stažení' });
});

//Odeslání contact formu
/*
app.post('/send', (req, res) => {
    const { email, message, phone } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'taborstrelka@gmail.com',
        subject: 'Nová zpráva z webového formuláře',
        text: `E-mail od: ${email}\nTelefonní číslo odesílatele: ${phone}\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('E-mail byl odeslán: ' + info.response);
            res.redirect('/');
        }
    });
});
*/

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});
