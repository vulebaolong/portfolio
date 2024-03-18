import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Users = mongoose.models?.users || mongoose.model("users", usersSchema);

export default Users;
