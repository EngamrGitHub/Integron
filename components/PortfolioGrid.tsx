"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioCategories, portfolioItems } from "@/lib/portfolio-data";

export default function PortfolioGrid({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<(typeof portfolioCategories)[number]>("All");

  const items = useMemo(() => {
    const all = active === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === active);
    return compact ? all.slice(0, 6) : all;
  }, [active, compact]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={[
                "rounded-full border px-5 py-2 text-sm transition-all",
                isActive
                  ? "border-blue-800 bg-blue-800 text-white shadow-md"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50",
              ].join(" ")}
            >
              {c}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              layout
              key={item.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={`/portfolio/${item.slug}`}
                className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft hover:border-neutral-300 transition-shadow hover:shadow-lg"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-medium text-neutral-500">{item.category}</div>
                    <div className="text-xs text-neutral-500">{item.year}</div>
                  </div>

                  <div className="mt-3 text-base font-semibold text-neutral-900 group-hover:text-blue-800 transition-colors">
                    {item.title}
                  </div>

                  <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{item.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
