const express = require("express");

const routes = express.Router();

const toDoController = require("./controllers/toDoController");

routes.get("/login", toDoController.show);
routes.post("/showId", toDoController.showId);
routes.post("/create", toDoController.create);
routes.put("/update", toDoController.update);
routes.delete("/delete", toDoController.delete);

module.exports = routes;
