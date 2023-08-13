import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Set EJS as template module, paths to templates
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Set middleware for static files
app.use(express.static(__dirname + '/static'));

//Definitions of paths for rendering htm
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ke-stazeni', (req, res) => {
    res.render('ke-stazeni');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
