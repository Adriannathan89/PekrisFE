"use client";

import Image from "next/image";
import Menu from "@/components/menu"
import Header from "@/components/header"
import ItemContainer from "@/components/itemcontainer";
import { useState } from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} flex justify-center mt-2`}>
      <div className="border-[2px] border-[#02010d] ml-10 mt-10 rounded-4xl overflow-hidden w-375 bg-[#0d0d0d]">
      <Header />
      <div className="flex text-[#ffffff]">
        <Menu  />
        <ItemContainer Page={"Dasboard"} />
      </div>
      </div>
    </div>
  );
}
