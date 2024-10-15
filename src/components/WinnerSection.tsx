import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  Trophy,
  Clock,
  BarChart3,
  Briefcase,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { CiCircleCheck, CiCreditCard1 } from "react-icons/ci";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ProcessStepProps {
  title: string;
  description: string;
  imageSrc: string;
}
const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  imageSrc,
}) => (
  <Card className="bg-white shadow-lg">
    <CardHeader>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      <p className="text-muted-foreground">{description}</p>
    </CardHeader>
    <CardContent>
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-md" />
    </CardContent>
  </Card>
);

export default function TabsSection() {
  return (
    <>
      <div className="bg-[#F3F1FF] p-8 text-center">
        <h1 className="text-4xl font-bold text-[#2D2A53] mb-4">
          Gain an advantage over your competitors with next-level SEO
          intelligence
        </h1>
        <p className="text-lg text-[#2D2A53] mb-8">
          Click the tabs below to see what makes SiteCurve standout from other
          SEO tools.
        </p>
        <Tabs
          defaultValue="winners-losers"
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5  rounded-lg gap-2">
            <TabsTrigger
              value="winners-losers"
              className="flex items-center border justify-center py-2 px-4 data-[state=active]:border-[#6366F1] data-[state=active]:text-[#6366F1] rounded-md transition-all"
            >
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Winners & Losers
            </TabsTrigger>
            <TabsTrigger
              value="leaderboards"
              className="flex items-center border justify-center py-2 px-4 data-[state=active]:border-[#6366F1] data-[state=active]:text-[#6366F1] rounded-md transition-all"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Leaderboards
            </TabsTrigger>
            <TabsTrigger
              value="new-entrants"
              className="flex items-center border justify-center py-2 px-4 data-[state=active]:border-[#6366F1] data-[state=active]:text-[#6366F1] rounded-md transition-all"
            >
              <Clock className="w-4 h-4 mr-2" />
              New Entrants
            </TabsTrigger>
            <TabsTrigger
              value="unique-metrics"
              className="flex items-center border justify-center py-2 px-4 data-[state=active]:border-[#6366F1] data-[state=active]:text-[#6366F1] rounded-md transition-all"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Unique SEO Metrics
            </TabsTrigger>
            <TabsTrigger
              value="portfolios"
              className="flex items-center border justify-center py-2 px-4 data-[state=active]:border-[#6366F1] data-[state=active]:text-[#6366F1] rounded-md transition-all"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Portfolios
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="bg-[#F3F1FF] p-8 rounded-lg shadow-lg max-w-5xl mx-auto my-5 h-full py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              See which websites are winning and losing rank on your keywords
            </h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600">
                <CiCircleCheck className="w-5 h-5 mr-2 text-blue-600" />
                View the biggest rank movers over custom time periods
              </li>
              <li className="flex items-center text-gray-600">
                <CiCircleCheck className="w-5 h-5 mr-2 text-blue-600" />
                Sort by share of voice, curve, volatility scores
              </li>
              <li className="flex items-center text-gray-600">
                <CiCircleCheck className="w-5 h-5 mr-2 text-blue-600" />
                Analyze shifts in specific categories and niches
              </li>
            </ul>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
          <div className="flex-1">
            <Image
              src={
                "https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
              }
              alt={"title"}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            ></Image>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F1FF] p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              title="Add keywords or websites"
              description="Get started by importing your keywords or websites alongside your preferred device, language, and location."
              imageSrc="https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
            />
            <ProcessStep
              title="Build landscape"
              description="SiteCurve uses AI to categorize all keywords and websites in the search results to build your custom SEO landscape."
              imageSrc="https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
            />
            <ProcessStep
              title="Uncover insights"
              description="SiteCurve pulls fresh rank data, giving you an automated, up-to-date view of winning and losing websites each day."
              imageSrc="https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-screen bg-[#4A3B8B]">
        <div className=" text-white p-8 lg:w-1/3">
          <div className="mb-4">
            <span className="bg-white text-[#4A3B8B] px-3 py-1 rounded-md text-sm font-medium">
              Competing Websites
            </span> 
          </div>
          <h1 className="text-4xl font-bold mb-6">
            Know Why Your Website Traffic is Going Up or Down with Confidence
          </h1>
          <p className="mb-4">
            For each website in the landscape, you can see competitors for the
            same keywords, and whether they are improving or losing rank daily.
          </p>
          <p className="mb-6">
            Using our advanced segmentation, you can refine your landscape views
            even more to see competitor performance in specific niches, website
            types, or business models.
          </p>
          <Button className="bg-[#6366F1] hover:bg-[#5457E5] text-white mb-4">
            Create Landscape - It's Free
          </Button>
          <p className="text-sm items-center flex gap-2 align-middle"><CiCreditCard1 /> No Credit Card Required</p>
        </div>
        <div className="p-4 lg:w-2/3 my-auto">
          <div className="p-4 rounded-lg flex justify-between items-center h-full">
            <Image
              src={
                "https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
              }
              width={400}
              height={300}
              alt={"title"}
              className="w-full h-full object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
