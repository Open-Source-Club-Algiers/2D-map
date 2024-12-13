require('dotenv').config()
const express = require('express'); // Import Express
const app = express(); // Create an Express application
const facilityRouter = require('./routes/facility')

const mongoose = require('mongoose');



// Middleware to parse JSON requests (so the req can access the json body in req.body in the controllers)
app.use(express.json());

// Define the routes

//Facility router
app.use('/facility', facilityRouter);






// middleware to handle 404 errors (if the requested route doesn't exist)
app.use('/*', (req, res) => {
    res.status(404).send('Page not found');
});



// database connection mongodb in this case
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));




// Start the server on port 5000
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 5000'); // Log the server status
});
