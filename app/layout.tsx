import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Integron',
  description: 'Integron is a powerful and user-friendly platform designed to streamline your workflow and enhance productivity. With its intuitive interface and robust features, Integron helps you manage your projects, collaborate with your team, and achieve your goals efficiently.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
