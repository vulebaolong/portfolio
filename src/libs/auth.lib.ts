import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.TOKEN_SECRET;
const expires = process.env.TOKEN_EXPIRES;
const key = new TextEncoder().encode(secretKey);

export async function createToken(payload: any) {
  return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().sign(key);
}

export async function setToken(user: any) {
  const token = await createToken(user);
  // const oneDay = 24 * 60 * 60 * 1000;
  cookies().set("token", token, {
    expires: Date.now() + Number(expires),
  });
}

export const getToken = () => {
  const dataSessionToken = cookies().get("token");
  if (!dataSessionToken) return null;
  return dataSessionToken.value;
};

export async function checkToken(): Promise<any> {
  const token = getToken();
  if (!token) return null;

  const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });

  return payload;
}

export function deleteToken() {
  cookies().delete("token");
}
