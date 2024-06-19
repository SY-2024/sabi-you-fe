import {getToken} from "next-auth/jwt";
import {withAuth} from "next-auth/middleware";
import Cookies from "js-cookie";
import {NextResponse} from "next/server";

export default withAuth(
  async function middleware(req) {
    const user = Cookies.get("user");
    const userData = user ? JSON.parse(user) : "";
    const pathname = req.nextUrl.pathname;

    const isAuth = await getToken({req});
    const isLoginPage = pathname.startsWith("/login");
    const isSignupPage = pathname.startsWith("/register");
    const isForgotPage = pathname.startsWith("/forgot-password");
    const isResetPage = pathname.startsWith("/regireset-passwordster");

    const sensitiveRoutes = [
      "/dashboard",
      "/leaderboard",
      "/members",
      "/participants",
      "/quizzes",
    ];

    const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isLoginPage || isSignupPage || isForgotPage || isResetPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      return NextResponse.next();
    }

    if (!isAuth && isAccessingSensitiveRoute) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/login",
    "/forgot-password",
    "/reset-password",
    "/register",
    "/dashboard/:path*",
    "/leaderboard/:path*",
    "/members/:path*",
    "/participants/:path*",
    "/quizzes/:path*",
  ],
};
