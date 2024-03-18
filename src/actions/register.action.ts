"use server";

import { jsonParse } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongoose.lib";
import Users from "@/models/users";
import bcryptjs from "bcryptjs";

export const registerAction = async (payload: any) => {
  try {
    await MongooseClient();

    const { password } = payload;

    const salt = await bcryptjs.genSalt(10);

    const passwordHashed = await bcryptjs.hash(password, salt);

    const user = await Users.create({
      ...payload,
      password: passwordHashed,
    });

    return jsonParse({
      status: true,
      message: "Đăng ký thành công",
    });
  } catch (err: any) {
    console.log(err);
    if (err.code === 11000) return { status: false, message: "email đã tồn tại" };
    return { status: false, message: "Lỗi server" };
  }
};
