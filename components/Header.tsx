'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Plane } from 'lucide-react'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 space-x-reverse">
          <Plane className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">MyFlySmart</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
          <Link href="/flights" className="text-sm font-medium hover:text-primary">رحلات الطيران</Link>
          <Link href="/hotels" className="text-sm font-medium hover:text-primary">الفنادق</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">من نحن</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">اتصل بنا</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-3">
            <Link href="/flights" className="block text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>رحلات الطيران</Link>
            <Link href="/hotels" className="block text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>الفنادق</Link>
            <Link href="/about" className="block text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>من نحن</Link>
            <Link href="/contact" className="block text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>اتصل بنا</Link>
          </nav>
        </div>
      )}
    </header>
  )
}