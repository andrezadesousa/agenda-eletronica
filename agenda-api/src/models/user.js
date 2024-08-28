const { Schema, model } = require("mongoose");

const UsersSchema = new Schema(
  {
    usuario: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    contacts: [],
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UsersSchema);
