"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { name: "Sobre", href: "#sobre" },
  { name: "Funcionalidades", href: "#funcionalidades" },
  { name: "Módulos", href: "#modulos" },
  { name: "Teste o sistema", href: "#teste" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      links.forEach(link => {
        const section = document.querySelector(link.href)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link.href)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="relative w-40 h-12 flex items-center">
          <Image
            src="/img/logo2.png"
            alt="Acadex Logo"
            width={241}            
            height={72}        
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium  ">
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative transition ${
                active === link.href ? "text-purple-600" : "hover:text-purple-600"
              }`}
            >
              {link.name}

              {active === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-600"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <span className="w-5 h-0.5 bg-gray-800"></span>
          <span className="w-5 h-0.5 bg-gray-800"></span>
          <span className="w-5 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {links.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
