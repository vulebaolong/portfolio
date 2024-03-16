import mongoose from "mongoose";

export const jsonParse = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

export const isValidObjectId = (id: string): boolean => {
  const ObjectId = mongoose.Types.ObjectId;
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
    return false;
  }
  return false;
};
