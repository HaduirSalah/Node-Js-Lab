// CRUD Operations

const Client = require("../models/client");
module.exports = {
  // Get all clients
  all(req, res, next) {
    const limit = parseInt(req.query.limit) || "";
    Client.find({})
      .limit(limit)
      .then((clients) => res.status(200).send(clients))
      .catch(next);
  },

  // Create a new client
  create_client(req, res, next) {
    const clientProps = req.body;
    //query mongoose
    Client.create(clientProps)
      .then((client) => res.status(201).send(client))
      .catch(next);
  },

  // Update a client by id
  edit(req, res, next) {
    const clientId = req.params.id;
    const clientProps = req.body;

    Client.findByIdAndUpdate({ _id: clientId }, clientProps)
      .then(() => Client.findById({ _id: clientId }))
      .then((client) => res.status(200).send(client))
      .catch(next);
  },

  // Get a client by id
  details(req, res, next) {
    const clientId = req.params.id;

    Client.findById({ _id: clientId })
      .then((client) => res.status(200).send(client))
      .catch(next);
  },

  // Delete a client by id
  delete(req, res, next) {
    const clientId = req.params.id;

    Client.findByIdAndRemove({ _id: clientId })
      .then(() => res.status(204).send("Client Deleted!"))
      .catch(next);
  },
};
