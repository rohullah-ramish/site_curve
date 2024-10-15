"use client";

import { useState, useEffect, ReactNode, FC } from "react";

import { Menu, ChevronDown, X } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  children: ReactNode;
  hasDropdown?: boolean;
}

interface WebsiteCardProps {
  name: string;
  traffic: string;
  change: string;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavItem: FC<NavItemProps> = ({
    href,
    children,
    hasDropdown = false,
  }) => (
    <Link
      href={href}
      className="flex items-center text-gray-300 hover:text-white"
    >
      {children}
      {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
    </Link>
  );

  const WebsiteCard: FC<WebsiteCardProps> = ({ name, traffic, change }) => (
    <div className="flex flex-col items-center bg-gray-600 rounded p-2 text-xs min-w-[100px]">
      <span className="text-gray-300">{name}</span>
      <div className="flex justify-around">
        <span className="text-white">{traffic}</span>
        <span
          className={change.includes("↑") ? "text-green-500" : "text-red-500"}
        >
          {change}
        </span>
      </div>
    </div>
  );

  return (
    <header className="bg-[#040033]">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              SiteCurve
            </Link>
          </div>
          {isMobile ? (
            <button onClick={toggleMobileMenu} className="text-white">
              <Menu className="h-6 w-6" />
            </button>
          ) : (
            <div className="hidden lg:flex items-center space-x-4">
              <NavItem href="/" hasDropdown>
                Features
              </NavItem>
              <NavItem href="/">Pricing</NavItem>
              <NavItem href="/" hasDropdown>
                Company
              </NavItem>
              <NavItem href="/" hasDropdown>
                Resources
              </NavItem>
              <NavItem href="/">Enterprise</NavItem>
              <NavItem href="/">Login</NavItem>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                Create Landscape
              </button>
              <button className="bg-white text-indigo-900 px-4 py-2 rounded">
                Discover Landscapes
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="bg-[#040033] py-2 overflow-x-auto">
        <div className="container mx-auto flex space-x-2 lg:space-x-4">
          <WebsiteCard
            name="garagegyws.com"
            traffic="4.2M"
            change="↓ 52%"
          />
          <WebsiteCard name="capitalone.com" traffic="4.2M" change="↑ 52%" />
          <WebsiteCard name="chase.com" traffic="4.2M" change="↓ 52%" />
          <WebsiteCard name="citi.com" traffic="4.2M" change="↑ 52%" />
          <WebsiteCard name="costco.com" traffic="4.2M" change="↑ 52%" />
          <WebsiteCard name="amex.com" traffic="4.2M" change="↓ 52%" />
          <WebsiteCard name="youtube.com" traffic="4.2M" change="↓ 52%" />
          <WebsiteCard name="figma.com" traffic="4.2M" change="↑ 52%" />
          <WebsiteCard name="google.com" traffic="4.2M" change="↑ 52%" />
          <WebsiteCard name="microsoft.com" traffic="4.2M" change="↑ 52%" />
        </div>
      </div>
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-indigo-900 z-50 overflow-y-auto">
          <div className="flex justify-between items-center p-4">
            <Link href="/" className="text-white text-xl font-bold">
              SiteCurve
            </Link>
            <button onClick={toggleMobileMenu} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <NavItem href="/features" hasDropdown>
              Features
            </NavItem>
            <NavItem href="/pricing">Pricing</NavItem>
            <NavItem href="/company" hasDropdown>
              Company
            </NavItem>
            <NavItem href="/resources" hasDropdown>
              Resources
            </NavItem>
            <div className="pl-4 space-y-2">
              <NavItem href="/blog">Blog</NavItem>
              <NavItem href="/community">Community</NavItem>
              <NavItem href="/knowledge-base">Knowledge Base</NavItem>
              <NavItem href="/roadmap">Roadmap</NavItem>
              <NavItem href="/comparisons">Comparisons</NavItem>
            </div>
            <NavItem href="/enterprise">Enterprise</NavItem>
            <NavItem href="/login">Login</NavItem>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded">
              Create Landscape
            </button>
            <button className="w-full bg-white text-indigo-900 px-4 py-2 rounded mt-2">
              Discover Landscapes
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
