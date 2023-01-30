const sql = require("../services/db.js");

// constructor
const Salle = function(customer) {
  this.position = customer.position;
  this.name = customer.name;
  this.status = customer.status;
};

Salle.create = (newCustomer, result) => {
  sql.query("INSERT INTO salle SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created salle: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Salle.findById = (customerId, result) => {
  sql.query(`SELECT * FROM salle WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found salle: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Salle.getAll = result => {
  sql.query("SELECT * FROM salle", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("salles: ", res);
    result(null, res);
  });
};

Salle.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE salle SET position = ?, name = ?, status = ? WHERE id = ?",
    [customer.position, customer.name, customer.status, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated salle: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Salle.remove = (id, result) => {
  sql.query("DELETE FROM salle WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted salle with id: ", id);
    result(null, res);
  });
};

Salle.removeAll = result => {
  sql.query("DELETE FROM salle", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} salles`);
    result(null, res);
  });
};

module.exports = Salle;
