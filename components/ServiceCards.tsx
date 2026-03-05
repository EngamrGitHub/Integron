"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/site-data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServiceCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-6 md:grid-cols-3"
    >
      {services.map((s) => (
        <motion.div
          key={s.key}
          variants={item}
          whileHover={{ y: -5 }}
          className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft transition-shadow hover:shadow-xl"
        >
          <div className="relative h-44 w-full">
            <Image src={s.image} alt={s.title} fill className="object-cover" priority={s.key === "software"} />
          </div>
          <div className="p-6">
            <div className="text-sm font-semibold text-neutral-900">{s.title}</div>
            <p className="mt-2 text-sm text-neutral-600">{s.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-700" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
