"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignup from "../SocialSignup";
import SwitchOptions from "../SwitchOptions";
import MagicLink from "../MagicLink";
import Loader from "@/components/Common/Loader";
import { integrations, messages } from "../../../../integrations.config";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SigninSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter.",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter.",
    })
    .refine((val) => /\d/.test(val), {
      message: "Password must contain at least one number.",
    })
    .refine((val) => /[@$!%*?&]/.test(val), {
      message: "Password must contain at least one special character.",
    }),
});

const Signin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const loginUser = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isAuthEnabled) {
      toast.error(messages.auth);
      return;
    }

    const result = SigninSchema.safeParse({ ...data });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoader(true);
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
        setLoader(false);
        return;
      }
      if (callback?.ok && !callback?.error) {
        toast.success("Logged in successfully");
        setLoader(false);
      }
    });
  };

  return (
    <section className="py-17.5 lg:py-22.5 xl:py-27.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <Card className="overflow-hidden rounded-3xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left panel */}
            <div className="hidden bg-accent lg:flex lg:w-1/2 lg:shrink-0">
              <div className="flex h-full flex-col justify-center px-14 py-20">
                <h2 className="mb-8 max-w-[292px] text-3xl font-bold text-foreground">
                  Unlock the Power of Writing Tool
                </h2>
                <div className="relative aspect-61/50 w-full max-w-[400px]">
                  <Image src="/images/signin/sigin.svg" alt="signin" fill />
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="w-full lg:w-1/2 lg:shrink-0">
              <div className="px-8 py-10 sm:px-14 sm:py-16">
                <SocialSignup />

                <div className="relative my-6 flex items-center">
                  <Separator className="flex-1" />
                  <span className="mx-4 text-xs text-muted-foreground">
                    Or sign in with email
                  </span>
                  <Separator className="flex-1" />
                </div>

                <SwitchOptions
                  isPassword={isPassword}
                  setIsPassword={setIsPassword}
                />

                {!isPassword ? (
                  <MagicLink />
                ) : (
                  <form onSubmit={loginUser} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value.toLowerCase() })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="remember"
                          checked={remember}
                          onCheckedChange={(v) => setRemember(!!v)}
                        />
                        <Label htmlFor="remember" className="cursor-pointer text-sm font-normal">
                          Remember me
                        </Label>
                      </div>
                      <Link
                        href="/auth/forgot-password"
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full">
                      Sign in {loader && <Loader />}
                    </Button>
                  </form>
                )}

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/signup" className="text-primary hover:underline">
                    Sign Up for Free
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Signin;
