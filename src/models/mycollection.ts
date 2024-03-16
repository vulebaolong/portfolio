import mongoose from "mongoose";

const myCollectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
});
console.log(mongoose.models);

const MyCollection = mongoose.models?.mycollection || mongoose.model("mycollection", myCollectionSchema);

export default MyCollection;
  
