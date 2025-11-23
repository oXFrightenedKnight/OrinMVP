"use client";

import { X, Check } from "lucide-react";

export function ProblemSolutionSection() {
  const withoutItems = [
    "No revenue transparency",
    "Constant switching between 5+ dashboards",
    "Surpising bills",
    "Hours wasted on calculations every month",
    "Zero automation",
  ];

  const withItems = [
    "Net revenue after ALL expenses",
    "All providers integrated into one dashboard",
    "Automatic alerts",
    "Automatic calculations & forecasting",
    "Shows where you can save money",
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
          <div className="bg-background border border-destructive/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-white">Without Orin</h3>
            </div>

            <div className="space-y-4">
              {withoutItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">With Orin</h3>
            </div>

            <div className="space-y-4">
              {withItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
