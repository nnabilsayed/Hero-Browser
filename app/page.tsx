import HeroHomePage from "@/Components/HeroHomePage";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar></Navbar>
      <HeroHomePage></HeroHomePage>
    </main>
  );
}
