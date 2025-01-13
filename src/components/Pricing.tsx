export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started with domain search",
      features: [
        "Basic 4 letter domain search",
        "5 searches per day",
        "Basic availability check",
        "Email support",
      ],
      limitations: [
        "No bulk search",
        "Limited price comparison",
        "No API access",
      ],
      cta: "Start Free",
      href: "/signup",
      popular: false,
    },
    {
      name: "Monthly",
      price: "9.99",
      originalPrice: "19.99",
      period: "month",
      description: "Most flexible option for domain professionals",
      features: [
        "Advanced 4 letter domain search",
        "Unlimited searches",
        "Real-time availability check",
        "Priority support",
        "Full bulk search access",
        "Complete price comparison",
        "Basic API access",
        "Market trends data",
      ],
      limitations: [],
      cta: "Start Monthly Plan",
      href: "/pro/monthly",
      popular: false,
    },
    {
      name: "Annual",
      price: "49.99",
      originalPrice: "239.88",
      period: "year",
      description: "Best value for serious domain investors",
      features: [
        "Everything in Monthly plan",
        "Advanced API access",
        "Premium support",
        "Early access to new features",
        "Extended market analytics",
        "Custom alerts",
        "Priority bulk processing",
      ],
      limitations: [],
      cta: "Start Annual Plan",
      href: "/pro/annual",
      popular: true,
      savings: "Save 80%",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl ${
                plan.popular
                  ? 'ring-2 ring-primary shadow-lg'
                  : 'border border-gray-200'
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Best Value
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  {plan.price !== "0" && (
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 line-through">
                        ${plan.originalPrice}
                      </span>
                      {plan.savings && (
                        <span className="ml-2 text-sm text-green-600 font-medium">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                  )}
                  <span className="text-4xl font-bold">
                    {plan.price !== "0" && "$"}
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
                {plan.limitations.map((limitation) => (
                  <li key={limitation} className="flex items-center text-gray-400">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {limitation}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block w-full text-center px-6 py-3 rounded-md font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            All plans include basic features. Cancel or change plans anytime.
          </p>
        </div>
      </div>
    </section>
  );
} 