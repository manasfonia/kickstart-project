const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3700;  // Use dynamic port for production
const projectData = require('./db.json');

// Middleware
app.use(cors());
app.use(express.json());  // Add body parsing middleware

// API Route
app.get('/getGridData', (req, res) => {
    try {
        res.json(projectData[1]);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Serve static files if applicable
// Uncomment and modify if you have any static files to serve (e.g., frontend assets)
// app.use(express.static(path.join(__dirname, 'public')));

// Default route (optional, if you want to show a page for root URL)
app.get('/', (req, res) => {
    res.send('Backend API is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
