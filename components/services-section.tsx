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
                  Automatic Block of Suspicious Activity
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our AI will track your metrics and block suspicous addresses before they do
                  significant damage
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
            className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-float-gentle"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center justify-between mb-4 border border-red-500">
              <div>
                <h3 className="text-lg font-semibold text-foreground">See Your Real Margin</h3>
                <p className="text-sm text-muted-foreground">
                  We calculate net revenue after ALL expenses: hosting, AI, egress, storage,
                  proxies, Stripe fees. No more boring spreadsheets and manual cost tracking.
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <div className="relative h-[200px] w-full flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="oklch(0.15 0.03 240)"
                  strokeWidth="40"
                  className="opacity-20"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="oklch(0.6 0.18 220)"
                  strokeWidth="40"
                  strokeDasharray="440 503"
                  strokeDashoffset="-125"
                  className="transition-all duration-1000"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="oklch(0.65 0.2 200)"
                  strokeWidth="40"
                  strokeDasharray="125 503"
                  strokeDashoffset="0"
                  className="transition-all duration-1000"
                  transform="rotate(-90 100 100)"
                />
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  className="text-2xl font-bold fill-foreground"
                  dominantBaseline="middle"
                >
                  87%
                </text>
                <text
                  x="100"
                  y="115"
                  textAnchor="middle"
                  className="text-xs fill-muted-foreground"
                  dominantBaseline="middle"
                >
                  Profit Margin
                </text>
              </svg>
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
            className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-float-gentle"
            style={{ animationDelay: "3s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  AI-Powered Analyzis (or Forecasting)
                </h3>
                <p className="text-sm text-muted-foreground">Take a look in the future</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="relative h-[200px] w-full">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Grid lines */}
                {[0, 50, 100, 150, 200].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="400"
                    y2={y}
                    stroke="oklch(0.15 0.03 240)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}
                {/* Area under curve */}
                <path
                  d="M 0 180 L 50 160 L 100 140 L 150 115 L 200 95 L 250 80 L 300 70 L 350 65 L 400 60 L 400 200 L 0 200 Z"
                  fill="oklch(0.6 0.18 220)"
                  fillOpacity="0.2"
                />
                {/* Main line */}
                <path
                  d="M 0 180 L 50 160 L 100 140 L 150 115 L 200 95 L 250 80 L 300 70 L 350 65 L 400 60"
                  fill="none"
                  stroke="oklch(0.6 0.18 220)"
                  strokeWidth="3"
                />
              </svg>
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
