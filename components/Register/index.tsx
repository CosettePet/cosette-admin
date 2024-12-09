'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
    captcha: z
      .string()
      .min(4, {
        message: '密码至少4个字符',
      })
      .max(23, {
        message: '密码最多23个字符',
      }),
  });

  // 2. Define the form.
  const registerForm = useForm<z.infer<typeof REGISTER_SCHMA>>({
    resolver: zodResolver(REGISTER_SCHMA),
    defaultValues: {
      telphone: '15801121357',
      captcha: 'root',
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
                <div className="flex w-full max-w-sm items-center justify-between space-x-2">
                  <FormField
                    control={registerForm.control}
                    name="captcha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>验证码</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入验证码" {...field} />
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
