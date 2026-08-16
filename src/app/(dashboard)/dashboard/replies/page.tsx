import type { Metadata } from "next";
import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Replies",
};

const replies = [
  {
    author: "Jamie D.",
    brand: "Northwind Coffee",
    platform: "Google",
    excerpt: "Waited 40 minutes for my order and nobody apologized…",
    status: "Published",
    date: "Aug 15, 2026",
  },
  {
    author: "Priya S.",
    brand: "Acme Fitness",
    platform: "Trustpilot",
    excerpt: "Fantastic support team, resolved my issue in minutes!",
    status: "Published",
    date: "Aug 15, 2026",
  },
  {
    author: "@coffee_dan",
    brand: "Northwind Coffee",
    platform: "X",
    excerpt: "Is the seasonal menu coming back this fall?",
    status: "Pending review",
    date: "Aug 14, 2026",
  },
  {
    author: "Marco T.",
    brand: "Bloom & Co.",
    platform: "Yelp",
    excerpt: "Good food but the app kept crashing when I tried to order…",
    status: "Draft",
    date: "Aug 14, 2026",
  },
  {
    author: "Lena K.",
    brand: "Acme Fitness",
    platform: "App Store",
    excerpt: "Love the new workout plans, five stars!",
    status: "Approved",
    date: "Aug 13, 2026",
  },
];

const statusVariant: Record<
  string,
  "default" | "secondary" | "outline" | "destructive"
> = {
  Published: "default",
  Approved: "secondary",
  "Pending review": "outline",
  Draft: "secondary",
};

export default function RepliesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Replies</h1>
          <p className="text-sm text-muted-foreground">
            Every review, comment, and mention — drafted, approved, published.
          </p>
        </div>
        <Button>
          <Plus className="size-4" />
          New reply
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All replies</CardTitle>
          <CardDescription>
            Filter by status to review drafts and pending approvals.
          </CardDescription>
          <Tabs defaultValue="all" className="mt-2">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Author</TableHead>
                <TableHead className="hidden sm:table-cell">Brand</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead className="hidden md:table-cell">Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden text-right sm:table-cell">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {replies.map((reply) => (
                <TableRow key={`${reply.author}-${reply.date}`}>
                  <TableCell className="font-medium">{reply.author}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {reply.brand}
                  </TableCell>
                  <TableCell>{reply.platform}</TableCell>
                  <TableCell className="hidden max-w-sm truncate text-muted-foreground md:table-cell">
                    {reply.excerpt}
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[reply.status] ?? "secondary"}>
                      {reply.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden text-right text-muted-foreground sm:table-cell">
                    {reply.date}
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
