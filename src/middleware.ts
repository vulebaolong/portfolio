import { NextResponse, type NextRequest } from "next/server";
import { ROUTES } from "./contants/route.constant";
import { checkToken } from "./libs/auth.lib";
import { toast } from "react-toastify";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const arrPathProtect = [`/${ROUTES.DASHBOARD}`];

  if (arrPathProtect.includes(pathname)) {
    console.log("kiểm tra" + pathname);

    const user = await checkToken();
    console.log("user", user);
    if (!user) {
      toast.error("Chưa đăng nhập");
      console.log("chưa đăng nhập");
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|logo|manifest|_next/static|_next/image|favicon.ico).*)",
  ],
};
