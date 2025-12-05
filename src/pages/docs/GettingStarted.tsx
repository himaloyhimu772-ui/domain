import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const GettingStarted = () => {
  return (
    <>
      <Helmet>
        <title>Getting Started Guide - Rapid Domain | Setup & First Registration</title>
        <meta
          name="description"
          content="Step-by-step guide to set up your reseller account and make your first domain registration with Rapid Domain."
        />
        <meta name="keywords" content="getting started, setup guide, domain registration, reseller account" />
      </Helmet>

      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                Getting Started Guide
              </h1>
              <p className="text-lg text-muted-foreground">
                Step-by-step guide to set up your reseller account and make your first domain registration.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Step 1 */}
              <section className="rounded-lg border border-border bg-card p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2 text-2xl font-bold text-foreground">Create Your Account</h2>
                    <p className="mb-4 text-muted-foreground">
                      Sign up for a free Rapid Domain reseller account in minutes.
                    </p>
                    <ol className="space-y-2 text-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Visit <code className="bg-muted px-2 py-1 rounded text-sm">rapiddomain.com</code> and click "Get Started"
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Enter your email, business name, and password
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Verify your email address
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Complete your profile with business information
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Step 2 */}
              <section className="rounded-lg border border-border bg-card p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2 text-2xl font-bold text-foreground">Generate API Keys</h2>
                    <p className="mb-4 text-muted-foreground">
                      Create API credentials to authenticate your requests.
                    </p>
                    <div className="bg-muted p-4 rounded-lg mb-4 font-mono text-sm">
                      <p className="text-foreground">Steps:</p>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>→ Go to Dashboard → Settings → API Keys</li>
                        <li>→ Click "Generate New Key"</li>
                        <li>→ Give it a descriptive name (e.g., "Production API")</li>
                        <li>→ Copy and securely store your API key and secret</li>
                      </ul>
                    </div>
                    <div className="flex gap-2 items-start p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-900">
                        <strong>Important:</strong> Never share your API secret. Regenerate if compromised.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 3 */}
              <section className="rounded-lg border border-border bg-card p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2 text-2xl font-bold text-foreground">Add Credit</h2>
                    <p className="mb-4 text-muted-foreground">
                      Add funds to your account to start registering domains.
                    </p>
                    <ol className="space-y-2 text-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Navigate to Billing → Add Funds
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Choose your payment method (Credit Card, PayPal, Bank Transfer)
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Enter amount (Minimum: $50)
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Complete payment - funds available instantly
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Step 4 */}
              <section className="rounded-lg border border-border bg-card p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2 text-2xl font-bold text-foreground">Register Your First Domain</h2>
                    <p className="mb-4 text-muted-foreground">
                      Use the dashboard or API to register your first domain.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Via Dashboard:</h3>
                        <ol className="space-y-1 text-foreground text-sm">
                          <li>1. Go to Domains → Register New</li>
                          <li>2. Search for your desired domain</li>
                          <li>3. Select registrant information</li>
                          <li>4. Configure nameservers</li>
                          <li>5. Complete registration</li>
                        </ol>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Via API:</h3>
                        <div className="bg-muted p-3 rounded font-mono text-xs text-foreground overflow-auto">
                          {`curl -X POST https://api.rapiddomain.com/v1/domains/register \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "domain": "example.com",
    "years": 1,
    "registrant": {
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@example.com"
    }
  }'`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 5 */}
              <section className="rounded-lg border border-border bg-card p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2 text-2xl font-bold text-foreground">Set Your Reseller Pricing</h2>
                    <p className="mb-4 text-muted-foreground">
                      Configure your markup and start selling to your customers.
                    </p>
                    <ol className="space-y-2 text-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Go to Settings → Domain Pricing
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Set your markup percentage or fixed margins
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Apply custom pricing per TLD if needed
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        Save and your pricing is live
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="rounded-lg border border-primary bg-primary/5 p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Ready to Start?</h3>
                <p className="text-muted-foreground mb-4">
                  Follow these 5 simple steps and you'll be selling domains in minutes.
                </p>
                <Button size="lg" className="group">
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GettingStarted;
