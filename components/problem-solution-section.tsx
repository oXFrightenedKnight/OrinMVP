"use client";

import { X, Check } from "lucide-react";

export function ProblemSolutionSection() {
  const withoutItems = [
    { label: "Stripe fees", value: "unknown" },
    { label: "OpenAI tokens", value: "chaos" },
    { label: "Neon storage", value: "sudden spike" },
    { label: "Bandwidth", value: "guess yourself" },
    { label: "Net revenue", value: "lol, calculate it manually" },
  ];

  const withItems = [
    "Everything is visible in one place",
    "No delays",
    "No shocking surprises",
    "Real-time cost tracking",
    "Automated calculations",
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Orin</h2>
          <p className="text-gray-400 text-lg">Stop guessing. Start knowing.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Without Our Service</h3>
            </div>

            <div className="space-y-4">
              {withoutItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start group">
                  <span className="text-gray-300 font-medium">{item.label}</span>
                  <span className="text-red-400 italic text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With */}
          <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">With Our Service</h3>
            </div>

            <div className="space-y-4">
              {withItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
