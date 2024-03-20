"use client";

import { ROUTES } from "@/contants/route.constant";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default function Section_1() {
  return (
    <Box sx={{ height: "calc(100vh - 80px)", position: "relative" }}>
      <Container>
        <Stack
          sx={{
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              flexBasis: "50%",
              pt: "100px",
              maxWidth: "50%",
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
                px: "50px",
              }}
            >
              I&apos;m deeply passionate about coding, constantly striving to improve, and adept at creative problem-solving. Every day is a new opportunity to enhance my
              programming skills and create innovative solutions.
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
          >
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "flex-start",
                height: "150%",
                position: "absolute",
                opacity: 1,
                transform: "skew(-16deg, 4deg)",
              }}
            >
              <Stack sx={{ position: "relative", width: "344px" }}>
                <motion.img
                  style={{
                    position: "absolute",
                    maxWidth: "100%",
                    display: "inline-block",
                    verticalAlign: "bottom",
                  }}
                  animate={{
                    translateY: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 200,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  src="/images/home/dark_1.webp"
                />
                <motion.img
                  style={{
                    position: "absolute",
                    maxWidth: "100%",
                    display: "inline-block",
                    verticalAlign: "bottom",
                  }}
                  animate={{
                    translateY: ["-100%", "0%"],
                  }}
                  transition={{
                    duration: 200,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  src="/images/home/dark_1.webp"
                />
              </Stack>
              <Stack sx={{ position: "relative", width: "344px" }}>
                <motion.img
                  style={{
                    position: "absolute",
                    maxWidth: "100%",
                    display: "inline-block",
                    verticalAlign: "bottom",
                  }}
                  animate={{
                    translateY: ["100%", "0%"],
                  }}
                  transition={{
                    duration: 200,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  src="/images/home/dark_2.webp"
                />
                <motion.img
                  style={{
                    position: "absolute",
                    maxWidth: "100%",
                    display: "inline-block",
                    verticalAlign: "bottom",
                  }}
                  animate={{
                    translateY: ["-0%", "-100%"],
                  }}
                  transition={{
                    duration: 200,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  src="/images/home/dark_2.webp"
                />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>

      <Box
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgb(22, 28, 36)",
          bottom: "-5px",
          height: "80px",
          width: "50%",
          position: "absolute",
          clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
          left: "0px",
        }}
      />
      <Box
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(22, 28, 36, 0.48)",
          bottom: "-5px",
          height: "80px",
          width: "50%",
          position: "absolute",
          clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
          right: "0px",
          transform: "scaleX(-1)",
        }}
      />
      <Box
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(22, 28, 36, 0.48)",
          bottom: "-5px",
          width: "50%",
          position: "absolute",
          clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
          right: "0px",
          transform: "scaleX(-1)",
          height: "48px",
        }}
      />
      <Box
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgb(22, 28, 36)",
          bottom: "-10px",
          width: "50%",
          position: "absolute",
          clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
          right: "0px",
          transform: "scaleX(-1)",
          height: "24px",
        }}
      />
    </Box>
  );
}
