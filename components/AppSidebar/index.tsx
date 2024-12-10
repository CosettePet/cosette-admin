import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from '@/components/ui/sidebar';

import AppSidebarContent from './AppSidebarContent';
import AppSidebarHeader from './AppSidebarHeader';

export default function AppSidebar() {
  return (
    <Sidebar>
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
