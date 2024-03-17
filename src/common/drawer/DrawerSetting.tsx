import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ButtonToggleTheme from "../ButtonToggleTheme";

type TProps = {
  openDrawerSetting: boolean;
  onCloseDrawerSetting: Dispatch<SetStateAction<boolean>>;
};

export default function DrawerSetting({ openDrawerSetting, onCloseDrawerSetting }: TProps) {
  return (
    <Drawer
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "unset",
        },
        "& .MuiDrawer-paperAnchorRight": {
          boxShadow: "var(--mui-palette-boxShadow-1)",
          backdropFilter: "blur(20px)",
          backgroundImage: "none",
          width: "280px",
        },
      }}
      anchor={"right"}
      open={openDrawerSetting}
      onClose={() => {
        onCloseDrawerSetting(false);
      }}
    >
      <Box
        sx={{
          px: "16px",
          py: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.125rem",
            fontWeight: "700",
            fontFamily: "var(--font-publicSans)",
          }}
        >
          Settings
        </Typography>
      </Box>
      <Divider />

      <Stack
        sx={{
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          ml: "100px",
        }}
      >
        <ButtonToggleTheme type="dark" />
        <ButtonToggleTheme type="light" />
      </Stack>
    </Drawer>
  );
}
