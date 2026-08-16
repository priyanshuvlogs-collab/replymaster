import type { Metadata } from "next";
import { Building2, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Brands",
};

const brands = [
  {
    name: "Northwind Coffee",
    tone: "Friendly",
    replies: 84,
    platforms: ["Google", "Yelp", "Instagram"],
  },
  {
    name: "Acme Fitness",
    tone: "Professional",
    replies: 31,
    platforms: ["Trustpilot", "App Store"],
  },
  {
    name: "Bloom & Co.",
    tone: "Witty",
    replies: 13,
    platforms: ["X", "Facebook"],
  },
];

export default function BrandsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Brands</h1>
          <p className="text-sm text-muted-foreground">
            Manage the brands you reply on behalf of, each with its own voice.
          </p>
        </div>
        <Button>
          <Plus className="size-4" />
          Add brand
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {brands.map((brand) => (
          <Card key={brand.name} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="size-5" />
              </div>
              <CardTitle className="text-base">{brand.name}</CardTitle>
              <CardDescription>
                {brand.tone} tone · {brand.replies} replies this month
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {brand.platforms.map((platform) => (
                <Badge key={platform} variant="secondary">
                  {platform}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}

        <Card className="flex items-center justify-center border-dashed">
          <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-muted">
              <Plus className="size-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Add a new brand</p>
              <p className="text-xs text-muted-foreground">
                Set up voice, tone, and guidelines
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
