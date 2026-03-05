export type PortfolioCategory = "Software" | "3D Stands" | "Security";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  year: string;
  summary: string;
  tags: string[];
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    category: "Software",
    year: "2025",
    summary: "Real-time AI-driven dashboard for large-scale data visualization.",
    tags: ["AI", "React", "Data"],
    image: "/service-software.jpg",
  },
  {
    slug: "modular-retail-kiosk",
    title: "Modular Retail Kiosk",
    category: "3D Stands",
    year: "2024",
    summary: "Sleek, modular kiosk design for electronics retail showrooms.",
    tags: ["Retail", "3D", "Modular"],
    image: "/service-3d.jpg",
  },
  {
    slug: "smart-home-integration",
    title: "Smart Home Integration",
    category: "Security",
    year: "2025",
    summary: "Complete home automation and security ecosystem setup.",
    tags: ["IoT", "Security", "Smart Home"],
    image: "/service-security.jpg",
  },
  {
    slug: "snickers-fuel-stand",
    title: "Snickers Fuel Up Stand",
    category: "3D Stands",
    year: "2025",
    summary: "Creative gas-pump inspired display stand for Snickers branding.",
    tags: ["3D", "Retail", "Snickers"],
    image: "/portfolio-snickers-fuel.jpg",
  },
  {
    slug: "nutella-beach-club-bread",
    title: "Nutella Bread Portal",
    category: "3D Stands",
    year: "2025",
    summary: "Bread-shaped entrance portal for the Nutella Beach Club experience.",
    tags: ["3D", "Nutella", "Experience"],
    image: "/portfolio-nutella-bread.jpg",
  },
  {
    slug: "nutella-beach-club-jar",
    title: "Nutella Jar Entrance",
    category: "3D Stands",
    year: "2025",
    summary: "Iconic jar-shaped portal design for brand activations.",
    tags: ["3D", "Nutella", "Design"],
    image: "/portfolio-nutella-jar.jpg",
  },
  {
    slug: "nutella-beach-club-gate",
    title: "Nutella Gate Portal",
    category: "3D Stands",
    year: "2025",
    summary: "Sleek brand-themed gate for high-end exhibition events.",
    tags: ["3D", "Nutella", "Gate"],
    image: "/portfolio-nutella-gate.jpg",
  },
  {
    slug: "snickers-hungry-stand",
    title: "Snickers Hungry Stand",
    category: "3D Stands",
    year: "2025",
    summary: "Custom retail island display highlighting 'You're not you when you're hungry'.",
    tags: ["3D", "Retail", "Island"],
    image: "/portfolio-snickers-hungry.jpg",
  },
  {
    slug: "ulker-flavor-scan-stand",
    title: "Ülker Flavor Scan Stand",
    category: "3D Stands",
    year: "2025",
    summary: "Interactive digital stand concept for Ülker brand activation.",
    tags: ["3D", "Interactive", "Ülker"],
    image: "/portfolio-ulker-scan.jpg",
  },
  {
    slug: "nivea-beauty-hub-white",
    title: "Nivea Beauty Hub",
    category: "3D Stands",
    year: "2025",
    summary: "Clean, organic design for Nivea product display and consultation.",
    tags: ["3D", "Cosmetics", "Nivea"],
    image: "/portfolio-nivea-white.jpg",
  },
  {
    slug: "nivea-skincare-lounge-blue",
    title: "Nivea Skincare Lounge",
    category: "3D Stands",
    year: "2025",
    summary: "Premium blue-themed lounge for brand experience events.",
    tags: ["3D", "Lounge", "Nivea"],
    image: "/portfolio-nivea-blue.jpg",
  },
  {
    slug: "ulker-mobile-truck-v1",
    title: "Ülker Mobile Shop v1",
    category: "3D Stands",
    year: "2025",
    summary: "Mobile retail truck concept for urban brand presence.",
    tags: ["3D", "Mobile", "Retail"],
    image: "/portfolio-ulker-truck-1.jpg",
  },
  {
    slug: "ulker-mobile-truck-v2",
    title: "Ülker Mobile Shop v2",
    category: "3D Stands",
    year: "2025",
    summary: "Alternative mobile shop design with expanded product display.",
    tags: ["3D", "Mobile", "Retail"],
    image: "/portfolio-ulker-truck-2.jpg",
  },
];

export const portfolioCategories: ("All" | PortfolioCategory)[] = ["All", "Software", "3D Stands", "Security"];
