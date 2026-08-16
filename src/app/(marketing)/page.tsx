import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  MessageSquareReply,
  Sparkles,
  Star,
  Timer,
  Palette,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "On-brand AI replies",
    description:
      "Generate replies that sound like you. Set your brand voice once and every response matches your tone.",
  },
  {
    icon: Globe,
    title: "Every platform, one inbox",
    description:
      "Google, Yelp, Trustpilot, the App Store, X, Instagram — manage all your reviews and mentions in one place.",
  },
  {
    icon: Timer,
    title: "Reply in seconds",
    description:
      "Cut response time from hours to seconds. Draft, review, and publish without switching tabs.",
  },
  {
    icon: Palette,
    title: "Multiple brand voices",
    description:
      "Run several brands? Each gets its own voice, guidelines, and reply history — cleanly separated.",
  },
  {
    icon: ShieldCheck,
    title: "Approval workflows",
    description:
      "Keep quality high with draft, review, and approval states before anything goes live.",
  },
  {
    icon: BarChart3,
    title: "Sentiment insights",
    description:
      "Track sentiment across platforms and see how faster, better replies move the needle.",
  },
];

const steps = [
  {
    step: "01",
    title: "Connect your brand",
    description:
      "Add your brand, describe your voice, and set reply guidelines in under two minutes.",
  },
  {
    step: "02",
    title: "Paste or import a message",
    description:
      "Drop in any review, comment, or mention. ReplyMaster detects sentiment automatically.",
  },
  {
    step: "03",
    title: "Approve and publish",
    description:
      "Get an on-tone draft instantly, tweak if needed, then approve and publish.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For trying things out",
    features: ["1 brand", "25 replies / month", "3 platforms", "Community support"],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing businesses",
    features: [
      "5 brands",
      "Unlimited replies",
      "All platforms",
      "Approval workflows",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "For teams and agencies",
    features: [
      "Unlimited brands",
      "Unlimited replies",
      "Team seats & roles",
      "Sentiment analytics",
      "Dedicated support",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,--theme(--color-primary/8%),transparent)]"
        />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28">
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
            <Sparkles className="size-3.5" />
            AI-powered reply management
          </Badge>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Reply to every customer, everywhere, in your voice
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
            ReplyMaster turns reviews, comments, and mentions into on-brand
            replies in seconds — so your team spends less time typing and more
            time building relationships.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/signup" />}
            >
              Start for free
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="#how-it-works" />}
            >
              See how it works
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            Loved by 2,000+ brands — no credit card required
          </div>

          {/* Product mock */}
          <div className="mt-16 w-full max-w-4xl rounded-xl border bg-card p-2 shadow-xl">
            <div className="rounded-lg border bg-muted/40 p-6 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-full bg-amber-100 text-sm font-medium text-amber-700">
                    JD
                  </span>
                  <div>
                    <p className="text-sm font-medium">Jamie D. · Google Reviews</p>
                    <p className="text-xs text-muted-foreground">2 hours ago · ★★☆☆☆</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-red-600">
                  Negative
                </Badge>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                “Waited 40 minutes for my order and nobody apologized. Expected
                better from a place with such good ratings.”
              </p>
              <div className="mt-5 rounded-lg border bg-background p-4">
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <MessageSquareReply className="size-3.5" />
                  Suggested reply · Empathetic tone
                </div>
                <p className="mt-2 text-sm">
                  Hi Jamie — you&apos;re right, 40 minutes is far too long and we&apos;re
                  sorry we missed the mark. We&apos;d love to make it up to you:
                  please email us at care@acme.com and we&apos;ll take care of your
                  next visit personally.
                </p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm">Approve & publish</Button>
                  <Button size="sm" variant="outline">
                    Regenerate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to master replies
            </h2>
            <p className="mt-4 text-muted-foreground">
              One workspace for your whole review and mention workflow — from
              first draft to published response.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/60">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From mention to reply in three steps
            </h2>
            <p className="mt-4 text-muted-foreground">
              No complicated setup. Most teams publish their first reply within
              five minutes.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-semibold text-muted-foreground/20">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start free, upgrade when you&apos;re ready. No hidden fees, cancel
              anytime.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.highlighted
                    ? "relative border-primary shadow-lg"
                    : "border-border/60"
                }
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-6">
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="size-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-auto w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    nativeButton={false}
                    render={<Link href="/signup" />}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to master your replies?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-primary-foreground/80">
              Join thousands of brands answering every customer with speed and
              style. Free to start, two minutes to set up.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8"
              nativeButton={false}
              render={<Link href="/signup" />}
            >
              Get started for free
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
