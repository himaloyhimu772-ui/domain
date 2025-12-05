import { UserPlus, Key, Download, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up for free in under 2 minutes. No credit card required to get started.",
  },
  {
    icon: Key,
    step: "02",
    title: "Get Your API Keys",
    description: "Access your unique API credentials from the dashboard immediately after registration.",
  },
  {
    icon: Download,
    step: "03",
    title: "Install WHMCS Module",
    description: "Download and install our WHMCS registrar module with one-click configuration.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Start Selling",
    description: "Set your prices, configure your branding, and start selling domains to your customers.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="absolute inset-0 bg-[var(--gradient-card)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Get Started in{" "}
            <span className="text-primary">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signup to selling domains in minutes, not days.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-primary/10 lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
