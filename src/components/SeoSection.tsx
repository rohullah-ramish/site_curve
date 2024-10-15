import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SEO() {
  const solutions = [
    {
      title: "For SEO Agencies",
      image: "https://www.geckoboard.com/uploads/Digital-dashboard-example.png",
      description: "SiteCurve provides agencies with a turnkey solution to track and report on clients' SEO performance. Identify market winners and losers, manage thousands of keywords, and deliver actionable insights without the hassle of managing multiple tools.",
      link: "Explore SiteCurve for Agencies",
      href: "/agencies"
    },
    {
      title: "For Enterprises",
      image: "https://www.geckoboard.com/uploads/Digital-dashboard-example.png",
      description: "Enterprises can leverage SiteCurve for a comprehensive view of their SEO landscape, both locally and globally. Monitor competitors, track performance across different segments, and stay on top of market trends with powerful keyword and trend analysis.",
      link: "Explore SiteCurve for Enterprise",
      href: "/enterprise"
    },
    {
      title: "For SEO Professionals",
      image: "https://www.geckoboard.com/uploads/Digital-dashboard-example.png",
      description: "SiteCurve provides SEO professionals with actionable insights, helping you track competitors, engage in discussions, and build portfolios to showcase your wins. Leverage these tools to refine your strategy and stay ahead in the competitive SEO landscape.",
      link: "Explore SiteCurve for Professionals",
      href: "/professionals"
    }
  ]

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-12">
          <Button variant="outline" className="mb-6">SEO Intelligence</Button>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
            The Most Complete SEO Landscaping Solution to Help Inform What You Should (and Shouldn't) Do to Win in Search
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 ">
            Tailored SEO solutions for every need. Whether you're an agency managing multiple clients, an enterprise tracking global performance, or an SEO professional looking for critical insights, SiteCurve has you covered with the tools to drive success for your business.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-transparent rounded-lg overflow-hidden shadow-lg">
              <Image
                src={solution.image}
                alt={solution.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <Link 
                  href={solution.href}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {solution.link} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}