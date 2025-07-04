import express from 'express'
import mysql from 'mysql2'

import {
    getFrontendAssets,
    errorHandler,
    getLocaleDataForFrontend,
    setupApplication
}
    from './src/api.mjs'

import setupLocalization from "./src/modules/locale/api.mjs";

import {isApiRequest, isAssetRequest} from "./src/api/request.mjs";
import {dbSequelize} from "./src/api/database.mjs";

const app = express()
setupApplication(app)


app.get('/testuser', async function (req, res) {
    res.json({
        user: req.user
    })
})
app.get('/testdb2', async function (req, res) {
    try {
        await dbSequelize.authenticate();
        res.send('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        res.send('Unable to connect to the database');
    }
})
app.get('/testdb', function (req, res) {

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
app.use((req, res) => {
    if(isAssetRequest(req) || isApiRequest(req)) {
        return res.status(404).send();
    }

    return res.render('react', {
        i18n: getLocaleDataForFrontend(req.i18n),
        frontendAssets: getFrontendAssets()
    });
})

app.use(errorHandler);
app.listen(3000, () => {
    console.log(`App listening on port 3000`)
})
