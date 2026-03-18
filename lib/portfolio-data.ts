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
    slug: "b2b-ecommerce-platform",
    title: "SWTYW B2B E-commerce",
    category: "Software",
    year: "2026",
    summary: "Comprehensive B2B e-commerce solution for wholesale distribution.",
    tags: ["Nextjs", "Tailwind", "Data"],
    image: "/swytw.png",
  },
  {
    slug: "apple ecommerce-platform",
    title: "TECH YARD HUB",
    category: "Software",
    year: "2025",
    summary: "Comprehensive e-commerce solution for selling Apple products online.",
    tags: ["React", "Tailwind", "Data"],
    image: "/Tech.png",
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    category: "Software",
    year: "2025",
    summary: "Intuitive admin dashboard for managing users, content, and analytics.",
    tags: ["React", "Tailwind", "Data"],
    image: "/dashbordTech.png",
  },
  {
    slug: "byload-website",
    title: "Byload Corporate Website",
    category: "Software",
    year: "2025",
    summary: "Modern corporate website design and development for Byload, showcasing their services and portfolio.",
    tags: ["React", "Tailwind", "Data"],
    image: "/Byload.png",
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
