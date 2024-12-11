import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from '@/components/ui/sidebar';

import AppSidebarContent from './AppSidebarContent';
import AppSidebarHeader from './AppSidebarHeader';

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* 侧边栏头 */}
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      {/* 侧边栏内容 */}
      <SidebarContent>
        <AppSidebarContent />
      </SidebarContent>
    </Sidebar>
  );
}
