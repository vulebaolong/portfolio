import { Box } from "@mui/material";
import Section_1 from "../section-1/Section_1";

export default function Home({ data }: { data: any }) {
  return (
    <>
      <Section_1 />
      <Box sx={{ width: "100%", height: "2000px" }}>123</Box>
    </>
  );
}
