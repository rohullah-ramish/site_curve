import Footer from "../components/Footer";
import FAQ from "../components/Frequently";
import Header from "../components/Header";
import { CreditCard, Lock, DollarSign } from "lucide-react";
import PlanSection from "../components/PlanSection";
import { Button } from "../components/ui/button";
import Visibility from "@/components/Visibility";
import SEO from "@/components/SeoSection";
import TabsSection from "@/components/WinnerSection";
import SEOVisibility from "@/components/SeoVisibaility";
export default function Home() {
  const landscapeOptions = [
    {
      title: "Public Landscapes",
      icon: <Lock className="w-6 h-6 text-gray-600" />,
      description:
        "With public landscapes, anyone on SiteCurve can access your data and insights and join you in discussions on your landscape. Ideal for professionals looking to openly share and collaborate on insights, contributing to industry-wide discussions and building a reputation as thought leaders.",
      cta: "Create Public Landscape",
    },
    {
      title: "Private Landscapes",
      icon: <Lock className="w-6 h-6 text-gray-600" />,
      description:
        "With private landscapes, only users who apply or are invited and are accepted by you can access your data and insights. Ideal for companies who only want to share data among employees or for agencies who only want to share a landscape with a client.",
      cta: "Create Private Landscape",
    },
    {
      title: "Paid Landscapes",
      icon: <DollarSign className="w-6 h-6 text-gray-600" />,
      description:
        "With paid landscapes, only users who pay you for access or are directly invited can view your exclusive data, insights, and discussions. Ideal for experts looking to monetize their knowledge by offering premium content and in-depth analysis to clients or subscribers.",
      cta: "Create Paid Landscape",
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="md:hidden">
              Discover Who&apos;s Winning & Losing In SEO And Why
            </span>
            <span className="hidden md:inline">
              Discover Who&apos;s Winning and Losing in SEO and Why
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Spot winning and losing websites across your competitive landscape
            in different niches, website types, and business models.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-semibold rounded-md text-white bg-[#4B42F4] md:py-4 md:text-md md:px-10"
              >
                Create Landscape - It&apos;s Free
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-semibold rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-md md:px-10"
              >
                <span className="md:hidden">Schedule Product Demo</span>
                <span className="hidden md:inline">Schedule Demo</span>
              </a>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center text-sm text-gray-500">
            <CreditCard className="h-4 w-4 mr-1" />
            No Credit Card Required
          </div>
        </div>
      </div>
      <TabsSection />
      <SEOVisibility />
      <SEO />
      <Visibility />
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" className="mb-6">
              Set Access
            </Button>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Control Access and Make Money From Your Landscapes with Public,
              Private or Paid Options.
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl">
              Whether you're looking to share insights with the broader
              community, collaborate privately with select teams, or monetize
              your expertise, SiteCurve offers unique visibility options to get
              the most value out of your data.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {landscapeOptions.map((option, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center mb-2">
                  {option.icon}
                  <h3 className="text-xl font-semibold ml-2">{option.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {option.description}
                </p>
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-800 p-0 justify-start"
                >
                  {option.cta} →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PlanSection />
      <FAQ />
      <Footer />
    </div>
  );
}
