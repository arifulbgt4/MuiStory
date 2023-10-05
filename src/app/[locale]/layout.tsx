import { Metadata } from "next";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

import { siteConfig } from "src/global/config";
import NextAuthProvider from "src/layouts/NextAuthProvider";
import ThemeContextProvider from "src/theme";

export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.creator,
  manifest: `${siteConfig.url}manifest.json`,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon-16x16.png",
    apple: "/apple-icon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.localeUpperSpace,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ArifulI60735491",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale?: string;
  };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <ThemeContextProvider>
        <body suppressHydrationWarning={true}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
