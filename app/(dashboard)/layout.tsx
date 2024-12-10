import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="dashboard">
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset>
          <AppHeader />
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
