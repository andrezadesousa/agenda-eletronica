const model = require("../models/post");

const agendaController = {
  async show(req, res) {
    const user = await model.find();
    return res.json(user);
  },

  async createUser(req, res) {
    const user = await model.create(req.body);
    return res.json(user);
  },

  async listContact(req, res) {
    const user = await model.find();
    return res.json(user);
  },

  async addContact(req, res) {
    const user = await model.create(req.body);
    return res.json(user);
  },

  async updateContact(req, res) {
    const user = await model.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.json(user);
  },

  async deleteContact(req, res) {
    const user = await model.deleteOne({ _id: req.params.id });
    return res.json(user);
  },
};

module.exports = agendaController;
