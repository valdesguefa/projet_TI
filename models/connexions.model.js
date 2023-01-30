const sql = require("../services/db.js");

// constructor
const Connexion = function(customer) {
  this.position = customer.position;
  this.status = customer.status;
};

Connexion.create = (newCustomer, result) => {
  sql.query("INSERT INTO connexion SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created connexion: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Connexion.findById = (customerId, result) => {
  sql.query(`SELECT * FROM connexion WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found connexion: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Connexion.getAll = result => {
  sql.query("SELECT * FROM connexion", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("connexions: ", res);
    result(null, res);
  });
};

Connexion.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE connexion SET position = ?, status = ? WHERE id = ?",
    [customer.position, customer.status, id],
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

      console.log("updated connexion: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Connexion.remove = (id, result) => {
  sql.query("DELETE FROM connexion WHERE id = ?", id, (err, res) => {
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

    console.log("deleted connexion with id: ", id);
    result(null, res);
  });
};

Connexion.removeAll = result => {
  sql.query("DELETE FROM connexion", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} connexion`);
    result(null, res);
  });
};

module.exports = Connexion;
