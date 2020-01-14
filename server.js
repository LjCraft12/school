const express = require('express'),
    dotEnv = require('dotenv');
    colors = require('colors');

const bootCampRoutes = require('./routes/bootcamps-routes');

const morgan = require('morgan'),
    connectDb = require('./config/db');
// Load env
dotEnv.config({path: './config/config.env'});

// Connect to database
connectDb();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENVIRONMENT === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3000;

app.use('/api/v1/bootcamps', bootCampRoutes);

const server = app.listen(PORT, err => {
    err ? console.log('Error running server'.red.bold) : console.log(`Server running in ${process.env.NODE_ENVIRONMENT} mode on port: ${PORT}`.yellow.bold)
});

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    //Close server and exit
    server.close(() => process.exit(1));
});
