import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
export default function AppProfile() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 focus:outline-none">
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>Admin</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
          <DropdownMenuItem>个人中心</DropdownMenuItem>
          <DropdownMenuItem>修改密码</DropdownMenuItem>
          <DropdownMenuItem>退出系统</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
