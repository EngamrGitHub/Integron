"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/site-data";

const SocialIcon = ({ href, children, label }: { href: string; children: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-900 hover:text-white"
  >
    {children}
  </motion.a>
);

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">{company.name}</div>
            <p className="mt-2 text-sm text-neutral-600">{company.tagline}</p>
          </div>

          <div className="text-sm text-neutral-600">
            <div className="font-medium text-neutral-900">Contact</div>
            <div className="mt-2">{company.location}</div>
            <div className="mt-1">{company.phone}</div>
            <div className="mt-1">
              <a className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-medium text-neutral-900">Links</div>
            <div className="mt-2 flex flex-col gap-2 text-neutral-600">
              <Link className="hover:text-neutral-900" href="/portfolio">Portfolio</Link>
              <Link className="hover:text-neutral-900" href="/#services">Services</Link>
              <Link className="hover:text-neutral-900" href="/#contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-neutral-900">Follow Us</div>
            <div className="mt-3 flex gap-3">
              <SocialIcon href={company.social.facebook} label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={company.social.linkedin} label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={company.social.instagram} label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-neutral-100 pt-8 text-xs text-neutral-500 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link className="hover:text-neutral-900" href="/privacy">Privacy Policy</Link>
            <Link className="hover:text-neutral-900" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
