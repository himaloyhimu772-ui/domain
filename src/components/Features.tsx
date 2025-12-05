import { Code2, Globe2, Layers, Shield, Zap, Server } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Powerful API Access",
    description:
      "RESTful API with comprehensive documentation. Register, transfer, and manage domains programmatically with ease.",
  },
  {
    icon: Server,
    title: "WHMCS Integration",
    description:
      "One-click WHMCS registrar module installation. Seamlessly integrate domain registration into your existing workflow.",
  },
  {
    icon: Globe2,
    title: "500+ TLDs Available",
    description:
      "Access to all popular TLDs including .com, .net, .org, country codes, and new gTLDs at competitive wholesale prices.",
  },
  {
    icon: Shield,
    title: "White-Label Branding",
    description:
      "Your customers see only your brand. Complete white-label solution with customizable emails and invoices.",
  },
  {
    icon: Zap,
    title: "Instant Provisioning",
    description:
      "Domains are registered and activated instantly. Real-time availability checks and automated DNS configuration.",
  },
  {
    icon: Layers,
    title: "Zero Setup Fees",
    description:
      "No upfront costs or monthly fees. Pay only for the domains you register at wholesale prices.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Everything You Need to{" "}
            <span className="text-primary">
              Resell Domains
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for developers and hosting providers who want to offer domain registration 
            services without the complexity.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
