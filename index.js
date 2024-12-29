const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const contactRoutes = require('./view/contactRoutes');
require('./database/db');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: "https://sanny-ranjan-singh.github.io/portfolio/", // Your frontend URL
  methods: ['GET', 'POST'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow cookies if needed
}));

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
