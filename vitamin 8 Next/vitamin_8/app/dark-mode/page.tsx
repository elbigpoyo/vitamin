'use client'
// app/dark-mode/page.js
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function DarkModePage() {
    const pathname = usePathname();
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl mb-4">Dark Mode Page</h1>
      <p>current route: { pathname }</p>

      <div className="flex gap-4">
        <Link href="/dark-mode" className="px-4 py-2 rounded border">Dark-Mode</Link>
        <Link href="/light-mode" className="px-4 py-2 rounded border">Light-Mode</Link>
      </div>
    </div>
  );
}