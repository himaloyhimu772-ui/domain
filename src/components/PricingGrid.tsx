import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const tldPricing = [
  { tld: ".com", register: "$8.99", renewal: "$9.99", transfer: "$8.99" },
  { tld: ".net", register: "$9.99", renewal: "$10.99", transfer: "$9.99" },
  { tld: ".org", register: "$9.99", renewal: "$10.99", transfer: "$9.99" },
  { tld: ".io", register: "$32.99", renewal: "$34.99", transfer: "$32.99" },
  { tld: ".co", register: "$24.99", renewal: "$26.99", transfer: "$24.99" },
  { tld: ".dev", register: "$12.99", renewal: "$14.99", transfer: "$12.99" },
  { tld: ".app", register: "$12.99", renewal: "$14.99", transfer: "$12.99" },
  { tld: ".ai", register: "$69.99", renewal: "$74.99", transfer: "$69.99" },
  { tld: ".xyz", register: "$2.99", renewal: "$10.99", transfer: "$9.99" },
  { tld: ".online", register: "$3.99", renewal: "$29.99", transfer: "$24.99" },
  { tld: ".store", register: "$4.99", renewal: "$39.99", transfer: "$34.99" },
  { tld: ".tech", register: "$4.99", renewal: "$39.99", transfer: "$34.99" },
  { tld: ".site", register: "$2.99", renewal: "$24.99", transfer: "$19.99" },
  { tld: ".me", register: "$14.99", renewal: "$19.99", transfer: "$14.99" },
  { tld: ".info", register: "$3.99", renewal: "$14.99", transfer: "$12.99" },
  { tld: ".biz", register: "$12.99", renewal: "$14.99", transfer: "$12.99" },
];

const PricingGrid = () => {
  const [search, setSearch] = useState("");

  const filteredTlds = tldPricing.filter((item) =>
    item.tld.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="pricing" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Competitive{" "}
            <span className="text-primary">
              Wholesale Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Access over 500 TLDs at wholesale prices. Set your own retail margins.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search TLDs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">TLD</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Register</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Renewal</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Transfer</th>
                </tr>
              </thead>
              <tbody>
                {filteredTlds.map((item, index) => (
                  <tr
                    key={item.tld}
                    className={`border-b border-border/50 transition-colors hover:bg-muted/30 ${
                      index % 2 === 0 ? "bg-transparent" : "bg-muted/20"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="font-mono font-semibold text-primary">{item.tld}</span>
                    </td>
                    <td className="px-6 py-4 text-foreground">{item.register}</td>
                    <td className="px-6 py-4 text-foreground">{item.renewal}</td>
                    <td className="px-6 py-4 text-foreground">{item.transfer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6 text-center">
          <p className="text-sm text-amber-900 mb-4">
            ⚠️ Pricing Information - Displayed prices are sample wholesale rates. These prices may be outdated.
          </p>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Check Latest Price
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          * All prices are in USD. Volume discounts available for high-volume resellers.
        </p>
      </div>
    </section>
  );
};

export default PricingGrid;
