import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Stack } from "@/components/Stack";


export default function Home() {
  return (
    <div className="site-layout">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Portfolio />
        <Stack />
        <footer className="site-footer">© {new Date().getFullYear()} Shashank Chaubey</footer>
      </main>
    </div>
  );
}
