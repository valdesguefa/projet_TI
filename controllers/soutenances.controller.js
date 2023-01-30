const Customer = require("../models/soutenances.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
   // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const customer = new Customer({
    id_user: req.body.id_user|1,
    theme: req.body.theme,
    id_salle:req.body.id_salle,
    president_jury:req.body.president_jury,
    name_souteneur:req.body.name_souteneur,
    heure_debut:req.body.heure_debut|new Date(),
    status: req.body.status|0
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Soutenance."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
 Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Soutenance."
      });
    else res.send(data);
  });  
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Soutenance with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Soutenance with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Soutenance with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Soutenance with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Customer.remove(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Soutenance with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Soutenance with id " + req.params.customerId
        });
      }
    } else res.send({ message: `Soutenance was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Customer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Soutenances."
      });
    else res.send({ message: `All Soutenances were deleted successfully!` });
  });
};
