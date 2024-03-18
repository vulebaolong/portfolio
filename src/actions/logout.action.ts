"use server";

import { jsonParse } from "@/helpers/function.helper";
import { deleteToken } from "@/libs/auth.lib";

export const logoutAction = async () => {
  try {
    deleteToken();

    return jsonParse({
      status: true,
      message: "Đăn xuất thành công",
    });
  } catch (err: any) {
    console.log(err);
    return { status: false, message: "Lỗi server" };
  }
};
