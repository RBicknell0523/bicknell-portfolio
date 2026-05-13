"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { validateEmail } from "@/libs/validateEmail";
import axios from "axios";
import Loader from "@/components/Common/Loader";
import { integrations, messages } from "../../../../integrations.config";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ForgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isAuthEnabled) {
      toast.error(messages.auth);
      return;
    }

    const result = ForgotPasswordSchema.safeParse({ email });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email address.");
    }

    setLoader(true);

    try {
      const res = await axios.post("/api/forgot-password/reset", {
        email: email.toLowerCase(),
      });

      if (res.status === 200) {
        toast.success(res.data);
        setEmail("");
      }

      setLoader(false);
    } catch (error: any) {
      toast.error(error?.response.data);
      setLoader(false);
    }
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
              <div className="flex h-full flex-col justify-center px-8 py-10 sm:px-14 sm:py-16">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Forgot your password?
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Enter your email and we&apos;ll send you a reset link.
                </p>

                <form onSubmit={sendEmail} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Email {loader && <Loader />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ForgotPassword;
