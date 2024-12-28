const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./view/contactRoutes');
const cors = require('cors');
require('./database/db')
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});