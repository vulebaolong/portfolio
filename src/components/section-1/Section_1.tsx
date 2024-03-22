"use client";

import { ROUTES } from "@/contants/route.constant";
import { checkClient } from "@/helpers/function.helper";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

let opacity: MotionValue<number> | 0 = 0;

export default function Section_1() {
  const { scrollY } = useScroll();
  const isClient = checkClient();
  const heightSection1 = isClient ? window.innerHeight - 100 : 80;

  const bottom = useTransform(scrollY, (value) => {
    return -(value / 2);
  });

  opacity = useTransform(scrollY, [0, heightSection1], [1, 0]);
  const skewX = useTransform(scrollY, [0, heightSection1], [-16, -30]);
  const skewY = useTransform(scrollY, [0, heightSection1], [4, 0]);

  return (
    <Box sx={{ height: "100vh", position: "relative", pt: "80px", overflow: "hidden" }}>
      <Container>
        <Stack
          sx={{
            flexDirection: "row",
          }}
        >
          <motion.div style={{ bottom, opacity, position: "relative", flexBasis: "50%", paddingTop: "100px", maxWidth: "50" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-publicSans)",
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
                fontFamily: "var(--font-barlow)",
                WebkitTextFillColor: "transparent",
                marginTop: "8px",
                marginBottom: "24px",
                lineHeight: "1",
                letterSpacing: "16px",
                fontWeight: "900",
                textAlign: "center",
                fontSize: "6rem",
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
                fontFamily: "var(--font-publicSans)",
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
          </motion.div>

          <Box style={{ flexBasis: "50%" }}>
            <motion.div
              style={{
                display: "flex",
                alignItems: "flex-start",
                height: "150%",
                position: "fixed",
                opacity,
                skewX,
                skewY,
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
              <Stack sx={{ position: "relative", width: "720px" }}>
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
            </motion.div>
          </Box>
        </Stack>
      </Container>

      <Box
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "var(--mui-palette-colors-3)",
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
          backgroundColor: "var(--mui-palette-colors-3)",
          opacity: "0.48",
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
          backgroundColor: "var(--mui-palette-colors-3)",
          opacity: "0.48",
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
          backgroundColor: "var(--mui-palette-colors-3)",
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
