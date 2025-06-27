import express from 'express'
import mysql from 'mysql2'
import axios from 'axios'
import fs from 'fs';
import twig from 'twig';
import { getFrontendAssets } from './src/api.mjs'


const app = express()

app.set('views', process.cwd() + '/src/views');
app.set('view engine', 'twig');
app.use(express.static('public'));
app.set("twig options", {

});
app.get('/test',async function(req, res) {
    const frontendAssets = getFrontendAssets();
    res.render('home', {
        frontendAssets
    });
})
app.get('/', function (req, res) {

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    })
    connection.connect(function (err) {
        if (err) {
            res.send('Db Error: ' + err.message + ' ' + err.code)
        } else {
            res.send('Db connected.')
        }
    })
})
app.listen(3000, () => {
    console.log(`App listening on port 3000`)
})
