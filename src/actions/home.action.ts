"use server";

import { jsonParse } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongoose.lib";
import Users from "@/models/users";

export const getDataHome = async () => {
    try {
      await MongooseClient();
  
      const cusdata = await Users.find().limit(10);
  
      return jsonParse(cusdata);
    } catch (err) {
      console.log(err);
      return "Lỗi";
    }
  };