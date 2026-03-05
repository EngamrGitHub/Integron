export const company = {
  name: "Integron Technology",
  tagline: "Smart Integrated Solutions",
  email: "hello@yourcompany.com",
  phone: "+20 10 0000 0000",
  location: "Cairo, Egypt",
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
};

export const services = [
  {
    key: "software",
    title: "Software Development",
    blurb:
      "Web apps, dashboards, APIs, automation, and scalable cloud-ready systems built with modern stacks.",
    bullets: ["Web & Mobile Apps", "API Development", "Admin Dashboards", "Maintenance & Support"],
    image: "/service-software.jpg",
  },
  {
    key: "stands3d",
    title: "3D Design & Exhibition Stands",
    blurb:
      "Concept to production-ready 3D stand designs, retail displays, renders, and technical drawings.",
    bullets: ["3D Concepts & Renders", "Booth & Stand Design", "Retail Displays (POSM)", "Shop Drawings"],
    image: "/service-3d.jpg",
  },
  {
    key: "security",
    title: "Security Systems",
    blurb:
      "CCTV, access control, gate barriers, and integrated security solutions for offices, retail, and industrial sites.",
    bullets: ["CCTV & Monitoring", "Access Control", "Gate Barriers", "Installation & Service"],
    image: "/service-security.jpg",
  },
] as const;
