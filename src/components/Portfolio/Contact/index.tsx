"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { MobileTextCycler } from "@/components/ui/mobile-text-cycler";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Unknown error");
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      data-animate
    >
      <div className="mx-auto max-w-[1170px] px-4 py-24 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Left: intro + links */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 h-12 w-full overflow-hidden">
              <MobileTextCycler
                texts={["Get In Touch", "Let's Talk", "Say Hello", "Work With Me"]}
                className="md:hidden flex items-center justify-center lg:justify-start h-full text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
              />
              <div className="hidden md:block h-full">
                <GooeyText
                  texts={["Get In Touch", "Let's Talk", "Say Hello", "Work With Me"]}
                  morphTime={1}
                  cooldownTime={2.5}
                  innerClassName="justify-center lg:justify-start"
                  className="h-full"
                  textClassName="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
                />
              </div>
            </div>
            <div className="mb-8 w-full max-w-[420px] glass-card px-4 py-3">
              <p className="leading-relaxed text-foreground/75">
                I'm open to new opportunities, collaborations, or just a friendly
                chat. Send me a message and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <div className="mb-8 flex flex-col items-center gap-3 lg:items-start">
              <a
                href="mailto:rbicknell0723@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#a08878] transition-colors hover:text-foreground"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                rbicknell0723@gmail.com
              </a>
              <a
                href="tel:+19513105226"
                className="inline-flex items-center gap-2 text-sm text-[#a08878] transition-colors hover:text-foreground"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (951) 310-5226
              </a>
            </div>

            <div className="flex justify-center gap-2 lg:justify-start">
              <a
                href="https://github.com/RBicknell0523"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-md text-[#a08878] transition-colors hover:text-primary"
              >
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/robert-bicknell-81b04440b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md text-[#a08878] transition-colors hover:text-primary"
              >
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <Card className="rounded-xl border-border/60 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <svg className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p className="text-lg font-semibold text-foreground">Message sent!</p>
                  <p className="text-sm text-muted-foreground">I'll get back to you as soon as possible.</p>
                  <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                    Send another
                  </Button>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required disabled={status === "sending"} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required disabled={status === "sending"} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What's on your mind?"
                      className="min-h-[140px]"
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-destructive">{errorMsg}</p>
                  )}
                  <Button type="submit" className="w-full" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
