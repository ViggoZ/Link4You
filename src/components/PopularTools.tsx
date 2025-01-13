export function PopularTools() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Professional Domain Search Tools
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover valuable domain names with our specialized search tools. Built for domain investors and businesses.
          </p>
        </div>

        {/* Available Tool */}
        <div className="bg-white rounded-xl shadow-sm mb-12 max-w-4xl mx-auto">
          <div className="p-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  Available Now
                </div>
                <h3 className="text-2xl font-semibold mb-4">4 Letter Domain Search</h3>
                <p className="text-gray-600 mb-6">
                  Find available 4 letter domains with our advanced search features. Perfect for brand names and domain investments.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    CVCV Pattern Search
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Real-time Availability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Price Comparison
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Bulk Search
                  </li>
                </ul>
              </div>
            </div>
            <a 
              href="/4-letter"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Try 4 Letter Domain Search
            </a>
          </div>
        </div>

        {/* Coming Soon Tools */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Bulk Domain Search",
              description: "Check availability of multiple domains instantly. Compare prices across registrars.",
              href: "/bulk-search",
            },
            {
              title: "Domain Price Compare",
              description: "Find the best prices for domain registration, renewal, and transfers.",
              href: "/price-compare",
            },
            {
              title: "Country Domain Search",
              description: "Search for available country-specific domain extensions (.de, .uk, .jp).",
              href: "/country-domains",
            },
          ].map((tool) => (
            <div key={tool.title} className="bg-white rounded-xl p-6 text-center">
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4">
                Coming Soon
              </div>
              <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <a 
                href={tool.href}
                className="text-primary hover:text-primary/90 font-medium"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 