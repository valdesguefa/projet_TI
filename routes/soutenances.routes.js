module.exports = app => {
  const customers = require("../controllers/soutenances.controller.js");

  // Create a new Customer
  app.post("/soutenances", customers.create);

  // Retrieve all Customers
  app.get("/soutenances", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/soutenances/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/soutenances/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/soutenances/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/soutenances", customers.deleteAll);
};
