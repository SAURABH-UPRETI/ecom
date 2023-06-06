const express = require("express");
require("./Connection");
const path = require("path");

const bodyParser = require("body-parser");
const app = express();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
