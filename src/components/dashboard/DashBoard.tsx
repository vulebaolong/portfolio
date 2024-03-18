"use client";

import { logoutAction } from "@/actions/logout.action";
import { ROUTES } from "@/contants/route.constant";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashBoard() {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logoutAction();
    if (result.status) router.push(ROUTES.HOME);
  };
  return (
    <div>
      DashBoard
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
