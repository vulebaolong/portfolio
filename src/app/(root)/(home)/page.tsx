import { titleBase } from "@/app/layout";
import Home from "@/components/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `${titleBase} | Home`,
};

export default async function HomePage() {
    return <Home  />;
}
