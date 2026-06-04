import { DM_Sans, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
