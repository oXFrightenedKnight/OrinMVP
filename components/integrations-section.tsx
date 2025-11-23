"use client";

import Image from "next/image";

type Integration = {
  name: string;
  src: string;
};

const integrations: Integration[] = [
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "OpenAI", src: "/logos/openai.svg" },
  { name: "Supabase", src: "/logos/supabase.svg" },
  { name: "Cloudflare", src: "/logos/cloudflare.svg" },
  { name: "Clerk", src: "/logos/clerk.svg" },
  { name: "Neon", src: "/logos/neon.svg" },
  { name: "DigitalOcean", src: "/logos/digitalocean.svg" },
];

export function IntegrationsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 overflow-hidden">
      <div className="container mx-auto max-w-7xl mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
          Integrates with your <span className="text-primary">entire stack</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Connect all your SaaS tools in minutes. We support 10+ integrations and more coming soon.
        </p>
      </div>

      <div className="relative group">
        <div className="flex gap-8 animate-scroll-left">
          {/* Double the array for seamless loop */}
          {[...integrations, ...integrations].map((integration, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 px-8 py-4 backdrop-blur-sm rounded-xl"
            >
              <span className="text-4xl" aria-hidden="true">
                <Image
                  alt={`${integration.name} logo`}
                  src={integration.src}
                  width={125}
                  height={125}
                ></Image>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
