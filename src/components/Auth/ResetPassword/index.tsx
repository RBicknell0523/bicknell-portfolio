"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Loader from "@/components/Common/Loader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ResetPassword = ({ token }: { token: string }) => {
  const [data, setData] = useState({ newPassword: "", ReNewPassword: "" });
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({ email: "" });
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(`/api/forgot-password/verify-token`, { token });
        if (res.status === 200) setUser({ email: res.data.email });
      } catch (error: any) {
        toast.error(error.response.data);
        router.push("/auth/forgot-password");
      }
    };
    verifyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    if (data.newPassword === "") {
      toast.error("Please enter your password.");
      setLoader(false);
      return;
    }

    try {
      const res = await axios.post(`/api/forgot-password/update`, {
        email: user?.email,
        password: data.newPassword,
      });

      if (res.status === 200) {
        toast.success(res.data);
        setData({ newPassword: "", ReNewPassword: "" });
        router.push("/auth/signin");
      }

      setLoader(false);
    } catch (error: any) {
      toast.error(error.response.data);
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
                  Reset your password
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Enter your new password below.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      value={data.newPassword}
                      name="newPassword"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="ReNewPassword">Confirm Password</Label>
                    <Input
                      id="ReNewPassword"
                      type="password"
                      placeholder="Re-enter new password"
                      value={data.ReNewPassword}
                      name="ReNewPassword"
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Reset Password {loader && <Loader />}
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

export default ResetPassword;
