import mongoose from "mongoose";


const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  profession: { type: String, required: true },
});

const Customer = mongoose.models?.Customer || mongoose.model("Customer", customerSchema);

export default Customer;
