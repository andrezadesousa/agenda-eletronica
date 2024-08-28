const ContactModel = require("../models/contact");
const UserModel = require("../models/user");

const agendaController = {
  async show(req, res) {
    const user = await model.find();
    return res.json(user);
  },

  async createUser(req, res) {
    try {
      const { email, password } = req.body;
      const newUser = await UserModel.create({ email, password });
      return res.json({
        newUser,
        message: "Usuário criado com sucesso!",
      });
    } catch (error) {
      console.log(error);
    }
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
