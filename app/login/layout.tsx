
import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "宠爱到家｜登录",
  description: "宠爱到家（www.wanlum.com）,一个有爱、有趣又有用的宠物网站。为广大爱宠网友提供养宠知识,宠物故事,宠物趣味,宠物百科,宠物大全,宠物医疗,宠物美图,宠物养护,宠物美容,宠物训练,疾病导航等全方面养宠知识信息。",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
