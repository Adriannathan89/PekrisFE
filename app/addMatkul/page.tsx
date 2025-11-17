"use client";

import Image from "next/image";
import Menu from "@/components/menu"
import HeaderContent from "@/components/HeaderContent"
import Matkuladd from "@/components/matkulComponents/matkuladd";
import ItemContainer from "@/components/itemcontainer";
import { useState } from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [Page, setPage] = useState<String>("Dasboard")

  return (
    <div className={`${inter.className} flex justify-center mt-2`}>
      <div className="border-[2px] border-[#02010d] ml-10 mt-10 rounded-4xl overflow-hidden w-375 bg-[#0d0d0d]">
      <HeaderContent Judul={"Tambah Mata Kuliah"}/>
      <div className="flex text-[#ffffff]">
        <div className="bg-[#212121] w-full h-200 ">
            <Matkuladd />
        </div>
      </div>
      </div>
    </div>
  );
}
