const db = require("../models");
const Companies = db.companies;
const Contacts = db.contacts;
const Op = db.Sequelize.Op;

// Create company
exports.create = (req, res) => {
  const company = {
    company_name: req.body.company_name,
    company_address: req.body.company_address,
    contactId: parseInt(req.params.contactId),
  };

  Companies.create(company)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
};

// Get all companies
exports.findAll = (req, res) => {
  Companies.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
};

// Get one company by id
exports.findOne = (req, res) => {
  const id = req.params.company_id;

  Contacts.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Company data with id=" + id,
      });
    });
};

// Update one company by id
exports.update = (req, res) => {
  const id = req.params.companyId;

  Companies.update(req.body, {
    where: { company_id: id, contactId: req.params.contactId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Company data was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Company`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Company data with id=" + id,
      });
    });
};

// Delete one company data by id
exports.delete = (req, res) => {
  const id = parseInt(req.params.companyId);

  Companies.destroy({
    where: { company_id: id },
  }).then((num) => {
    Contacts.destroy({
      where: { id : id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Company was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Company`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Company data with id=" + id,
        });
      });
  });
};
