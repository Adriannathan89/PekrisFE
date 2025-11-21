"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PiBookOpenBold, PiUserBold, PiListChecks } from "react-icons/pi";

interface MataKuliah {
  id: number;
  nama: string;
  namaDosen: string;
  sks: number;
  listOfTugas: Array<Record<string, any>>;
}

export default function MatkulCard({ data }: { data: MataKuliah }) {
  const router = useRouter();
  const jumlahTugas = data.listOfTugas.length;
  const tugas = data.listOfTugas[0];

  return (
    <div
      onClick={() => router.push(`/MataKuliah/${data.id}`)}
      className="
        bg-[#1C1E22] border border-gray-700
        w-64 p-5 rounded-xl cursor-pointer
        transition-transform duration-300
        hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25
      "
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-blue-400">
          <PiBookOpenBold />
          <p className="font-semibold text-lg">{data.nama}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-300 text-sm">
          <PiUserBold />
          <p>{data.namaDosen}</p>
        </div>

        <p className="text-gray-400 text-sm">SKS: {data.sks}</p>
      </div>

      <div className="border-b border-gray-600 my-3"></div>

      <div>
        <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
          <PiListChecks />
          <p>Tugas</p>
        </div>

        {jumlahTugas === 0 ? (
          <p className="text-gray-500 italic text-sm">Tidak ada tugas</p>
        ) : (
          <div className="text-gray-300 space-y-1 text-sm">
            <p className="text-white font-semibold">{tugas.nama}</p>
            <p className="text-xs opacity-80">Deadline: {tugas.deadline}</p>
            <p className="text-xs opacity-80">Status: {tugas.status}</p>

            {jumlahTugas > 1 && (
              <p className="text-blue-400 font-medium text-xs mt-2">
                + {jumlahTugas - 1} tugas lainnya...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
