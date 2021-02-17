// Adding dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const dotent = require('dotenv');
const { request } = require('express');
dotenv.config();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}))

// Create
app.post('/insert', (request, response) => {
    
})

// Read
app.get('/getAll', (request, response) => {
    response.json({
        success: true
    });
});

// Update


// Delete
app.listen(process.env.PORT, () => console.log('its working'))