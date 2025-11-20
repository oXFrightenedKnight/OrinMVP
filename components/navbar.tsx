"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-white hover:text-cyan-400 transition-colors"
            >
              Features
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection('waitlist')}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              Join Waitlist
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
