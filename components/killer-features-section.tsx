"use client";

import { TrendingUp, AlertCircle, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function KillerFeaturesSection() {
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
      icon: Sparkles,
      title: "AI-Powered Explanations",
      description: "Orin interprets your numbers and explains them in plain English.",
      highlights: [
        "Translates complex data into clear explanations",
        "Summarizes and explains changes",
        "Sends human-readable weekly financial reports",
      ],
      color: "purple",
    },
    {
      icon: AlertCircle,
      title: "AI Anomaly Detection",
      description:
        "Orin can spot unexpected behavior instantly and catch sudden token spikes, storage surges, bandwidth jumps, etc.",
      highlights: [
        "Flags unusual patterns in real time",
        "Identifies inefficient usage",
        "Warns you before bills grow out of control",
      ],
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "AI Trend Forecasting",
      description: "Orin delivers simple short-term predictions based on real usage patterns.",
      highlights: [
        "Helps scaling costs",
        "Suggests optimizations based on expected trends",
        "Shows which categories will grow fastest",
      ],
      color: "blue",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="absolute w-[800px] h-[600px] rounded-full bg-primary/20 blur-[120px]"
            style={{
              top: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
              animationDuration: "4s",
            }}
          />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">AI-Powered</span> Cost Intelligence
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Make your data smart. Orin AI can now analyze, detect, and explain what&apos;s happening
            in your SaaS finances
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-primary rounded-2xl p-8  `}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    colorClasses[feature.color]
                  } opacity-0 rounded-2xl`}
                />

                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                      colorClasses[feature.color]
                    } flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>

                  <p className="text-gray-400 mb-6 leading-relaxed min-h-[5rem]">
                    {feature.description}
                  </p>

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
