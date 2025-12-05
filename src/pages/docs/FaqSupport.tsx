import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FaqSupport = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const faqs = [
    {
      id: "faq-1",
      question: "How long does domain registration take?",
      answer:
        "Domain registration is usually completed within minutes. However, some TLDs may require additional verification, which could take up to 24 hours. You'll receive email confirmation once your domain is fully registered and active.",
    },
    {
      id: "faq-2",
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. You can add funds to your account using any of these methods. The minimum credit amount is $50.",
    },
    {
      id: "faq-3",
      question: "Can I transfer domains between registrars?",
      answer:
        "Yes, we support domain transfers. You'll need the authorization code (EPP code) from your current registrar. The transfer process typically takes 5-7 days. We'll handle everything once you initiate the transfer through your dashboard.",
    },
    {
      id: "faq-4",
      question: "What is WHOIS privacy and should I enable it?",
      answer:
        "WHOIS privacy hides your personal information from the public WHOIS database. It's recommended for privacy protection. We offer WHOIS privacy for most TLDs at an additional cost. You can enable or disable it anytime.",
    },
    {
      id: "faq-5",
      question: "How do I set up nameservers?",
      answer:
        "You can configure nameservers in your domain management dashboard. You can use our default nameservers, custom nameservers, or point to your hosting provider's nameservers. Changes typically take 24-48 hours to propagate.",
    },
    {
      id: "faq-6",
      question: "Do you offer auto-renewal for domains?",
      answer:
        "Yes, we offer automatic renewal. You can enable auto-renewal for your domains, and we'll automatically renew them before expiration. You'll receive reminders before renewal charges are applied.",
    },
    {
      id: "faq-7",
      question: "What is your refund policy?",
      answer:
        "Domain registrations are non-refundable as per ICANN policies. However, if you register a domain in error, contact our support team immediately - we may be able to help in some cases.",
    },
    {
      id: "faq-8",
      question: "How do I delete a domain?",
      answer:
        "You can request domain deletion from your dashboard. Once deleted, the domain will stop renewing. Note that the domain will still remain registered until expiration, and you won't receive a refund.",
    },
    {
      id: "faq-9",
      question: "What TLDs do you support?",
      answer:
        "We support over 500 TLDs including popular ones like .com, .net, .org, country codes, and new gTLDs. Check our pricing page for the complete list and current prices.",
    },
    {
      id: "faq-10",
      question: "Can I sell domains to my customers?",
      answer:
        "Absolutely! That's what our reseller program is designed for. You set your own pricing markup and sell domains to your customers. They appear under your brand with your white-label branding.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ & Support - Rapid Domain | 24/7 Customer Support</title>
        <meta
          name="description"
          content="Find answers to common questions about domain registration, transfers, and our services. Our 24/7 support team is ready to help."
        />
        <meta name="keywords" content="FAQ, support, domain help, customer support" />
      </Helmet>

      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                FAQ & Support
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions or reach out to our 24/7 support team.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.id} className="rounded-lg border border-border bg-card overflow-hidden">
                    <button
                      onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                    >
                      <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                          openFaqId === faq.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaqId === faq.id && (
                      <div className="px-6 py-4 border-t border-border bg-muted/30 text-foreground">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Get Support</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email Support */}
                  <div className="rounded-lg bg-muted/50 p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Send us an email and we'll respond within 2 hours during business hours.
                    </p>
                    <a href="mailto:support@rapiddomain.com" className="text-primary font-medium hover:underline">
                      support@rapiddomain.com
                    </a>
                  </div>

                  {/* Live Chat */}
                  <div className="rounded-lg bg-muted/50 p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Chat with our support team in real-time. Available 24/7.
                    </p>
                    <button className="text-primary font-medium hover:underline">
                      Start Live Chat
                    </button>
                  </div>

                  {/* Phone Support */}
                  <div className="rounded-lg bg-muted/50 p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Call us directly for immediate assistance.
                    </p>
                    <a href="tel:+1-800-123-4567" className="text-primary font-medium hover:underline">
                      +1 (800) 123-4567
                    </a>
                  </div>

                  {/* Ticket System */}
                  <div className="rounded-lg bg-muted/50 p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Support Tickets</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Submit a support ticket from your dashboard. We'll track and follow up.
                    </p>
                    <a href="#" className="text-primary font-medium hover:underline">
                      Open Support Ticket
                    </a>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="rounded-lg bg-primary/5 border border-primary p-6">
                  <h3 className="font-semibold text-foreground mb-3">Support Hours</h3>
                  <div className="space-y-2 text-sm text-foreground">
                    <div className="flex justify-between">
                      <span>Email & Chat Support:</span>
                      <span className="font-medium">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone Support:</span>
                      <span className="font-medium">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dedicated Account Manager:</span>
                      <span className="font-medium">Monday - Friday, 9am - 6pm EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Knowledge Base */}
            <div className="mt-12 rounded-lg border border-border bg-card p-8">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Knowledge Base</h2>
              <p className="text-foreground mb-6">
                Browse our comprehensive knowledge base articles for detailed guides and tutorials.
              </p>
              <div className="space-y-3">
                <a href="#" className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                  <h3 className="font-semibold text-primary mb-1">How to Register a Domain</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step guide for domain registration</p>
                </a>
                <a href="#" className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                  <h3 className="font-semibold text-primary mb-1">Transferring Domains to Rapid Domain</h3>
                  <p className="text-sm text-muted-foreground">Complete guide to domain transfers</p>
                </a>
                <a href="#" className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                  <h3 className="font-semibold text-primary mb-1">Managing DNS Records</h3>
                  <p className="text-sm text-muted-foreground">Learn how to configure DNS for your domain</p>
                </a>
                <a href="#" className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                  <h3 className="font-semibold text-primary mb-1">Integrating with WHMCS</h3>
                  <p className="text-sm text-muted-foreground">Setup and configuration for WHMCS users</p>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FaqSupport;
