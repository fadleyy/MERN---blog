const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authrouter = require('./src/routes/auth.routes')

app.use(bodyParser.json())

app.use('/v1/auth', authrouter)

app.listen(5000, () => {
    console.log('server running on port 5000');
})