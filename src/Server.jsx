require("./Connection.jsx");
const path = require('path');
const express = require('express');

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
