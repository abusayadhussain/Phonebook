const express = require("express");
const bodyParser = require("body-parser");

require("./db/connection");
const router = require("./router/router");

//Initialize express app
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);
//Initialize the sever
app.listen(port, () => {
  console.log("sever listening on port: ", port);
});
