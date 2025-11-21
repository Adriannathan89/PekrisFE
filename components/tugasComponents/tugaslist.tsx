"use client";
import React, { useEffect, useState } from "react";
import TugasCard from "./tugascard";

interface Tugas {
  id: string;
  nama: string;
  deadline: string;
  status: string;
  namaMatkul: string;
}

export default function TugasList() {
  const [data, setData] = useState<Tugas[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTugas = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/Tugas");
      const json = await res.json();
      setData(json.Tugas ?? json);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTugas();
  }, []);

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((t) => t.id !== id));
  };

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="mt-6 flex flex-col gap-4 items-center w-full">
      {data.length === 0 ? (
        <p className="text-white">Belum ada tugas.</p>
      ) : (
        data.map((tugas) => (
          <TugasCard key={tugas.id} data={tugas} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}
