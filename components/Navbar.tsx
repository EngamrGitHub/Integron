"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 text-lg font-bold text-white">
            I
          </div>
          <span className="text-lg font-semibold tracking-tight">Integron</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#about" className="text-sm font-medium text-neutral-600 hover:text-blue-800 transition-colors">
            About
          </Link>
          <Link href="/#services" className="text-sm font-medium text-neutral-600 hover:text-blue-800 transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-neutral-600 hover:text-blue-800 transition-colors">
            Portfolio
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-neutral-600 hover:text-blue-800 transition-colors">
            Contact
          </Link>
        </div>

        <Link
          href="/#contact"
          className="rounded-full bg-blue-800 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-all hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </motion.nav>
  );
}
