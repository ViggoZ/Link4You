interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "How to Choose the Perfect Domain Name for Your Business",
    description: "Learn the key factors to consider when selecting a domain name that will help your business succeed online.",
    date: "Mar 15, 2024",
    category: "Domain Tips",
    imageUrl: "#",
    href: "/blog/choose-perfect-domain"
  },
  {
    title: "Domain Investment Strategies for 2024",
    description: "Discover the latest trends and strategies in domain investing that are working in today's market.",
    date: "Mar 12, 2024",
    category: "Investment",
    imageUrl: "/images/blog/domain-investment.jpg",
    href: "/blog/investment-strategies-2024"
  },
  {
    title: "The Ultimate Guide to Domain Name Security",
    description: "Protect your valuable domain names with these essential security measures and best practices.",
    date: "Mar 10, 2024",
    category: "Security",
    imageUrl: "/images/blog/domain-security.jpg",
    href: "/blog/domain-security-guide"
  },
  {
    title: "Understanding Domain Name Valuation",
    description: "Learn how to accurately assess the value of domain names using professional valuation methods.",
    date: "Mar 8, 2024",
    category: "Valuation",
    imageUrl: "/images/blog/domain-valuation.jpg",
    href: "/blog/domain-valuation"
  }
];

export function Blog() {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-lg text-gray-600">
              Expert insights and guides about domain names, investing, and web presence.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <a 
                key={index}
                href={post.href}
                className="group rounded-xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-50 overflow-hidden">
                  <svg 
                    className="w-full h-full text-gray-200 p-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm2 3h12v2H6V9zm0 4h8v2H6v-2z" />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="px-2 py-1 bg-gray-50 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <a 
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              View all posts
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }