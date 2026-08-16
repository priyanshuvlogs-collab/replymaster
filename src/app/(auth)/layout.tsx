import { Logo } from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col p-6 sm:p-10">
        <Logo />
        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
      <div className="hidden flex-col justify-between bg-muted/40 p-10 lg:flex lg:border-l">
        <div />
        <blockquote className="space-y-4">
          <p className="text-balance text-xl font-medium leading-relaxed">
            “ReplyMaster cut our review response time from two days to under an
            hour. Our ratings went up within a month — it pays for itself.”
          </p>
          <footer className="text-sm text-muted-foreground">
            Sofia Reyes · Head of CX, Northwind Coffee
          </footer>
        </blockquote>
        <p className="text-sm text-muted-foreground">
          Trusted by 2,000+ brands worldwide
        </p>
      </div>
    </div>
  );
}
