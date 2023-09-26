import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Nav />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <AboutSection />
      </div>
    </main>
  );
}
