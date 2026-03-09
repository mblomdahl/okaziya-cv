import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import React from "react";
import { SITE_INFO } from "../config";

import { ReactNode } from "react";
import StyledComponentsRegistry from "../lib/registry";
import ThemeWrapper from "../components/ThemeWrapper";
import { nunitoSans } from "../styles/fonts";
import { Locale } from "../types";

export const metadata = {
  title: SITE_INFO.title,
  description: SITE_INFO.description,
  icons: {
    icon: `/cv/favicon.ico`,
  },
  alternates: {
    languages: {
      en: "https://okaziya.github.io/cv/en",
      sv: "https://okaziya.github.io/cv/sv",
    },
  },
};

export default function RootLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  return (
    <html lang={params.locale}>
      <Script defer src="https://cloud.umami.is/script.js" data-website-id="24a69cac-c400-483f-a3d1-be3527ddc341" />
      <body className={nunitoSans.className}>
        <StyledComponentsRegistry>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
