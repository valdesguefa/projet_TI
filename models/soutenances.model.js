const sql = require("../services/db.js");

// constructor
const Soutenance = function(customer) {
  this.id_user = customer.id_user;
  this.theme = customer.theme;
  this.id_salle = customer.id_salle;
  this.name_souteneur = customer.name_souteneur;
  this.president_jury = customer.president_jury;
  this.heure_debut = customer.heure_debut;
  this.status = customer.status;
//1 si c'est en cours - 0 si fini  -  2 si reportee

};

Soutenance.create = (newCustomer, result) => {
  sql.query("INSERT INTO soutenance SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created soutenance: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Soutenance.findById = (customerId, result) => {
  sql.query(`SELECT * FROM soutenance WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found soutenance: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Soutenance.getAll = result => {
  sql.query("SELECT * FROM soutenance", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("soutenance: ", res);
    result(null, res);
  });
};

Soutenance.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE soutenance SET theme = ?, name_souteneur = ?, status = ?, heure_debut = ?, president_jury = ? WHERE id = ?",
    [customer.theme, customer.name_souteneur, customer.status, customer.heure_debut, customer.president_jury, id],
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

      console.log("updated soutenance: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Soutenance.remove = (id, result) => {
  sql.query("DELETE FROM soutenance WHERE id = ?", id, (err, res) => {
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

    console.log("deleted soutenance with id: ", id);
    result(null, res);
  });
};

Soutenance.removeAll = result => {
  sql.query("DELETE FROM soutenance", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} soutenance`);
    result(null, res);
  });
};

module.exports = Soutenance;
