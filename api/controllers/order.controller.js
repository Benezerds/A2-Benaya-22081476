const { where } = require("sequelize");
const db = require("../models");
const Order = db.orders;
const Customer = db.customers;
const Item = db.items;

// Create a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.order_date || !req.body.customer_id || !req.body.item_id) {
    return res.status(400).send({
      message: "Order date, customer_id, and item_id are required!",
    });
  }

  // Create an Order
  const order = {
    order_date: req.body.order_date,
    customer_id: req.body.customer_id,
    item_id: req.body.item_id,
  };

  // Save Order in the database
  Order.create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order.",
      });
    });
};

// Retrieve all Orders
exports.findAll = (req, res) => {
  Order.findAll({
    where: {
      customer_id: parseInt(req.params.customerId),
    },
    include: [
      {
        model: Customer,
        attributes: ["customer_name"],
      },
      {
        model: Item,
        attributes: ["item_name"],
      },
    ],
  })
    .then((data) => {
      // Map the data to include the customer_name and item_name
      const formattedData = data.map((order) => ({
        order_id: order.order_id,
        order_date: order.order_date,
        customer_name: order.customer.customer_name,
        item_name: order.item.item_name,
      }));
      res.send(formattedData);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving orders.",
      });
    });
};

// Update an Order by ID
exports.update = (req, res) => {
  const id = req.params.orderId;

  Order.update(req.body, {
    where: { order_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with id=" + id,
      });
    });
};

// Delete an Order by ID
exports.delete = (req, res) => {
  const id = req.params.orderId;

  Order.destroy({
    where: { order_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id,
      });
    });
};
