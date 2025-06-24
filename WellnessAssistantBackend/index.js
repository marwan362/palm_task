const express = require("express");
const app = express();
const PORT = 3000;
const wellnessRoutes = require("./routes/wellnessRoutes");

app.use(express.json());
app.use("/suggestions", wellnessRoutes);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
