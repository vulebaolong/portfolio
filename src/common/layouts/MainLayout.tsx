import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

type TProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: TProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
