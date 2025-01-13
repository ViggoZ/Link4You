"use client";

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = [
    { 
      name: 'Tools', 
      href: '#',
      description: "Professional domain tools for investors and business owners",
      dropdownItems: [
        {
          featured: true,
          name: '4 Letter Domains',
          href: '/4-letter',
          description: 'Find valuable CVCV pattern domains instantly',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          ),
        },
        {
          name: 'Domain Availability',
          href: '/domain-check',
          description: 'Real-time domain availability checker',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
        {
          name: 'Bulk Search',
          href: '/bulk-search',
          description: 'Check multiple domains at once',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
        {
          name: 'Price Comparison',
          href: '/price-compare',
          description: 'Compare prices across registrars',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
      ]
    },
    { 
      name: 'Resources', 
      href: '#',
      dropdownItems: [
        { name: 'Domain Guide', href: '/guide' },
        { name: 'Market Trends', href: '/trends' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    { 
      name: 'Company', 
      href: '#',
      dropdownItems: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-2 text-primary font-bold text-xl"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
            </svg>
            <span>Best-URL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdownItems ? (
                  <button
                    className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdownItems && openDropdown === item.name && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white shadow-lg rounded-lg mt-1 border border-gray-100 overflow-hidden"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="p-4">
                      {'icon' in item.dropdownItems[0] ? (
                        // Tools menu with icons
                        <div className="grid gap-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors group"
                            >
                              {'icon' in dropdownItem && (
                                <div className="flex-shrink-0">
                                  <div className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors">
                                    {dropdownItem.icon}
                                  </div>
                                </div>
                              )}
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                                  {dropdownItem.name}
                                </p>
                                {'description' in dropdownItem && (
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {dropdownItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        // Resources and Company menus without icons
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="px-2 py-1.5 hover:bg-gray-50 rounded-md text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-2 py-1 text-gray-600"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-2 py-1 text-gray-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mobile Dropdown */}
                  {item.dropdownItems && openDropdown === item.name && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-2 py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4 flex flex-col space-y-4">
                <Link
                  href="/login"
                  className="px-2 py-1 text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 