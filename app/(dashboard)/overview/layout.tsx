import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '(珂赛特)后台管理系统｜概览',
};

export default function OverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="dashboard">{children}</main>;
}
