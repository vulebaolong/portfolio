"use client";

import { Button, useColorScheme } from "@mui/material";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

export default function ButtonToggleTheme({ type }: { type: "dark" | "light" }) {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "108px",
        height: "80px",
        border: "1px solid rgba(145, 158, 171, 0.08)",
        backgroundColor: `${mode === type ? "var(--mui-palette-colors-2)" : "transparent"}`,
        boxShadow: `${mode === type ? "rgba(0, 0, 0, 0.08) -24px 8px 24px -4px" : "unset"}`,
      }}
      onClick={() => {
        setMode(type);
      }}
    >
      {type === "light" ? <IconSun mode={mode} /> : <IconMoon mode={mode} />}
    </Button>
  );
}
