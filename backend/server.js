const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const challengeRoutes = require('./routes/challenges'); // Import challenge routes
const matchRoutes = require('./routes/matches');
const path = require('path');

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/software', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', authRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/matches', matchRoutes); // Use the match routes

// Serve the ongoing.html file
app.get('/ongoing', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'ongoing.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



