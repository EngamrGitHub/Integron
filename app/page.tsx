"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceCards from "@/components/ServiceCards";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactSection from "@/components/ContactSection";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-neutral-200">
        <div className="container py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Integrated Solutions
                <span className="block text-blue-800">for Your Business</span>
              </h1>

              <p className="mt-4 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
                Empowering your success with software development, 3D design & exhibition stands, and security systems.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/portfolio"
                  className="rounded-full bg-blue-800 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  View Our Work
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
                <div className="relative h-[320px] w-full md:h-[380px]">
                  <Image src="/hero.jpg" alt="Hero" fill className="object-cover" priority />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" className="border-b border-neutral-200">
        <div className="container py-14">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <motion.div
              className="md:col-span-5"
              {...fadeInUp}
            >
              <h2 className="text-3xl font-semibold tracking-tight">Who We Are</h2>
              <p className="mt-4 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
                We provide innovative solutions to drive your business forward. With expertise across three divisions,
                we deliver reliable outcomes with clean documentation and premium presentation.
              </p>
            </motion.div>
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
                <div className="relative h-[280px] w-full md:h-[320px]">
                  <Image src="/team.jpg" alt="Team" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-neutral-200">
        <div className="container py-14">
          <motion.div
            className="text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-semibold tracking-tight">Our Services</h2>
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ServiceCards />
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="border-b border-neutral-200">
        <div className="container py-14">
          <motion.div
            className="text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-semibold tracking-tight">Our Portfolio</h2>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <PortfolioGrid compact />
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/portfolio"
              className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-all hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container py-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactSection />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
