const express = require("express");

const routes = express.Router();

const agendaController = require("./controllers/agendaController");

routes.get("/login", agendaController.show);
routes.post("/createUser", agendaController.createUser);

routes.get("/listContacts", agendaController.listContact);
routes.get("/addContact", agendaController.addContact);
routes.put("/updateContact", agendaController.updateContact);
routes.delete("/deleteContact", agendaController.deleteContact);

module.exports = routes;
