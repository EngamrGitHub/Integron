import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return portfolioItems.map((i) => ({ slug: i.slug }));
}

export default function PortfolioDetails({ params }: { params: { slug: string } }) {
  const item = portfolioItems.find((i) => i.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="container py-12">
      <Link href="/portfolio" className="text-sm text-neutral-600 hover:text-neutral-900">
        ← Back to portfolio
      </Link>

      <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
        <div className="relative h-[320px] w-full">
          <Image src={item.image} alt={item.title} fill className="object-cover" priority />
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-medium text-neutral-500">{item.category}</div>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">{item.title}</h1>
            </div>
            <div className="text-sm text-neutral-600">{item.year}</div>
          </div>

          <p className="mt-4 max-w-3xl text-sm text-neutral-600 md:text-base">{item.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6">
              <div className="text-sm font-semibold text-neutral-900">Scope</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li>• Discovery & requirements</li>
                <li>• Design & implementation</li>
                <li>• Documentation & handover</li>
                <li>• Support & iteration</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6">
              <div className="text-sm font-semibold text-neutral-900">Outcome</div>
              <p className="mt-3 text-sm text-neutral-600">
                Replace this content with your real case study (results, KPIs, photos, and client feedback).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
