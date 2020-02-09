const express = require('express');
const app = express();
const port = 3001;

const redis = require("redis");
const client = redis.createClient();


const {promisify} = require("util");
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github');
    console.log(JSON.parse(jobs).length);

    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from

    return res.send(jobs);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));