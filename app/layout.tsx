import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider"
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "宠爱到家",
  description: "宠爱到家（www.wanlum.com）,一个有爱、有趣又有用的宠物网站。为广大爱宠网友提供养宠知识,宠物故事,宠物趣味,宠物百科,宠物大全,宠物医疗,宠物美图,宠物养护,宠物美容,宠物训练,疾病导航等全方面养宠知识信息。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
