import { getDataHome } from "@/actions/home.action";
import { titleBase } from "@/app/(root)/layout";
import Home from "@/components/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${titleBase} | Home`,
};

export default async function HomePage() {
  const data = await getDataHome();

  return <Home data={data} />;
}
