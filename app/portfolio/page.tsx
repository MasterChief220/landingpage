"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://terminalcv.snowdensvault.fyi/");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-white">
      <p>Redirecting to portfolio...</p>
    </div>
  );
}
