"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const AccountSchema = z.object({
  username: z.string().min(5, {
    message: "账号至少5个字符",
  }).max(18, {
    message: "账号最多18个字符",
  }),
  password: z.string().min(4, {
    message: "密码至少4个字符",
  }).max(23, {
    message: "密码最多23个字符",
  })
})



const UserAuthForm = () => {

  // 1. Define your form.
  const accountForm = useForm<z.infer<typeof AccountSchema>>({
    resolver: zodResolver(AccountSchema),
    defaultValues: {
      username: "admin",
      password: "root"
    },
  })

  // 2. Define a submit handler.
  const accountOnSubmit = (values: z.infer<typeof AccountSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const MobileSchema = z.object({
    tel: z.string().min(11).max(11),
    captcha: z.string().min(6).max(6)
  })
  const mobileForm = useForm<z.infer<typeof MobileSchema>>({
    resolver: zodResolver(MobileSchema),
    defaultValues: {
      tel: "15801123456",
      captcha: "xz34jj"
    },
  })
  const mobileOnSubmit = (values: z.infer<typeof MobileSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">账户登陆</TabsTrigger>
        <TabsTrigger value="mobile">手机登陆</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Form {...accountForm}>
          <form onSubmit={accountForm.handleSubmit(accountOnSubmit)} className="space-y-8">
            <Card>
              <CardHeader>
                {/* <CardTitle>登陆</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription> */}
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <FormField
                    control={accountForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>账号</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入您的账号" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-1">
                  <FormField
                    control={accountForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>密码</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="请输入您的密码" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="submit">登陆</Button> <Link href='/about'>忘记密码?</Link>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="mobile">
        <Form {...mobileForm}>
          <form onSubmit={mobileForm.handleSubmit(mobileOnSubmit)} className="space-y-8">
            <Card>
              <CardHeader>
                {/* <CardTitle>注册</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription> */}
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  {/* <Label htmlFor="mobile">手机号</Label>
                  <Input id="mobile" type="text" placeholder="请输入您的手机号" /> */}

                  <FormField
                    control={mobileForm.control}
                    name="tel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>手机号</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入您的手机号" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-1">

                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <FormField
                      control={mobileForm.control}
                      name="captcha"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>验证码</FormLabel>
                          <FormControl >
                            <Input placeholder="请输入验证码" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="button" variant="secondary" className="self-end">发送验证码</Button>
                  </div>

                </div>
              </CardContent>
              <CardFooter>
                <Button>登陆</Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </TabsContent>

    </Tabs >
  )
}


export default UserAuthForm;