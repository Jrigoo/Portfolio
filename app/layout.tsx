import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Poppins, Nanum_Pen_Script, Fira_Mono } from "next/font/google";

const nanum = Nanum_Pen_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-nanum",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const fira_mono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fira-mono",
});

config.autoAddCss = false;

export const metadata = {
  title: "Juan Riquelme - Portfolio",
  description: "Software Engineer and Data Enthusiast",
  keywords:
    "web development, data analysis, next js, full stack development, html,css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${nanum.variable} ${fira_mono.variable} font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
