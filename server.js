const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express(); // <--- Correct place

app.use(cors());
app.use(express.static('public'));

app.get('/api/matches', async (req, res) => {
  try {
    const response = await axios.get('https://www.balldontlie.io/api/v1/games?per_page=10');
    res.json(response.data.data); // Only the match array
  } catch (error) {
    console.error('Error fetching matches:', error.message); // Helpful debug
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

