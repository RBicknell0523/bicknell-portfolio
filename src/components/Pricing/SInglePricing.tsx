"use client";

import axios from "axios";
import { integrations, messages } from "../../../integrations.config";
import toast from "react-hot-toast";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import OfferItem from "./OfferItem";

const OFFERS = [
  "Subscription with levels",
  "Advanced features included",
  "Shared workspaces & tools",
  "Premium versions functionality",
  "Customizing the outputs",
  "Priority customer support",
];

const TIER_LABELS: Record<string, string> = {
  Small: "Starter",
  Medium: "Medium",
  Large: "Business",
};

const SinglePricing = ({ price }: any) => {
  const handleSubscription = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isStripeEnabled) {
      toast.error(messages.stripe);
      return;
    }

    const { data } = await axios.post(
      "/api/payment",
      { priceId: price.id },
      { headers: { "Content-Type": "application/json" } },
    );
    window.location.assign(data);
  };

  const label = TIER_LABELS[price.nickname] ?? price.nickname;
  const isPopular = price.nickname === "Medium";

  return (
    <Card className={`relative flex flex-col overflow-hidden ${isPopular ? "border-primary shadow-lg" : ""}`}>
      {isPopular && (
        <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Popular
        </div>
      )}

      <CardHeader className="pb-4">
        <Badge variant="secondary" className="w-fit text-primary">
          {label}
        </Badge>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-bold text-foreground">
            ${(price.unit_amount / 100).toLocaleString("en-US")}
          </span>
          <span className="mb-1 text-sm text-muted-foreground">/month</span>
        </div>
        <p className="text-xs text-muted-foreground">billed annually</p>
      </CardHeader>

      <Separator />

      <CardContent className="flex-1 pt-6">
        <ul className="flex flex-col gap-3">
          {OFFERS.map((text) => (
            <OfferItem key={text} text={text} />
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 pt-4">
        <Button
          className="w-full"
          variant={isPopular ? "default" : "outline"}
          onClick={handleSubscription}
        >
          Get the plan
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          No extra hidden charge
        </p>
      </CardFooter>
    </Card>
  );
};

export default SinglePricing;
