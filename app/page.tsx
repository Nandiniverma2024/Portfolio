"use client";

import { navItems } from "@/data";


import Grid from "./components/Grid";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import { FloatingNav } from "./components/ui/FloatingNav";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto px-5 sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
