"use client";
import React from "react";

interface Tugas {
  id: string;
  nama: string;
  deadline: string;
  status: string;
  namaMatkul: string;
}

export default function TugasCard({
  data,
  onDelete,
}: {
  data: Tugas;
  onDelete: (id: string) => void;
}) {
  const handleClick = async () => {
    try {
      await fetch(`http://localhost:8080/api/deleteTugas/${data.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      onDelete(data.id);
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div className="w-full max-w-[850px] bg-[#1e1e1e] rounded-xl px-6 py-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/40">
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-white">{data.nama}</span>
        <span className="text-sm text-gray-300">{data.namaMatkul}</span>
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-xs">Deadline</p>
        <p className="text-sm font-bold text-red-400">{data.deadline}</p>
      </div>

      <span
        className={`px-3 py-1 text-sm rounded-full font-semibold text-white
        ${
          data.status === "Selesai"
            ? "bg-green-500"
            : data.status === "Sedang dikerjakan"
            ? "bg-yellow-500"
            : "bg-red-500"
        }`}
      >
        {data.status}
      </span>

      <div className="flex gap-3">
        <button className="px-3 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 transition" type="button">
          Edit
        </button>

        <button
          onClick={handleClick}
          className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 transition"
          type="button"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
