import AnsemWallpaper from "@/components/AnsemWallpaper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Origin from "@/components/Origin";
import Stampede from "@/components/Stampede";
import Armory from "@/components/Armory";
import ChargePath from "@/components/ChargePath";
import Acquire from "@/components/Acquire";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="grid-void pointer-events-none fixed inset-0 -z-20 opacity-50" aria-hidden />
      <AnsemWallpaper />
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <Hero />
          <Origin />
          <Stampede />
          <Armory />
          <ChargePath />
          <Acquire />
        </main>
        <Footer />
      </div>
    </>
  );
}
