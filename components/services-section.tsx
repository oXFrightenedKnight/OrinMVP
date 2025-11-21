"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, DollarSign } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Why Choose Us
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Managing SaaS expenses has <span className="text-primary">never been easier</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Without proper expense tracking, you&apos;re flying blind. Hidden costs pile up, unused
          subscriptions drain your budget, and forecasting becomes impossible. We bring clarity to
          chaos.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bandwidth Usage - Line Chart */}
          <Card className="p-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-float-gentle">
            {/* top-left text */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-foreground">Simple and Intuitive Graphs</h3>
              <p className="text-sm text-muted-foreground">
                See what&apos;s happening to your SaaS with every detail
              </p>
            </div>

            {/* center image */}
            <div className="items-center flex justify-center h-full">
              <Image
                alt="bandwidth graph example"
                src="/bandwidth.svg"
                width={400}
                height={300}
                className="mask-radial"
              ></Image>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Last 7 days</span>
              <span className="text-primary font-semibold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12.5%
              </span>
            </div>
          </Card>

          {/* Suspicious activity block */}
          <Card
            className="p-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-float-gentle"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Get Alerts On Metric Spikes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our AI will track your metrics and alert you when unusual activity happens
                </p>
              </div>
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <div className="items-center flex justify-center h-full">
              <Image
                alt="alert icon"
                src="/alert.svg"
                width={400}
                height={300}
                className="mask-radial"
              ></Image>
            </div>
          </Card>

          {/* Monthly Revenue - Pie Chart */}
          <Card
            className="p-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-float-gentle"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">See Your Real Margin</h3>
                <p className="text-sm text-muted-foreground">
                  We calculate net revenue after ALL expenses: hosting, AI, egress, storage,
                  proxies, Stripe fees. No more boring spreadsheets and manual cost tracking.
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <div className="items-center flex justify-center h-full">
              <Image
                alt="real monthly revenue chart"
                src="/RealMMRFixed2.png"
                width={400}
                height={300}
                unoptimized
                className="mask-radial"
              ></Image>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-muted-foreground">Expenses</span>
              </div>
            </div>
          </Card>

          {/* Cost Breakdown - Mixed Chart */}
          <Card
            className="p-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-float-gentle"
            style={{ animationDelay: "3s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  All SaaS Metrics In One App
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track your Stripe revenue, AI usage, DB fees, and Infra costs in one app
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="items-center flex justify-center h-full">
              <Image
                alt="real monthly revenue chart"
                src="/IntegrationsCard2.svg"
                width={400}
                height={300}
                unoptimized
                className="mask-radial"
              ></Image>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Cumulative savings</span>
              <span className="text-primary font-semibold">$47,280</span>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
            <div className="text-primary text-3xl font-bold mb-2">Real-time</div>
            <h3 className="text-xl font-semibold mb-2">Instant Visibility</h3>
            <p className="text-muted-foreground">
              Know exactly where every dollar goes. Our platform tracks all your SaaS expenses in
              real-time, giving you complete transparency.
            </p>
          </Card>
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
            <div className="text-primary text-3xl font-bold mb-2">30%</div>
            <h3 className="text-xl font-semibold mb-2">Average Savings</h3>
            <p className="text-muted-foreground">
              Stop overpaying. Identify unused subscriptions, negotiate better rates, and optimize
              your spending automatically.
            </p>
          </Card>
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all">
            <div className="text-primary text-3xl font-bold mb-2">Zero</div>
            <h3 className="text-xl font-semibold mb-2">Hidden Costs</h3>
            <p className="text-muted-foreground">
              Every fee, every charge, every penny accounted for. Get accurate forecasts and budget
              with confidence.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
