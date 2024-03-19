"use client";

import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import IconSetting from "../icons/IconSetting";
import DrawerSetting from "../drawer/DrawerSetting";
import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/contants/route.constant";
import { useRouter } from "next/navigation";
import Logo from "../logo/Logo";

export default function Header() {
  const router = useRouter();
  const [openDrawerSetting, setOpenDrawerSetting] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <Box sx={{ position: "sticky", top: "0", zIndex: "1", height: "80px", backdropFilter: "blur(10px)" }} component={"header"}>
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
            <Logo />

            {/* RIGHT */}
            <Stack sx={{ flexDirection: "row", gap: "10px" }}>
              <Link href={`${ROUTES.HOME}`}>
                <Button variant="text">Home</Button>
              </Link>
              <Link href={`${ROUTES.AUTH.LOGIN}`}>
                <Button variant="text">Login</Button>
              </Link>
              <Link href={`${ROUTES.AUTH.REGISTER}`}>
                <Button variant="text">Register</Button>
              </Link>
              <Link href={`${ROUTES.DASHBOARD}`}>
                <Button variant="contained">
                  <Typography sx={{ fontWeight: "700" }}>Dashboard</Typography>
                </Button>
              </Link>

              <IconButton
                onClick={() => {
                  setOpenDrawerSetting(true);
                }}
                className="spin"
                color="primary"
              >
                <IconSetting />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <DrawerSetting openDrawerSetting={openDrawerSetting} onCloseDrawerSetting={setOpenDrawerSetting} />
    </>
  );
}
