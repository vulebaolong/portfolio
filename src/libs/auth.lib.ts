import { cookies } from "next/headers";

const expires = process.env.TOKEN_EXPIRES;

export async function setToken(userId: string) {
  cookies().set("token", userId, {
    expires: Date.now() + Number(expires),
  });
}

export const getToken = async () => {
  const sessionUserId = cookies().get("token");
  if (!sessionUserId) return null;
  return sessionUserId.value;
};

export function deleteToken() {
  cookies().delete("token");
}
