"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

const navItems = [
  { label: "Create", href: "/" },
  { label: "Edit", href: "/edit" },
  { label: "Video", href: "/video" },
  { label: "Gallery", href: "/gallery" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-white/5">
      <h1 className="text-2xl font-serif italic text-white tracking-wide">
        Dream
      </h1>
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                try {
                  throw new Error(
                    `${item.label} button error: ${item.label} service test error`
                  );
                } catch (e) {
                  console.error(e);
                }
              }}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <button className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
        <User size={18} />
      </button>
    </nav>
  );
}
