import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — Robert Bicknell",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
      <p className="mb-8 text-foreground/60">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded-lg border border-primary px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
      >
        Go Home
      </Link>
    </div>
  );
}
