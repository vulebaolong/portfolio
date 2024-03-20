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
      <main>{children}</main>
      <Footer />
    </div>
  );
}
