import type { NextAuthConfig } from "next-auth";
import type { NextURL } from "next/dist/server/web/next-url";

export const authConfig: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request }: { auth: { user?: { role?: string } } | null; request: { nextUrl: NextURL } }) {
      const isLoggedIn = !!auth?.user;
      const nextUrl = request.nextUrl;

      const isPublicRoute = [
        "/",
        "/sign-in",
        "/sign-up",
        "/store",
        "/track-order",
        "/about",
        "/contact",
        "/landing-vibrant",
        "/favicon.ico",
        "/api/store",
        "/api/checkout",
        "/api/contact",
        "/api/auth",
      ].some(path => nextUrl.pathname.startsWith(path) || nextUrl.pathname === path);

      const isAdminRoute = nextUrl.pathname.startsWith("/admin");

      if (!isPublicRoute && !isLoggedIn) {
        return Response.redirect(new URL("/sign-in", nextUrl));
      }

      if (isAdminRoute && auth?.user?.role !== "SUPER_ADMIN") {
         return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
  },
};
