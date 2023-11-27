const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./src/routes/auth.routes')
const blogRouter = require('./src/routes/blog.routes')

app.use(bodyParser.json())

app.use('/v1/auth', authRouter)

app.use('/v1/blog', blogRouter)

app.listen(5000, () => {
    console.log('server running on port 5000');
})