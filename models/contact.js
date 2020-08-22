const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: Number,
    required: true,
  },
});
//Creating the collection Address
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
