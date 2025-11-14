"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Home() {
  const pathname = usePathname();

  const isDark = pathname === "/dark-mode";
  const isLight = pathname === "/light-mode";

  return (
    <div
      className={clsx("min-h-screen p-8", {
        "bg-black text-white": isDark,
        "bg-white text-black": isLight,
      })}
    >
      <h1 className="text-3xl mb-4">Homepage</h1>
      <p>current route: { pathname }</p>

      <div className="flex gap-4">
        <Link href="/dark-mode" className="px-4 py-2 rounded border">
          Dark-Mode
        </Link>

        <Link href="/light-mode" className="px-4 py-2 rounded border">
          Light-Mode
        </Link>
      </div>
    </div>
  );
}
