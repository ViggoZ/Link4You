export function Footer() {
  const footerLinks = {
    "Popular Domain Tools": [
      { name: "Domain Price Compare", href: "/price-compare" },
      { name: "Bulk Domain Search", href: "/bulk-search" },
      { name: "Domain Name Generator", href: "/generator" },
      { name: "Lean Domain Search", href: "/lean-search" },
      { name: "Domain Age Checker", href: "/age" },
      { name: "WHOIS Lookup", href: "/whois" },
    ],
    "Country Domains": [
      { name: ".BE Domain Registration", href: "/be-domain" },
      { name: ".BIO Domain Search", href: "/bio-domain" },
      { name: ".ME Domain Names", href: "/me-domain" },
      { name: ".DE Domain Names", href: "/de-domain" },
      { name: ".AT Domain Search", href: "/at-domain" },
      { name: ".PL Domain Names", href: "/pl-domain" },
    ],
    "Special Domain Search": [
      { name: "4 Letter Domains", href: "/4-letter" },
      { name: "AI Domain Names", href: "/ai-domains" },
      { name: ".CC Domain Names", href: "/cc-domain" },
      { name: "Expired Domains", href: "/expired" },
      { name: "Premium Domains", href: "/premium" },
      { name: "Short Domains", href: "/short-domains" },
    ],
    "Domain Management": [
      { name: "Domain Expiry Checker", href: "/expiry" },
      { name: "Domain Transfer Guide", href: "/transfer" },
      { name: "Domain Monitoring", href: "/monitoring" },
      { name: "Bulk Domain Tools", href: "/bulk-tools" },
      { name: "Domain Status Check", href: "/status" },
    ],
    "Domain Analysis": [
      { name: "Domain Worth Calculator", href: "/worth" },
      { name: "SEO Analysis", href: "/seo" },
      { name: "DNS Checker", href: "/dns" },
      { name: "Domain History", href: "/history" },
      { name: "Sales History", href: "/sales" },
    ],
    "Domain Security": [
      { name: "Security Check", href: "/security" },
      { name: "Protection Guide", href: "/protection" },
      { name: "Privacy Settings", href: "/privacy" },
      { name: "SSL Certificate", href: "/ssl" },
    ],
    "Resources": [
      { name: "Domain Buying Guide", href: "/buying-guide" },
      { name: "Domain Investment", href: "/investment" },
      { name: "Price Trends", href: "/trends" },
      { name: "FAQ", href: "/faq" },
      { name: "Blog", href: "/blog" },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-500">
          <p>© {new Date().getFullYear()} Domain Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 