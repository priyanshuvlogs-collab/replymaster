import {
  LayoutDashboard,
  MessageSquareReply,
  Building2,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const navLinks: NavLink[] = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/replies", label: "Replies", icon: MessageSquareReply },
  { href: "/dashboard/brands", label: "Brands", icon: Building2 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];
