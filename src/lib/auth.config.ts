import type { NextAuthConfig } from "next-auth";

/**
 * Edge-compatible auth config (no Prisma / bcrypt imports) so it can be
 * used from `src/middleware.ts`. The full config in `src/lib/auth.ts`
 * extends this with the Credentials provider and Prisma adapter.
 */
export const authConfig = {
  trustHost: true,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      const isOnAuthPage =
        request.nextUrl.pathname.startsWith("/login") ||
        request.nextUrl.pathname.startsWith("/signup");

      if (isOnDashboard) {
        return isLoggedIn;
      }
      if (isOnAuthPage && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token.id && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
