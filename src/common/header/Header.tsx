"use client";

import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import IconSetting from "../icons/IconSetting";
import DrawerSetting from "../drawer/DrawerSetting";
import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/contants/route.constant";

export default function Header() {
  const [openDrawerSetting, setOpenDrawerSetting] = useState(false);
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
              <Link href={`${ROUTES.HOME}`}>
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
              </Link>
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
