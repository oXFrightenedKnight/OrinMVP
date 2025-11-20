"use client"

type Integration = {
  name: string
  logo: string
}

const integrations: Integration[] = [
  { name: "Stripe", logo: "💳" },
  { name: "AWS", logo: "☁️" },
  { name: "OpenAI", logo: "🧠" },
  { name: "Vercel", logo: "▲" },
  { name: "Supabase", logo: "🟢" },
  { name: "Cloudflare", logo: "☀️" },
  { name: "MongoDB", logo: "🍃" },
  { name: "Anthropic", logo: "✨" },
  { name: "Google Cloud", logo: "🌐" },
  { name: "Twilio", logo: "🔔" },
  { name: "SendGrid", logo: "✉️" },
  { name: "GitHub", logo: "🐙" },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 overflow-hidden">
      <div className="container mx-auto max-w-7xl mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
          Integrates with your <span className="text-primary">entire stack</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Connect all your SaaS tools in minutes. We support 100+ integrations and counting.
        </p>
      </div>

      <div className="relative group">
        <div className="flex gap-8 animate-scroll-left">
          {/* Double the array for seamless loop */}
          {[...integrations, ...integrations].map((integration, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <span className="text-4xl" aria-hidden="true">
                {integration.logo}
              </span>
              <span className="text-lg font-semibold whitespace-nowrap">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
