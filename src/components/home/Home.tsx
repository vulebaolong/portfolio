import ButtonToggleTheme from "@/common/ButtonToggleTheme";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <div>
      Home
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
    </div>
  );
}
