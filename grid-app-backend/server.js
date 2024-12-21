const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3700;
const projectData = require('./db.json')

app.use(cors());

app.get('/getGridData', (req, res) => {
    res.json(projectData[1]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
