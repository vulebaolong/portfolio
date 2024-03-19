"use client";

import { ROUTES } from "@/contants/route.constant";
import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default function Section_1() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          flexBasis: "50%",
          px: "40px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "3rem",
            fontWeight: "800",
            lineHeight: "1.33333",
            textAlign: "center",
          }}
        >
          Front End - Back End
        </Typography>
        <motion.h1
          style={{
            WebkitTextFillColor: "transparent",
            marginBottom: "24px",
            marginTop: "8px",
            lineHeight: "1",
            letterSpacing: "8px",
            fontWeight: "900",
            textAlign: "center",
            fontSize: "6rem",
            fontFamily: "var(--font-publicSans)",
            background:
              "-webkit-linear-gradient(300deg, rgb(0, 167, 111) 0%, rgb(255, 171, 0) 25%, rgb(0, 167, 111) 50%, rgb(255, 171, 0) 75%, rgb(0, 167, 111) 100%) 0% 0% / 400% text",
          }}
          animate={{
            backgroundPosition: ["0%", "190%"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          BAOLONG
        </motion.h1>
        <Typography
          sx={{
            lineBeight: "1.57143",
            fontSize: "0.875rem",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          I&apos;m deeply passionate about coding, constantly striving to improve, and adept at creative problem-solving. Every day is a new opportunity to enhance my programming skills
          and create innovative solutions.
        </Typography>

        <Stack
          sx={{
            mt: "50px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Link href={`${ROUTES.AUTH.LOGIN}`}>
            <Button
              variant="outlined"
              sx={{
                height: "48px",
              }}
              startIcon={<DownloadRoundedIcon />}
            >
              <Typography sx={{ fontWeight: "700" }}>Download CV</Typography>
            </Button>
          </Link>
          <Link href={`${ROUTES.AUTH.REGISTER}`}>
            <Button
              variant="contained"
              sx={{
                height: "48px",
              }}
              startIcon={<DescriptionRoundedIcon />}
            >
              <Typography sx={{ fontWeight: "700" }}>My Project</Typography>
            </Button>
          </Link>
        </Stack>
      </Box>

      <Box
        sx={{
          flexBasis: "50%",
        }}
      ></Box>
    </Stack>
  );
}
