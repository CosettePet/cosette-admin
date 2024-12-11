import { Fullscreen, LanguagesIcon, Search } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';

import AppProfile from '../AppProfile';
export default function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center justify-between gap-2 px-4">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center space-x-4">
          {/* 搜索 */}
          <Button variant="outline" size="icon">
            <Search />
          </Button>

          {/* 通知 */}
          <Button variant="outline" size="icon">
            <Fullscreen />
          </Button>

          {/* 全屏 */}
          <Button variant="outline" size="icon">
            <Fullscreen />
          </Button>

          {/* 语言切换 */}
          <Button variant="outline" size="icon">
            <LanguagesIcon />
          </Button>

          {/* 个人信息 */}
          <AppProfile />
        </div>
      </div>
    </header>
  );
}
