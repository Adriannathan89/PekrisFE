"use client";

import { useState } from "react";
import MatkulList from "./matkulComponents/matkullist";
import TugasList from "./tugasComponents/tugaslist";
import Dasboard from "./dasboard";

interface ItemContainerProps {
  Page: String;
}

export default function ItemContainer({ Page }: ItemContainerProps) {

  const renderPage = () => {
    switch(Page) {
      case "Dasboard":
        return <Dasboard />;
      case "Mata Kuliah":
        return <MatkulList />;
      case "Tugas":
        return <TugasList />;
      case "Kalkulator Nilai":
        return <p>ini Kalkulator nilai</p>
    }
  }
  return (
    <div className="bg-[#212121] w-full h-200">
        {renderPage()}
    </div>
  );
}
    