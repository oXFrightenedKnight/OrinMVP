"use client";

import { TrendingUp, AlertCircle, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function KillerFeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colorClasses = {
    cyan: "from-cyan-500 to-blue-500",
    blue: "from-blue-500 to-indigo-500",
    purple: "from-purple-500 to-pink-500",
  } as const;

  type FeatureColor = keyof typeof colorClasses;

  type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
    highlights: string[];
    color: FeatureColor;
  };

  const features: Feature[] = [
    {
      icon: TrendingUp,
      title: "Real Profit Calculator",
      description:
        "Know exactly how much money you're actually making. We break down every cost, every fee, and show you your true net profit in crystal-clear detail.",
      highlights: ["Real-time calculations", "Detailed breakdowns", "No hidden costs"],
      color: "cyan",
    },
    {
      icon: AlertCircle,
      title: "Loss Tracker & Analytics",
      description:
        "See exactly where your money goes. Track every expense, identify cost leaks, and understand which services are eating into your margins.",
      highlights: ["Expense categorization", "Cost leak detection", "Trend analysis"],
      color: "blue",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description:
        "Advanced AI analyzes your metrics and suggests actionable improvements. Get personalized recommendations on how to optimize costs and boost profitability.",
      highlights: ["Smart suggestions", "Cost optimization", "Growth strategies"],
      color: "purple",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Killer Features</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to understand and optimize your SaaS finances
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    colorClasses[feature.color]
                  } opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                      colorClasses[feature.color]
                    } flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${
                            colorClasses[feature.color]
                          }`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
