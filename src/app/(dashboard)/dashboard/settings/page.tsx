import type { Metadata } from "next";

import { auth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account and subscription.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            This is how your name appears on published replies.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              defaultValue={session?.user?.name ?? ""}
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={session?.user?.email ?? ""}
              disabled
            />
            <p className="text-xs text-muted-foreground">
              Email changes are not supported yet.
            </p>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button>Save changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Plan</CardTitle>
          <CardDescription>
            You are currently on the{" "}
            <Badge variant="secondary" className="align-middle">
              Free
            </Badge>{" "}
            plan.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>25 replies per month · 1 brand · 3 platforms</p>
          <Separator />
          <p>
            Upgrade to Pro for unlimited replies, five brands, and approval
            workflows.
          </p>
        </CardContent>
        <CardFooter className="border-t">
          <Button>Upgrade to Pro</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
