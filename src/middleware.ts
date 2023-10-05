import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { siteConfig } from "src/global/config";

const locales = ["en"];
const publicPages = ["/", "/signin", "/signup", "/lab", "/faq"];

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: siteConfig.locale,
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/signin",
    },
  }
);

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  const token = await getToken({ req });
  const isAuth = !!token;

  if (
    (req.nextUrl.pathname === "/signin" ||
      req.nextUrl.pathname === "/signup") &&
    isAuth
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isPublicPage) {
    return intlMiddleware(req);
  }
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
