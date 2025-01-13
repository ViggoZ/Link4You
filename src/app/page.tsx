import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PopularTools } from "@/components/PopularTools";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { UseCases } from "@/components/UseCases";
import { QuickStart } from "@/components/QuickStart";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { ToolIntro } from "@/components/ToolIntro";
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <PopularTools />
        <WhyChooseUs />
        <UseCases />
        <QuickStart />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Newsletter />
        <ToolIntro 
          title="Domain Tools" 
          description="Explore our comprehensive suite of domain tools designed to help you manage, analyze, and secure your domains effectively." 
        />
        <Footer />
      </main>
    </>
  );
}
