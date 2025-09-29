"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 rtl:flex-row-reverse">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center glow-effect transition-transform duration-200 hover:scale-110">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground">ویداچین</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 rtl:flex-row-reverse">
            <a href="#ecosystem" className="text-muted-foreground hover:text-foreground transition-colors">
              ویدامَگ
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors">
              خرید اشتراک
            </a>
            <a href="#developers" className="text-muted-foreground hover:text-foreground transition-colors">
              صفحه اصلی
            </a>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              خرید اشتراک ویژه
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
              <a href="#ecosystem" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                ویدامَگ
              </a>
              <a href="#technology" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                خرید اشتراک
              </a>
              <a href="#developers" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                صفحه اصلی
              </a>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                >
                  خرید اشتراک ویژه
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
