"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTugasPage({ idMatkul }: { idMatkul: string }) {
  const router = useRouter();
  const [form, setForm] = useState({
    nama: "",
    deskripsi: "",
    deadline: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, status: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(`http://localhost:8080/api/editTugas/${idMatkul}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    router.push(`/MataKuliah/${idMatkul}`);
  };

  return (
    <div className="flex justify-center items-center h-full w-full py-10">
      <div className="bg-[#202020] p-10 rounded-2xl shadow-xl w-[400px] border border-[#2c2c2c]">
        <h2 className="text-center text-xl font-bold text-[#00d9ff] mb-6">
          Tambah Tugas
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nama"
            placeholder="Nama Tugas"
            className="bg-[#2c2c2c] text-white p-3 rounded-lg w-full outline-none"
            value={form.nama}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="deskripsi"
            placeholder="Deskripsi Tugas"
            className="bg-[#2c2c2c] text-white p-3 rounded-lg w-full outline-none"
            value={form.deskripsi}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="deadline"
            className="bg-[#2c2c2c] text-white p-3 rounded-lg w-full outline-none"
            value={form.deadline}
            onChange={handleChange}
            required
          />

          <select
            value={form.status}
            onChange={handleChangeSelect}
            className="bg-[#2c2c2c] text-white p-3 rounded-lg w-full outline-none"
            required
          >
            <option value="">Pilih Status</option>
            <option value="Belum dikerjakan">Belum dikerjakan</option>
            <option value="Sedang dikerjakan">Sedang dikerjakan</option>
            <option value="Selesai">Selesai</option>
          </select>

          <button
            type="submit"
            className="bg-[#00ff6f] text-black font-semibold p-3 rounded-lg w-full hover:scale-[1.03] transition"
          >
            Tambahkan
          </button>
        </form>

        <button
          onClick={() => router.back()}
          className="text-gray-400 underline text-sm mt-4 block text-center hover:text-gray-200"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
