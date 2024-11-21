import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import About from "./components/About";
import Team from "./components/Team";
import Logo from "./components/Logo";
import Category from "./components/Category";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Newest />
      <About/>
      <Category/>
      <Team/>
      <Logo/>
    </div>
  );
}
