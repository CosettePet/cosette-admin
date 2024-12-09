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

export default function Login() {
  // 1. Define the schema
  const LOGIN_SCHMA = z.object({
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
      .min(4, {
        message: '密码至少4个字符',
      })
      .max(23, {
        message: '密码最多23个字符',
      }),
  });

  // 2. Define the form.
  const loginForm = useForm<z.infer<typeof LOGIN_SCHMA>>({
    resolver: zodResolver(LOGIN_SCHMA),
    defaultValues: {
      telphone: '15801121357',
      password: 'root',
    },
  });

  // 3. Handler form submit
  const loginOnSubmit = (values: z.infer<typeof LOGIN_SCHMA>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <section className="login">
      <Form {...loginForm}>
        <form
          className="space-y-8"
          onSubmit={loginForm.handleSubmit(loginOnSubmit)}
        >
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
                  control={loginForm.control}
                  name="telphone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>手机号</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="请输入您的账号"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>密码</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="请输入您的密码"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="submit">登陆</Button>{' '}
              <Link href="/">忘记密码?</Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
}
