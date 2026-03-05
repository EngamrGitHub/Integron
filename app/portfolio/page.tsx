import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <div className="container py-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Portfolio</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h1>
          <p className="mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
            Filter by category to explore software, 3D stand design, and security projects.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <PortfolioGrid />
      </div>
    </div>
  );
}
