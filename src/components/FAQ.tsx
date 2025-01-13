"use client";

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a 4 letter domain name?",
      answer: "A 4 letter domain name consists of exactly four characters before the extension (like .com). These domains are popular for their memorability and brandability. Common patterns include CVCV (Consonant-Vowel-Consonant-Vowel) like 'BAKA' or 'KUMA'."
    },
    {
      question: "How much do 4 letter domains cost?",
      answer: "4 letter domain prices vary widely based on factors like pattern, meaning, and extension. Unregistered 4 letter .com domains typically start from $10-20 for registration. Premium or previously registered domains can range from hundreds to thousands of dollars."
    },
    {
      question: "What makes a valuable 4 letter domain?",
      answer: "Valuable 4 letter domains often feature pronounceable patterns (like CVCV), represent words or abbreviations, or have meaning in multiple languages. Domains that could be used as brand names or have commercial potential are typically more valuable."
    },
    {
      question: "How does the bulk domain search work?",
      answer: "Our bulk domain search tool allows you to check multiple 4 letter domains simultaneously. You can input a list of domains or use pattern-based generation. The tool checks availability across major registrars and provides price comparisons for available domains."
    },
    {
      question: "Which domain extensions do you support?",
      answer: "We support all major domain extensions including .com, .net, .org, and popular country-code TLDs. Our tools primarily focus on .com domains as they're most valuable, but you can search other extensions as well."
    },
    {
      question: "How often is domain availability updated?",
      answer: "Domain availability data is updated in real-time when you perform a search. We connect directly to domain registries and registrars to ensure the most accurate and current information."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our domain tools and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
} 