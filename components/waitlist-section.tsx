"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Mail, Sparkles } from "lucide-react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 5000);
    await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  };

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] animate-pulse"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animationDuration: "6s",
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="p-8 sm:p-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Early Access</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Join the <span className="text-primary">Waitlist</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Be among the first to experience complete SaaS expense transparency. Early members get
              lifetime 50% off.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 h-12 bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                No credit card required. Join 50+ people on the waitlist.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">You&apos;re on the list!</h3>
              <p className="text-muted-foreground">
                We&apos;ll send you an email when we&apos;re ready to launch. Get ready for expense
                clarity!
              </p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Real-time</div>
              <div className="text-sm text-muted-foreground">Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">30%</div>
              <div className="text-sm text-muted-foreground">Avg Savings</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
