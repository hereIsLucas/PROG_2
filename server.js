const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware für JSON-Daten
app.use(express.json());

// Routen für API-Endpunkte hinzufügen
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});