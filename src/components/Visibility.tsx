"use client";
import { BarChart3, FolderKanban, MapPin, FileStack } from "lucide-react";

import { Button } from "./ui/button";
import Image from "next/image";

export default function Visibility() {
  const analysisOptions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "By Website",
      description:
        "Gain a comprehensive view of a single website's SEO performance across all of the keywords it ranks on.",
    },
    {
      icon: <FolderKanban className="w-6 h-6 text-blue-600" />,
      title: "By Category",
      description:
        "Analyze SEO trends and market movement in across categories, to help you understand market dynamics and opportunities.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "By Location",
      description:
        "For multi-location businesses, track and compare performance of websites across locations to inform your local SEO strategy",
    },
    {
      icon: <FileStack className="w-6 h-6 text-blue-600" />,
      title: "By Index",
      description:
        "Create and monitor custom groups of keywords to track performance for specific segments of your business.",
    },
  ];

  return (
    <>
      <section className="bg-[#E6E6FA] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <Image
                src={
                  "https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
                }
                alt="Landscape Discussions Interface"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/3 space-y-6">
              <div className="text-sm font-semibold">
                <Button variant="outline" className="mb-6">
                  Discussions
                </Button>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Discuss What You Discover with Members Inside Your Landscape
              </h2>
              <p className="text-xl text-gray-600">
                Landscapes act as dynamic communities where professionals can
                share discoveries, discuss market trends, and strategize
                together.
              </p>
              <p className="text-lg text-gray-600">
                Collaborate with clients, industry experts, team members, or
                peers to uncover and share unique insights inside landscapes.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
                Create Landscape
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" className="mb-6">
              360° Visibility
            </Button>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Analyze Your Landscape by Website, Category, Location or Index to
              Get 360° Market Visibility
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 space-y-6">
              {analysisOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex-shrink-0 mr-4">{option.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-2/3">
              <Image
                src={
                  "https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
                }
                alt="Dashboard"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
