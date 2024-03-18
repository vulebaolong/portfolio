"use client";

import { loginAction } from "@/actions/login.action";
import { ROUTES } from "@/contants/route.constant";
import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Login() {
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: "long@gmail.com",
      password: "123456",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("email không đúng định dạng").required("Vui lòng nhập email"),
      password: Yup.string().required("Vui lòng nhập password"),
    }),
    onSubmit: async (values: any) => {
      console.log(values);

      const result = await loginAction(values);

      console.log(result);

      if (result.status) {
        router.push(ROUTES.DASHBOARD);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    },
  });
  return (
    <div>
      <Stack gap={5} maxWidth={"500px"} component={"form"} onSubmit={loginForm.handleSubmit}>
        <TextField name="email" onChange={loginForm.handleChange} value={loginForm.values.email} label="email" variant="outlined" />
        <TextField name="password" onChange={loginForm.handleChange} value={loginForm.values.password} label="passwork" variant="outlined" />
        <Button type="submit">Login</Button>
      </Stack>
    </div>
  );
}
