const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const contactRoutes = require('./view/contactRoutes');
require('./database/db');
const app = express();

// Middleware
app.use(bodyParser.json());

// Use environment variable for CORS origin
const allowedOrigin = process.env.FRONTEND_URL || "https://sanny-ranjan-singh.github.io/portfolio/";

app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST'], // Specify allowed methods as an array
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers as an array
}));

// Routes
app.use('/api/contact', contactRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "An unexpected error occurred." });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
