import { Button } from "@/components/ui/button";
import { Book, Code, FileText, HelpCircle, ExternalLink, ArrowRight } from "lucide-react";

const docs = [
  {
    icon: Book,
    title: "Getting Started Guide",
    description: "Step-by-step guide to set up your reseller account and make your first domain registration.",
    link: "#",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation with examples in PHP, Python, Node.js, and more.",
    link: "#",
  },
  {
    icon: FileText,
    title: "WHMCS Module",
    description: "Installation and configuration guide for our official WHMCS registrar module.",
    link: "#",
  },
  {
    icon: HelpCircle,
    title: "FAQ & Support",
    description: "Find answers to common questions or reach out to our 24/7 support team.",
    link: "#",
  },
];

const Documentation = () => {
  return (
    <section id="docs" className="relative py-24">
      <div className="absolute inset-0 bg-[var(--gradient-card)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive{" "}
            <span className="text-primary">
              Documentation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to integrate and start selling. Developer-friendly docs with code examples.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {docs.map((doc) => (
            <a
              key={doc.title}
              href={doc.link}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <doc.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold text-foreground">
                  {doc.title}
                  <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-muted-foreground">{doc.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            <Book className="mr-2 h-4 w-4" />
            View Full Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
