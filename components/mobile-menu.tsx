"use client"

import { useState } from "react"
import { Menu, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-black/95 backdrop-blur-lg border-white/10">
        <SheetHeader>
          <SheetTitle className="text-white">Navigation Menu</SheetTitle>
          <SheetDescription className="text-gray-400">Navigate to different sections</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-base font-medium text-white hover:text-cyan-400 transition-all py-3 px-4 rounded-lg border border-white/10 hover:border-cyan-500/50 text-left"
          >
            Features
          </button>
          
          <Button
            onClick={() => scrollToSection('waitlist')}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-6 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            Join Waitlist
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
