import { Box } from "@mui/material";
import Section_1 from "../section-1/Section_1";

export default function Home({ data }: { data: any }) {
  return (
    <>
      <Section_1 />

      <Box sx={{ width: "100%", height: "2000px", backgroundColor: "rgb(22, 28, 36)", position: "relative" }}>123</Box>
    </>
  );
}
