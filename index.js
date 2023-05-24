const express = require('express');
const app = express();
const PORT = 5000;

// Serve static files
app.use(express.static('public'));

// Render the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
