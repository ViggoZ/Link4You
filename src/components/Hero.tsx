export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Grid */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Best Domain Name Tools & Search
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find and compare domain names with our professional tools. Trusted by domain investors and business owners worldwide.
            </p>
            
            {/* Featured Tool */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
              <div className="flex items-center mb-4 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h2 className="text-2xl font-semibold ml-3">
                  4 Letter Domain Checker
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                Search available 4 letter domain names instantly. Find valuable CVCV pattern domains like BAKA, KUMA, NEKO.
              </p>
              <div>
                <a 
                  href="/4-letter"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors shadow-sm hover:shadow"
                >
                  Start Searching
                </a>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <svg className="w-5 h-5 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Fast & Accurate</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <svg className="w-5 h-5 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Price Compare</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <svg className="w-5 h-5 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Bulk Search</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <svg className="w-5 h-5 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Real-time Data</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
            <div className="relative p-8">
              {/* Domain Cards Container */}
              <div className="relative h-[500px]"> {/* Fixed height container */}
                {/* Main Domain Cards */}
                <div className="absolute right-4 top-4 space-y-6"> {/* Organized stack of cards */}
                  {/* Card 1 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-transform">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="font-mono text-lg">KUMA.com</span>
                    </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform translate-x-4 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="font-mono text-lg">BAKA.com</span>
                    </div>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform -translate-x-4 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="font-mono text-lg">NEKO.com</span>
                    </div>
                  </div>
                </div>

                {/* Grid Lines */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    {/* Background Grid */}
                    <defs>
                      <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Accent Lines */}
                    <path d="M 200 0 L 200 400" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
                    <path d="M 0 200 L 400 200" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
                    
                    {/* Decorative Circles */}
                    <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
                    <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
                  </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-full blur-xl" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-xl" />

                {/* Small Dots */}
                <div className="absolute top-12 right-24 w-2 h-2 bg-primary rounded-full" />
                <div className="absolute bottom-24 left-12 w-2 h-2 bg-blue-500 rounded-full" />
                <div className="absolute top-1/2 right-12 w-2 h-2 bg-purple-500 rounded-full" />

                {/* Status Indicators */}
                <div className="absolute top-8 left-8 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-500">Live Search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 