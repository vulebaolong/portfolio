import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.p
      style={{
        WebkitTextFillColor: "transparent",
        letterSpacing: "8px",
        fontWeight: "900",
        textAlign: "center",
        fontSize: "1rem",
        fontFamily: "var(--font-publicSans)",
        background:
          "-webkit-linear-gradient(300deg, rgb(0, 167, 111) 0%, rgb(255, 171, 0) 25%, rgb(0, 167, 111) 50%, rgb(255, 171, 0) 75%, rgb(0, 167, 111) 100%) 0% 0% / 400% text",
      }}
      animate={{
        backgroundPosition: ["0%", "190%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      BAOLONG
    </motion.p>
  );
}
