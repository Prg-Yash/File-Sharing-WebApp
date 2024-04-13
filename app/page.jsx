import Header from "./_components/Header";
import Hero from "./_components/Hero";

// import Header from "@/app/_components/Header";
// import Hero from "@/app/_components/Hero";
export default function Home() {
  return (
    <div className="h-screen md:h-screen lg:h-screen bg-gray-900 text-white lg:items-end">
      <Header />

      <Hero />
    </div>
  );
}
