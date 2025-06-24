const express = require('express');
const app = express();
const PORT = 3000;
const wellnessRoutes = require('./routes/wellnessRoutes');
const cors = require('cors');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cors());

app.use(express.json());
app.use('/api/wellness', wellnessRoutes);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
