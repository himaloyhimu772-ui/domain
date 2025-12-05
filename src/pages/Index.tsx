import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import PricingGrid from "@/components/PricingGrid";
import Documentation from "@/components/Documentation";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rapid Domain - Free Domain Reseller Platform | Start Selling Domains Today</title>
        <meta
          name="description"
          content="Become a domain reseller for free. Get API access, WHMCS integration, 500+ TLDs, and complete white-label branding. Start selling domains under your own brand."
        />
        <meta name="keywords" content="domain reseller, WHMCS module, domain API, white-label domains, sell domains" />
        <link rel="canonical" href="https://rapiddomain.com" />
      </Helmet>

      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <PricingGrid />
          <Documentation />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
