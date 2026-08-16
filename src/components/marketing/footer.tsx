import Link from "next/link";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground">
              On-brand replies to every review, comment, and mention —
              everywhere your customers talk about you.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="space-y-3">
                <h4 className="text-sm font-semibold">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} ReplyMaster, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
