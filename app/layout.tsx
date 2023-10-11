import "./globals.css";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
  title: "Portfolio",
  description: "Software Engineer and Data Enthusiast",
  keywords:
    "web development, data analysis, next js, full stack development, html,css",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
