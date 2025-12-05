import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, Code2 } from "lucide-react";

const WhmcsModule = () => {
  return (
    <>
      <Helmet>
        <title>WHMCS Module - Rapid Domain | Installation & Configuration</title>
        <meta
          name="description"
          content="Installation and configuration guide for the official Rapid Domain WHMCS registrar module."
        />
        <meta name="keywords" content="WHMCS module, registrar module, installation guide" />
      </Helmet>

      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                WHMCS Module
              </h1>
              <p className="text-lg text-muted-foreground">
                Installation and configuration guide for our official WHMCS registrar module.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Requirements */}
              <section className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Requirements</h2>
                <ul className="space-y-2 text-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    WHMCS version 8.0 or higher
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    PHP 7.4 or higher
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    cURL extension enabled
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Active Rapid Domain reseller account
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Valid API key from your reseller account
                  </li>
                </ul>
              </section>

              {/* Installation */}
              <section className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Installation Steps</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                      Download the Module
                    </h3>
                    <p className="text-foreground mb-2">
                      Download the module from your Rapid Domain account dashboard.
                    </p>
                    <div className="bg-muted p-3 rounded font-mono text-sm text-foreground">
                      Dashboard → My Account → Downloads → WHMCS Module
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                      Extract Files
                    </h3>
                    <p className="text-foreground mb-2">
                      Extract the downloaded ZIP file to your WHMCS modules/registrars directory.
                    </p>
                    <div className="bg-muted p-3 rounded font-mono text-sm text-foreground overflow-auto">
                      {`unzip rapiddomain.zip -d /path/to/whmcs/modules/registrars/`}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                      Set Permissions
                    </h3>
                    <p className="text-foreground mb-2">
                      Ensure proper file permissions for the WHMCS web server.
                    </p>
                    <div className="bg-muted p-3 rounded font-mono text-sm text-foreground overflow-auto">
                      {`chmod -R 755 /path/to/whmcs/modules/registrars/rapiddomain/
chmod -R 755 /path/to/whmcs/modules/registrars/rapiddomain/library/`}
                    </div>
                  </div>
                </div>
              </section>

              {/* Configuration */}
              <section className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Configuration</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Step 1: Activate Module</h3>
                    <ol className="space-y-2 text-foreground text-sm ml-4">
                      <li>1. Log in to WHMCS Admin Panel</li>
                      <li>2. Navigate to Setup → Domain Registrars</li>
                      <li>3. Click on "Rapid Domain" registrar</li>
                      <li>4. Check "Enabled" checkbox</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Step 2: Add API Credentials</h3>
                    <div className="bg-muted p-4 rounded-lg space-y-3 text-sm">
                      <div>
                        <label className="block font-semibold text-foreground mb-1">API Key</label>
                        <p className="text-muted-foreground">Enter your Rapid Domain API key</p>
                      </div>
                      <div>
                        <label className="block font-semibold text-foreground mb-1">API Secret</label>
                        <p className="text-muted-foreground">Enter your Rapid Domain API secret</p>
                      </div>
                      <div className="flex gap-2 items-start p-3 bg-amber-50 border border-amber-200 rounded">
                        <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-900">
                          Get your API credentials from Dashboard → Settings → API Keys
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Step 3: Configure TLD Settings</h3>
                    <ol className="space-y-2 text-foreground text-sm ml-4">
                      <li>1. Go to Setup → Products/Services</li>
                      <li>2. Select "Domain Registration" product</li>
                      <li>3. Click "Pricing" tab</li>
                      <li>4. Set pricing for TLDs you want to offer</li>
                      <li>5. Assign "Rapid Domain" as the registrar</li>
                      <li>6. Save changes</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Features */}
              <section className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Module Features</h2>
                <div className="space-y-2">
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Domain Registration</p>
                      <p className="text-sm text-muted-foreground">Register new domains directly from WHMCS</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Domain Renewal</p>
                      <p className="text-sm text-muted-foreground">Automatic renewal and reminder emails</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Domain Transfer</p>
                      <p className="text-sm text-muted-foreground">Seamless domain transfer management</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Nameserver Management</p>
                      <p className="text-sm text-muted-foreground">Update nameservers and DNS records</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">WHOIS Privacy</p>
                      <p className="text-sm text-muted-foreground">Enable/disable WHOIS privacy on domains</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Auto-sync</p>
                      <p className="text-sm text-muted-foreground">Automatic synchronization of domain status</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Troubleshooting</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      Module not appearing in registrars list
                    </h3>
                    <p className="text-sm text-foreground ml-7">
                      Check file permissions and ensure the module folder is named exactly "rapiddomain". Verify PHP version is 7.4 or higher.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      API key validation fails
                    </h3>
                    <p className="text-sm text-foreground ml-7">
                      Verify your API key is correct and active in your Rapid Domain account. Check for extra spaces or special characters.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      Domain registration fails
                    </h3>
                    <p className="text-sm text-foreground ml-7">
                      Ensure you have sufficient credit in your Rapid Domain account. Check domain availability and TLD configuration.
                    </p>
                  </div>
                </div>
              </section>

              {/* Support */}
              <div className="rounded-lg border border-primary bg-primary/5 p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our support team is available 24/7 to assist you with module installation and configuration.
                </p>
                <a href="#" className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium">
                  Contact Support
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

export default WhmcsModule;
