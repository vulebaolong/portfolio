import { getDataHome } from "@/actions/home.action";
import Home from "@/components/home/Home";
import { TITLE_BASE } from "@/contants/app.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${TITLE_BASE} | Home`,
};

export default async function HomePage() {
  const data = await getDataHome();
 

  return <Home data={data} />;
}
