import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { KeyMetrics } from "@/components/KeyMetrics";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Stack } from "@/components/Stack";
import { UpcomingProject } from "@/components/UpcomingProject";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Stack />
      <KeyMetrics />
      <UpcomingProject />
      <Contact />
    </>
  );
}
