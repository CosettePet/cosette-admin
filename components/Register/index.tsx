'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

export default function Register() {
  // 1. Define the schema
  const REGISTER_SCHMA = z.object({
    telphone: z
      .string()
      .min(11, {
        message: '手机号不符合规则',
      })
      .max(11, {
        message: '手机号不符合规则',
      }),
    password: z
      .string()
      .min(6, {
        message: '密码至少4个字符',
      })
      .max(28, {
        message: '密码最多28个字符',
      }),
    requirePassword: z
      .string()
      .min(6, {
        message: '密码至少4个字符',
      })
      .max(28, {
        message: '密码最多28个字符',
      }),
    captcha: z
      .string()
      .min(6, {
        message: '验证码不能少于6位',
      })
      .max(6, {
        message: '验证码不能少于6位',
      }),
  });

  // 2. Define the form.
  const registerForm = useForm<z.infer<typeof REGISTER_SCHMA>>({
    resolver: zodResolver(REGISTER_SCHMA),
    defaultValues: {
      telphone: '15801121357',
      password: 'wanlum',
      requirePassword: 'wanlum',
      captcha: '123456',
    },
  });

  // 3. Handler form submit
  const registerOnSubmit = (values: z.infer<typeof REGISTER_SCHMA>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <section className="register">
      <Form {...registerForm}>
        <form
          className="space-y-8"
          onSubmit={registerForm.handleSubmit(registerOnSubmit)}
        >
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
                  control={registerForm.control}
                  name="telphone"
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
                {/* <Label htmlFor="mobile">手机号</Label>
                  <Input id="mobile" type="text" placeholder="请输入您的手机号" /> */}

                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>密码</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="请设置您的密码"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                {/* <Label htmlFor="mobile">手机号</Label>
                  <Input id="mobile" type="text" placeholder="请输入您的手机号" /> */}

                <FormField
                  control={registerForm.control}
                  name="requirePassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>确认密码</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="请再次输入密码"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <div className="flex w-full max-w-sm items-center justify-between space-x-2">
                  <FormField
                    control={registerForm.control}
                    name="captcha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>验证码</FormLabel>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* 60秒后可重发 */}
                  <Button
                    type="button"
                    variant="secondary"
                    className="self-end"
                  >
                    发送验证码
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex w-full max-w-sm items-center justify-between space-x-2">
              <Button>注册</Button>
              <Button>重置</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
}
