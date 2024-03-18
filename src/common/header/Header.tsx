"use client";

import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import IconSetting from "../icons/IconSetting";
import DrawerSetting from "../drawer/DrawerSetting";
import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/contants/route.constant";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [openDrawerSetting, setOpenDrawerSetting] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <Box sx={{ position: "sticky", top: "0", zIndex: "1", height: "80px", backdropFilter: "blur(4px)" }} component={"header"}>
        <Container sx={{ height: "100%" }}>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {/* LEFT */}
            <Typography>LOGO</Typography>

            {/* MID */}
            <Stack sx={{ flexDirection: "row", gap: "10px" }}>
              {/* <Link href={`${ROUTES.HOME}`}>
                <Button variant="contained">Home</Button>
              </Link>
              <Link href={`${ROUTES.AUTH.LOGIN}`}>
                <Button variant="contained">Login</Button>
              </Link>
              <Link href={`${ROUTES.AUTH.REGISTER}`}>
                <Button variant="contained">Register</Button>
              </Link>
              <Link href={`${ROUTES.DASHBOARD}`}>
                <Button variant="contained">Dashboard</Button>
              </Link> */}
              <Button
                onClick={() => {
                  handleNavigate(ROUTES.HOME);
                }}
                variant="contained"
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  handleNavigate(ROUTES.AUTH.LOGIN);
                }}
                variant="contained"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  handleNavigate(ROUTES.AUTH.REGISTER);
                }}
                variant="contained"
              >
                Register
              </Button>
              <Button
                onClick={() => {
                  handleNavigate(ROUTES.DASHBOARD);
                }}
                variant="contained"
              >
                Dashboard
              </Button>
            </Stack>

            {/* RIGHT */}
            <Box>
              <IconButton
                onClick={() => {
                  setOpenDrawerSetting(true);
                }}
                className="spin"
              >
                <IconSetting />
              </IconButton>
            </Box>
          </Stack>
        </Container>
      </Box>
      <DrawerSetting openDrawerSetting={openDrawerSetting} onCloseDrawerSetting={setOpenDrawerSetting} />
    </>
  );
}
