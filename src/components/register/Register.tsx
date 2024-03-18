"use client";

import { registerAction } from "@/actions/register.action";
import { ROUTES } from "@/contants/route.constant";
import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Register() {
  const router = useRouter();

  const registerForm = useFormik({
    initialValues: {
      name: "long",
      email: "long@gmail.com",
      password: "123456",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập name"),
      email: Yup.string().email("email không đúng định dạng").required("Vui lòng nhập email"),
      password: Yup.string().required("Vui lòng nhập password"),
    }),
    onSubmit: async (values: any) => {
      console.log(values);

      const result = await registerAction(values);

      if (result.status) {
        router.push(ROUTES.AUTH.LOGIN);
      } else {
        toast.error(result.message);
      }
    },
  });
  return (
    <div>
      <Stack gap={5} maxWidth={"500px"} component={"form"} onSubmit={registerForm.handleSubmit}>
        <TextField name="name" onChange={registerForm.handleChange} value={registerForm.values.name} label="name" variant="outlined" />
        <TextField name="email" onChange={registerForm.handleChange} value={registerForm.values.email} label="email" variant="outlined" />
        <TextField name="password" onChange={registerForm.handleChange} value={registerForm.values.password} label="passwork" variant="outlined" />
        <Button type="submit">Register</Button>
      </Stack>
    </div>
  );
}
