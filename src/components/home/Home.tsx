"use client";

import { Box } from "@mui/material";

export default function Home({ data }: { data: any }) {
  console.log(data);
  return (
    <div>
      Home
      <Box sx={{ width: "100%", height: "2000px" }}>123</Box>
    </div>
  );
}
