const Contact = require("../models/contact");
const BdMobileValidator = require("../middleware/validatormobile");

exports.index = (req, res) => {
  Contact.find((err, Contacts) => {
    if (err) return res.status(400).send({ error: err });

    res.status(200).send({ data: Contacts });
  });
};

exports.indexByMobile = (req, res) => {
  const match = {};
  if (req.query.mobilenumber) {
    match.mobilenumber = req.query.mobilenumber;
  }
  Contact.find(match, (err, Contacts) => {
    if (err) return res.status(400).send({ error: err });

    res.status(200).send({ data: Contacts });
  });
};

exports.new = (req, res) => {
  const result = BdMobileValidator.validMobile(req.body.mobilenumber);
  var contact = new Contact();
  contact.name = req.body.name;
  contact.mobilenumber = req.body.mobilenumber;
  if (result) {
    contact.save((err) => {
      if (err) {
        if (err.code === 11000)
          res.status(400).send({ error: "Duplicate key error" });
      } else {
        res.status(201).send({ data: contact });
      }
    });
  } else {
    res.status(400).send("Mobile Number is not valid");
  }
};

exports.update = (req, res) => {
  Contact.findOneAndUpdate(req.params.contact_id, req.body, (err, contact) => {
    if (err) return res.status(400).send({ error: err.codeName });

    res.status(200).send({ message: "Data updated successfully" });
  });
};

exports.delete = (req, res) => {
  Contact.findOneAndDelete(req.params.contact_id, (err, contact) => {
    if (err) return res.status(400).send({ error: err });

    res.status(200).send({ message: "Contact deleted successfully" });
  });
};
