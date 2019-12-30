const express = require('express'),
    dotEnv = require('dotenv');

// Load env
dotEnv.config({path: './config/config.env'});

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    err ? console.log('Error running server') : console.log(`Server running in ${process.env.NODE_ENVIRONMENT} mode on port: ${PORT}`)
});
