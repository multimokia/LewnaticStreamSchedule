import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import "pure-react-carousel/dist/react-carousel.es.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lewn_atic Stream Schedule",
  description: "A streaming schedule for @lewn_atic on Twitch.tv",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
