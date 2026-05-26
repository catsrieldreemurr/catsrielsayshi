import Image from "next/image";
import Navbar from "./components/navbar";
import Titlebit from "./components/titleBit";
import GetCurrentAge from "./components/ageCalculator";

export default function Home() {
  return (
    <div className="bg-[url(/doorsroom0.png)] bg-cover bg-fixed h-full min-h-screen">
      <Navbar></Navbar>

      <div className="flex flex-col justify-center items-center">
        <Titlebit></Titlebit>
      </div>
    </div>
  );
}
