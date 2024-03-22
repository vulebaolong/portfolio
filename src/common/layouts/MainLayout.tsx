import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

type TProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: TProps) {
  return (
    <div
      style={{
        background: "rgb(32 38 46)",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main
        style={{
          background: "linear-gradient(var(--mui-palette-colors-4)) center center / cover no-repeat, url('/images/home/overlay_3.jpg')",
          backgroundPosition: "center center",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
