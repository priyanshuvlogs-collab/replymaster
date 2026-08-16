import type { Metadata } from "next";
import {
  MessageSquareReply,
  Building2,
  Timer,
  TrendingUp,
  Plus,
} from "lucide-react";
import Link from "next/link";

import { auth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Dashboard",
};

const stats = [
  {
    label: "Replies sent",
    value: "128",
    change: "+12% from last month",
    icon: MessageSquareReply,
  },
  {
    label: "Active brands",
    value: "3",
    change: "+1 this month",
    icon: Building2,
  },
  {
    label: "Avg. response time",
    value: "42m",
    change: "-18% from last month",
    icon: Timer,
  },
  {
    label: "Positive sentiment",
    value: "76%",
    change: "+4% from last month",
    icon: TrendingUp,
  },
];

const recentReplies = [
  {
    author: "Jamie D.",
    platform: "Google",
    excerpt: "Waited 40 minutes for my order and nobody apologized…",
    sentiment: "Negative",
    status: "Published",
  },
  {
    author: "Priya S.",
    platform: "Trustpilot",
    excerpt: "Fantastic support team, resolved my issue in minutes!",
    sentiment: "Positive",
    status: "Published",
  },
  {
    author: "@coffee_dan",
    platform: "X",
    excerpt: "Is the seasonal menu coming back this fall?",
    sentiment: "Neutral",
    status: "Pending review",
  },
  {
    author: "Marco T.",
    platform: "Yelp",
    excerpt: "Good food but the app kept crashing when I tried to order…",
    sentiment: "Negative",
    status: "Draft",
  },
];

const sentimentVariant: Record<string, string> = {
  Positive: "text-emerald-600",
  Neutral: "text-muted-foreground",
  Negative: "text-red-600",
};

export default async function DashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] ?? "there";

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back, {firstName}
          </h1>
          <p className="text-sm text-muted-foreground">
            Here&apos;s what&apos;s happening across your brands today.
          </p>
        </div>
        <Button render={<Link href="/dashboard/replies" />}>
          <Plus className="size-4" />
          New reply
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold tracking-tight">
                {stat.value}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent replies</CardTitle>
          <CardDescription>
            The latest reviews and mentions handled across your brands.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Author</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead className="hidden md:table-cell">Message</TableHead>
                <TableHead>Sentiment</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentReplies.map((reply) => (
                <TableRow key={reply.author}>
                  <TableCell className="font-medium">{reply.author}</TableCell>
                  <TableCell>{reply.platform}</TableCell>
                  <TableCell className="hidden max-w-md truncate text-muted-foreground md:table-cell">
                    {reply.excerpt}
                  </TableCell>
                  <TableCell
                    className={sentimentVariant[reply.sentiment] ?? ""}
                  >
                    {reply.sentiment}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={
                        reply.status === "Published" ? "default" : "secondary"
                      }
                    >
                      {reply.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
