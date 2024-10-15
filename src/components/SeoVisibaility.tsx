import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";

export default function SEOVisibility() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-12">
          <Button variant="outline" className="mb-6">
            SEO Visibility
          </Button>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
            The Most Complete SEO Landscaping Solution to Help Inform What You
            Should (and Shouldn&apos;t) Do to Win in Search
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 ">
            Tailored SEO solutions for every need. Whether you&apos;re an agency
            managing multiple clients, an enterprise tracking global
            performance, or an SEO professional looking for critical insights,
            SiteCurve has you covered with the tools to drive success for your
            business.
          </p>
        </div>

        <div className="flex w-4/5  mx-auto">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={
                "https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
              }
              alt={"title"}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 mx-auto my-4 w-4/5 ">
        <Card className="w-full max-w-[400px] mx-auto py-2">

          <CardContent>
            <div className="h-64 w-full">
              <Image
                src={
                  "https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
                }
                alt={"title"}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Owned & Not Owned % By Widget
              </h2>
              <p className="text-gray-600">
                Track your search feature visibility % each day and identify
                where competitors have an advantage.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[400px] mx-auto py-2">
          <CardContent>
            <div className="h-64 w-full">
              <Image
                src={
                  "https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
                }
                alt={"title"}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Widget Visibility by Keyword
              </h2>
              <p className="text-gray-600">
                See which keywords are generating the most visibility % by
                widget for you and your competitors.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
