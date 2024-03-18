// const handleLogin = async () => {
//   const payload = {
//     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QyNkBzcGxhYnMuaW5mbyIsImlhdCI6MTcxMDc1NjU4NSwiZXhwIjoxNzExMDE1Nzg1fQ.uODodUDFM_REOhL68fiRGVZPdSGZfaaB9-q-dttcjUw",
//   };

//   const result = await fetch("/api/session-oken", {
//     method: "POST",
//     body: JSON.stringify(payload),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log(result);

//   console.log(await result.json());
// };
export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res.token;
  let init = null;

  if (!sessionToken) {
    init = { status: 400 };
    return Response.json({ message: "không nhận được sessionToken" }, init);
  }

  init = {
    status: 200,
    headers: {
      "Set-Cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly`,
    },
  };
  return Response.json(res, init);
}
