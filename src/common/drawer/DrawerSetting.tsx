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
          gap: "24px",
          padding: "24px",
        }}
      >
        <Box>
          <Typography
            sx={{
              margin: "0px 0px 12px",
              fontSize: "0.75rem",
              color: "rgb(99, 115, 129)",
              fontWeight: "600",
            }}
          >
            Mode
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <ButtonToggleTheme type="dark" />
            <ButtonToggleTheme type="light" />
          </Stack>
        </Box>

        <Box>
          <Typography
            sx={{
              margin: "0px 0px 12px",
              fontSize: "0.75rem",
              color: "rgb(99, 115, 129)",
              fontWeight: "600",
            }}
          >
            Mode
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <ButtonToggleTheme type="dark" />
            <ButtonToggleTheme type="light" />
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  );
}
