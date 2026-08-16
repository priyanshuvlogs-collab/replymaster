"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { navLinks } from "@/components/dashboard/nav-links";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 px-3">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
            )}
          >
            <link.icon className="size-4" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r bg-sidebar lg:flex">
      <div className="flex h-16 items-center border-b px-6">
        <Logo href="/dashboard" />
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <SidebarNav />
      </div>
      <div className="border-t p-4">
        <p className="text-xs text-muted-foreground">
          Free plan · 25 replies left
        </p>
      </div>
    </aside>
  );
}
