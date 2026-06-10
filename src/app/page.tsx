import { Nav } from "@/components/Nav";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Featured } from "@/components/Featured";
import { Story } from "@/components/Story";
import { Values } from "@/components/Values";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Marquee />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Categories />
        <Featured />
        <Story />
        <Values />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
