const mongoose = require("mongoose");

// Connecting to DB
mongoose
  .connect("mongodb://localhost:27017/phonebook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });
