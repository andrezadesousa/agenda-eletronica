import { Schema, model } from "mongoose";

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

export default model("User", UsersSchema);
