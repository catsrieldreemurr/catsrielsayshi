import Image from "next/image";
import Navbar from "./components/navbar";
import Titlebit from "./components/titleBit";
import CustomSection from "./components/customSection";

export default function Home() {
  return (
    <div className="bg-[url(/doorsroom0.png)] bg-cover bg-fixed h-full min-h-screen">
      <Navbar></Navbar>

      <div className="flex flex-col justify-center items-center">
        <Titlebit></Titlebit>
      </div>

      <CustomSection whitebackground>
        <h1 className="text-2xl font-bold">test</h1>
        <h2>test</h2>
      </CustomSection>
    </div>
  );
}
