import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
const UserAuthForm = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">账户登陆</TabsTrigger>
        <TabsTrigger value="mobile">手机登陆</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            {/* <CardTitle>登陆</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">账号</Label>
              <Input id="username" type="text" defaultValue="" placeholder="请输入您的账号" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">密码</Label>
              <Input id="password" type="password" defaultValue="" placeholder="请输入您的密码" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>登陆</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="mobile">
        <Card>
          <CardHeader>
            {/* <CardTitle>注册</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="mobile">手机号</Label>
              <Input id="mobile" type="text" placeholder="请输入您的手机号" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="captcha">验证码</Label>
              <Input id="captcha" type="text" placeholder="请输入您的验证码" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>登陆</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}


export default UserAuthForm;