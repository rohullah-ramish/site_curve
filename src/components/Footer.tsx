import Link from 'next/link'
import { Mail, MapPin, Twitter, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a29] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Ahead of The Curve</h2>
          <p className="text-xl mb-6">Discover Who's Winning And Losing In SEO And Why.</p>
          <button className="bg-[#4c4cff] hover:bg-[#3a3aff] text-white font-bold py-3 px-6 rounded-md text-lg">
            Start 14-Day Free Trial
          </button>
          <p className="mt-4 text-sm">No Credit Card Required</p>
        </div>
        <hr className='mb-5'/>
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">SiteCurve</h3>
            <div className="flex items-center mb-2">
              <Mail className="mr-2" size={18} />
              <span>support@sitecurve.com</span>
            </div>
            <div className="flex items-center mb-4">
              <MapPin className="mr-2" size={18} />
              <span>1520 Belle View Bld #3566, Alexandria VA</span>
            </div>
            <div className="flex space-x-4">
              <Twitter className="hover:text-[#4c4cff] cursor-pointer" />
              <Youtube className="hover:text-[#4c4cff] cursor-pointer" />
              <Linkedin className="hover:text-[#4c4cff] cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Community</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Affiliate Program</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Use Cases</h4>
              <ul className="space-y-2">
                <li><Link href="#">Keyword Tracking</Link></li>
                <li><Link href="#">Market Share Tracking</Link></li>
                <li><Link href="#">SERP feature monitoring</Link></li>
                <li><Link href="#">Google Update Winners</Link></li>
                <li><Link href="#">SEO Collaboration</Link></li>
                <li><Link href="#">Agency Lead Generation</Link></li>
                <li><Link href="#">Competitor Research</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Comparisons</h4>
              <ul className="space-y-2">
                <li><Link href="#">vs AHREFs</Link></li>
                <li><Link href="#">vs SEMRush</Link></li>
                <li><Link href="#">vs Moz</Link></li>
                <li><Link href="#">vs SimilarWeb</Link></li>
                <li><Link href="#">vs SERanking</Link></li>
                <li><Link href="#">vs Accuranker</Link></li>
                <li><Link href="#">vs Sistrix</Link></li>
                <li><Link href="#">vs Bright Edge</Link></li>
                <li><Link href="#">vs Serpstat</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Solutions</h4>
              <ul className="space-y-2">
                <li><Link href="#">For Agencies</Link></li>
                <li><Link href="#">For Consultants</Link></li>
                <li><Link href="#">For Enterprise</Link></li>
                <li><Link href="#">For Small Business</Link></li>
              </ul>
              <h4 className="font-semibold mt-6 mb-3">Features</h4>
              <ul className="space-y-2">
                <li><Link href="#">Winners & Losers</Link></li>
                <li><Link href="#">Google Visibility Index</Link></li>
                <li><Link href="#">Paid Landscapes</Link></li>
                <li><Link href="#">Public Landscapes</Link></li>
                <li><Link href="#">AI Segmentation</Link></li>
                <li><Link href="#">Volatility Tracking</Link></li>
                <li><Link href="#">Industry Aggregation</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 SiteCurve. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link href="#" className="hover:text-[#4c4cff]">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#4c4cff]">Terms of Service</Link>
              <Link href="#" className="hover:text-[#4c4cff]">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}