module.exports = app => {
  const customers = require("../controllers/connexions.controller.js");

  // Create a new Customer
  app.post("/connexions", customers.create);

  // Retrieve all Customers
  app.get("/connexions", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/connexions/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/connexions/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/connexions/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/connexions", customers.deleteAll);
};
