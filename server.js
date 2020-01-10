const express = require('express'),
    dotEnv = require('dotenv');

const bootCampRoutes = require('./routes/bootcamps-routes');

const morgan = require('morgan');

// Load env
dotEnv.config({path: './config/config.env'});

const app = express();

// Dev logging middleware
if (process.env.NODE_ENVIRONMENT === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3000;

app.use('/api/v1/bootcamps', bootCampRoutes);

app.listen(PORT, err => {
    err ? console.log('Error running server') : console.log(`Server running in ${process.env.NODE_ENVIRONMENT} mode on port: ${PORT}`)
});
