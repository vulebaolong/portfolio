"use server";

import { jsonParse } from "@/helpers/function.helper";
import { setToken } from "@/libs/auth.lib";
import MongooseClient from "@/libs/mongoose.lib";
import Users from "@/models/users";
import bcryptjs from "bcryptjs";

export const loginAction = async (payload: any) => {
  try {
    await MongooseClient();

    const { email, password } = payload;

    const user = await Users.findOne({ email: email });
    if (user === null) {
      return jsonParse({
        status: false,
        message: "User không tồn tại",
      });
    }

    const isPassword = await bcryptjs.compare(password, user.password);
    if (!isPassword) {
      return jsonParse({
        status: false,
        message: "Mật khẩu không đúng",
      });
    }

    await setToken(user._id.toString());

    return jsonParse({
      status: true,
      message: "Đăng nhập thành công",
    });
  } catch (err: any) {
    console.log(err);
    return { status: false, message: "Lỗi server" };
  }
};
