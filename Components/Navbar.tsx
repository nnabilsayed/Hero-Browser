import React from "react";
import Image from "next/image";
import heroImage from "@/app/assets/Hero.webp";

const Navbar = () => {
  return (
    <div className=" grid grid-cols-2 p-32 space-x-12 ">
      <Image
        src={heroImage}
        alt="hero"
        className=" bg-white rounded-2xl"
      ></Image>
      <div className="block  pt-20">
        <h2 className=" text-7xl font-semibold">Explore your favorite</h2>

        <h3 className="text-9xl text-red-500 font-bold">Hero</h3>
      </div>
    </div>
  );
};

export default Navbar;
