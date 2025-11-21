"use client";
import React, { useEffect, useState } from "react";
import { PiBookOpenBold, PiCheckBold, PiClockBold, PiWarningBold } from "react-icons/pi";

interface Dashboard {
  totalMatkul: number;
  totalTugas: number;
  statusTugas: {
    belumDikerjakan: number;
    sedangDikerjakan: number;
    selesai: number;
  }
}

export default function Dashboard() {
  const [data, setData] = useState<Dashboard>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8080/api/Dashboard");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="p-4 text-gray-400">Loading...</p>;

  return (
    <div className="p-6 space-y-5 text-white">
      <h2 className="text-2xl font-semibold text-gray-100">Dashboard</h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-[#1C1E22] border border-[#2563eb]/40 p-5 rounded-xl shadow-lg hover:shadow-blue-500/25 transition">
          <div className="flex items-center justify-between">
            <p className="font-medium text-blue-400">Total Mata Kuliah</p>
            <PiBookOpenBold className="text-blue-400 text-xl" />
          </div>
          <p className="text-4xl font-bold mt-2">{data?.totalMatkul}</p>
        </div>

        <div className="bg-[#1C1E22] border border-green-500/40 p-5 rounded-xl shadow-lg hover:shadow-green-500/25 transition">
          <div className="flex items-center justify-between">
            <p className="font-medium text-green-400">Total Tugas</p>
            <PiCheckBold className="text-green-400 text-xl" />
          </div>
          <p className="text-4xl font-bold mt-2">{data?.totalTugas}</p>
        </div>
      </div>

      <div className="bg-[#1C1E22] p-6 rounded-xl border border-gray-700 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Status Tugas</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-red-300">
            <div className="flex items-center gap-2">
              <PiWarningBold />
              <span>Belum Dikerjakan:</span>
            </div>
            <strong>{data?.statusTugas.belumDikerjakan}</strong>
          </div>

          <div className="flex items-center justify-between text-yellow-300">
            <div className="flex items-center gap-2">
              <PiClockBold />
              <span>Sedang Dikerjakan:</span>
            </div>
            <strong>{data?.statusTugas.sedangDikerjakan}</strong>
          </div>

          <div className="flex items-center justify-between text-purple-300">
            <div className="flex items-center gap-2">
              <PiCheckBold />
              <span>Selesai:</span>
            </div>
            <strong>{data?.statusTugas.selesai}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
