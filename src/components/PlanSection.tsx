"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PlanSection() {
  const [keywords, setKeywords] = useState(15000);
  const [paymentOption, setPaymentOption] = useState("monthly");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Card className="my-3">
        <CardHeader className="text-4xl font-bold text-center mb-4">
          Enjoy Simple, Keyword-based Pricing
        </CardHeader>
        <CardContent>
          <p className="text-center mb-8 text-gray-600">
            SiteCurve offers simple, secure pricing and payment options based on
            the keywords you use to build your landscapes. See who&apos;s winning and
            losing across 1,000 keywords or 100,000, SiteCurve is built for
            scale. Paid accounts have access to all SiteCurve features. Choose
            annual payment, and get 20% off. Upgrade, downgrade, or cancel at
            anytime.
          </p>

          <div className="mb-8">
            <RadioGroup
              defaultValue="monthly"
              className="flex justify-center space-x-4 mb-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="monthly"
                  id="monthly"
                  checked={paymentOption === "monthly"}
                  onChange={() => setPaymentOption("monthly")}
                />
                <Label htmlFor="monthly">Pay Monthly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yearly"
                  id="yearly"
                  checked={paymentOption === "yearly"}
                  onChange={() => setPaymentOption("yearly")}
                />
                <Label htmlFor="yearly">Pay Yearly (Save 20%)</Label>
              </div>
            </RadioGroup>

            <div className="text-center mb-4">
              <span className="text-lg font-semibold">I want to track</span>{" "}
              <span className="text-3xl font-bold text-blue-600">
                {keywords.toLocaleString()}
              </span>{" "}
              <span className="text-lg font-semibold">keywords each day</span>
            </div>

            <Slider
              min={1000}
              max={1000000}
              step={1000}
              value={[keywords]}
              onValueChange={(value) => setKeywords(value[0])}
              className="max-w-3xl mx-auto"
            />

            <div className="flex justify-between max-w-3xl mx-auto mt-2 text-sm text-gray-600">
              <span>2K</span>
              <span>5K</span>
              <span>10K</span>
              <span>25K</span>
              <span>50K</span>
              <span>100K</span>
              <span>200K</span>
              <span>500K</span>
              <span>1M+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <p className="text-sm text-gray-600">
              For individuals who want to browse other user&apos;s landscapes, create
              website portfolios, or join in on discussions.
            </p>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4">Free</div>
            <Button className="w-full mb-4">Create Free Account</Button>
            <p className="text-sm text-center text-gray-600 mb-4">
              No Credit Card Required
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Includes:</p>
              <p>3 months of historical data</p>
              <p>50 rows per report</p>
              <p>1 included user</p>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-semibold">Key Features:</p>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> Browse
                landscapes
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> Participate in
                discussions
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> Create
                personal website portfolios
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business</CardTitle>
            <p className="text-sm text-gray-600">
              For businesses who want to create their own landscapes to track
              the important keywords and competing websites.
            </p>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4">
              $119 <span className="text-lg font-normal">per month</span>
            </div>
            <Button className="w-full mb-4">Start 14 Day Free Trial</Button>
            <p className="text-sm text-center text-gray-600 mb-4">
              No Credit Card Required
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Includes:</p>
              <p>Unlimited historical data</p>
              <p>Unlimited rows per report</p>
              <p>Unlimited users</p>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-semibold">Everything In Starter+</p>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> Create public,
                private, or paid landscapes
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> Advanced
                website segmentation
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> Track up to
                100K keywords and 2M sites
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <p className="text-sm text-gray-600">
              For enterprises and agencies who want 1:1 support to build custom
              landscapes for their businesses and clients.
            </p>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4">Let&apos;s Talk</div>
            <Button className="w-full mb-4" variant="secondary">
              Contact Us
            </Button>
            <div className="space-y-2">
              <p className="font-semibold">Includes:</p>
              <p>Unlimited historical data</p>
              <p>Unlimited rows per report</p>
              <p>Unlimited users</p>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-semibold">Everything In Business+</p>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> 1:1 onboarding
                support and setup
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> Dedicated
                account manager
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> Track up to 1M
                keywords and 20M sites
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <a href="#" className="text-blue-600 hover:underline">
          See Full Price Comparison
        </a>
      </div>
    </div>
  );
}
