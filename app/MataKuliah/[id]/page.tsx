"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import Menu from "@/components/menu";
import TugasList from "@/components/tugasComponents/tugaslist";
const inter = Inter({ subsets: ["latin"] });

interface MataKuliah {
  id: number;
  nama: string;
  namaDosen: string;
  sks: number;
  listOfTugas: Array<Record<string, unknown>>;
}

export default function DetailMatkulPage() {
  const { id } = useParams();
  const [data, setData] = useState<MataKuliah>();
  const router = useRouter();

  useEffect(() => {
    async function fetchMatkul() {
      try {
        const res = await fetch(`http://localhost:8080/api/MataKuliah/${id}`);
        const json = (await res.json()).MataKuliah;
        setData(json);
      } catch (err) {
        console.log("Fetch error", err);
      }
    }
    if (id) fetchMatkul();
  }, [id]);

  return (
    <div className={`${inter.className} flex justify-center mt-4`}>
      <div className="mt-[32px] ml-[42px] border-[2px] border-[#02010d] rounded-4xl w-375 h-full bg-[#0d0d0d]">
        <Header />
        <div className="flex text-white">
          <Menu />

          <div className="bg-[#212121] w-full h-200 p-10">
            <section className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl p-6 shadow-lg shadow-black/30 w-full">
              <h2 className="text-3xl font-bold text-[#0CF25D]">
                {data?.nama ?? "Memuat..."}
              </h2>
              <p className="mt-3 text-gray-300">Dosen: {data?.namaDosen}</p>
              <p className="mt-1 text-gray-300">SKS: {data?.sks}</p>
            </section>

            <section className="mt-10">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Tugas Mata Kuliah</h3>

                <button
                  onClick={() => router.push(`/addTugas/${id}`)}
                  className="
                    bg-[#0CF25D] px-5 py-2 rounded-lg
                    text-black font-bold
                    shadow-md shadow-black/50
                    transition-all duration-200
                    hover:scale-105 hover:bg-[#0aff58]
                  "
                >
                  + Tambah Tugas
                </button>
              </div>

              <div className="mt-5">
                <TugasList />
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
