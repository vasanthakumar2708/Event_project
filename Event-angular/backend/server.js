const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log(err));

// Define a sample route
app.get('/', (req, res) => {
  res.send('Backend is working');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
