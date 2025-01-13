export function UseCases() {
  const cases = [
    {
      title: "Domain Investors",
      description: "Find valuable 4-letter domains and monitor market trends. Make data-driven investment decisions with our professional tools.",
      features: [
        "CVCV pattern search",
        "Bulk availability check",
        "Historical sales data",
        "Price trend analysis"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Startup Founders",
      description: "Secure the perfect domain for your startup. Compare prices across registrars and find available brandable domains.",
      features: [
        "Brandable domain search",
        "Price comparison",
        "Domain availability check",
        "Registration guide"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Brand Managers",
      description: "Protect your brand across multiple domain extensions. Monitor domain expiration and manage your domain portfolio.",
      features: [
        "Multi-extension search",
        "Domain monitoring",
        "Expiration alerts",
        "Portfolio management"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Who Uses Our Domain Tools?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional tools designed for everyone in the domain industry. From investors to brand managers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((useCase) => (
            <div 
              key={useCase.title} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-primary bg-primary/10 rounded-xl">
                {useCase.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {useCase.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {useCase.description}
              </p>
              
              <ul className="space-y-2">
                {useCase.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/4-letter"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Start Using Our Tools
          </a>
        </div>
      </div>
    </section>
  );
} 