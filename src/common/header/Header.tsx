"use client";

import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import IconSetting from "../icons/IconSetting";
import DrawerSetting from "../drawer/DrawerSetting";
import { useState } from "react";

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
