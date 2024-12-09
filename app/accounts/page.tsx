import Login from '../../components/Login';
import Register from '../../components/Register';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs';
export default function Accounts() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">登陆</TabsTrigger>
        <TabsTrigger value="register">注册</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        {/* 登陆 */}
        <Login />
      </TabsContent>
      <TabsContent value="register">
        {/* 注册 */}
        <Register />
      </TabsContent>
    </Tabs>
  );
}
