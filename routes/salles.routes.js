module.exports = app => {
  const customers = require("../controllers/salles.controller.js");

  // Create a new Customer
  app.post("/salles", customers.create);

  // Retrieve all Customers
  app.get("/salles", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/salles/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/salles/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/salles/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/salles", customers.deleteAll);
};
