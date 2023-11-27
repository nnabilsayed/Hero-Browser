import React from "react";

import Link from "next/link";
const NavMain = () => {
  return (
    <div className=" p-3 flex justify-between items-center pr-30 text-white">
      <Link href={"/"}>
        <h2 className=" font-bold cursor-pointer text-4xl text-red-600">
          Hero<span className=" text-3xl font-bold text-white ">Browser</span>{" "}
        </h2>
      </Link>
      <div className=" flex items-center h-full m-auto text-2xl space-x-9 cursor-pointer justify-evenly">
        <Link href={"/"}>
          <h2 className="mx-1 hover:bg-red-600 rounded-lg poi">Home</h2>
        </Link>
        <Link href={"/comics"}>
          <h2 className="mx-1 hover:bg-red-600 rounded-lg poi">Comics</h2>
        </Link>
      </div>
    </div>
  );
};

export default NavMain;
