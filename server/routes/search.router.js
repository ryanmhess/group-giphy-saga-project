const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const router = express.Router();

const api_key = process.env.API_KEY;

router.get('/', (req, res) => {
    console.log('made it');
    console.log(req.query.searchVal);
    const searchValue = req.query.searchVal;
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchValue}`
    }).then(gifRes => {
        const gifObject = gifRes.data.data;
        res.send(gifObject);
    }).catch (error => {
        console.log('error related to server side', error);
        res.sendStatus(500);
    })
});

module.exports = router;
