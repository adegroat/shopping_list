const express = require('express');
const cors = require('cors');
const app = express();

const apiRoutes = require('./server/routes/api');

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});