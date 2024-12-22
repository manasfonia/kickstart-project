const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3700; 
const projectData = require('./db.json');

app.use(cors());
app.use(express.json()); 

app.get('/getGridData', (req, res) => {
    try {
        const filteredData = projectData.map(project => ({
            "s.no": project["s.no"]+1,
            "amt.pledged": project["amt.pledged"],
            "percentage.funded": project["percentage.funded"]
        }));

        res.json(filteredData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send('Backend API is working!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
