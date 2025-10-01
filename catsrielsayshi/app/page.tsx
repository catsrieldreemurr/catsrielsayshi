import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[url(/doorsroom0.png)] bg-cover bg-scroll">

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-black/90 p-10 rounded-2xl ">
          <h1 className="text-6xl font-bold">YourLocalFern</h1>
          <p className="text-2xl text-center">I do stuff sometimes</p>
        </div>
      </div>

    </div>
  </div>  
  );
}
