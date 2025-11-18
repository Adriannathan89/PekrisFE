"use Client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Matkuladd() {
    const router = useRouter();

    const [form, setForm] = useState({
        nama: "",
        namaDosen: "",
        deskripsi: "",
        sks: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const requestInfo = {
            nama: form.nama,
            namaDosen: form.namaDosen,
            deskripsi: form.deskripsi,
            sks: parseInt(form.sks)
        }

        const res = await fetch("http://localhost:8080/api/MataKuliah", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestInfo),
        })

        const result = await res.json();

        router.push("/MataKuliah");
        console.log(result);
    }

    return (
        <div className="flex justify-center mt-[175px]">
            <div>
                <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-80 mx-auto">
                    <input
                    type="string"
                    name="nama"
                    placeholder="nama Mata kuliah"
                    className="border p-2 w-80"
                    value={form.nama}
                    onChange={handleChange}
                     />

                    <input
                    type="string"
                    name="namaDosen"
                    placeholder="nama dosen pengajar"
                    className="border p-2 w-80"
                    value={form.namaDosen}
                    onChange={handleChange}
                     />

                    <input
                    type="string"
                    name="deskripsi"
                    placeholder="deskripsi Mata kuliah"
                    className="border p-2 w-80"
                    value={form.deskripsi}
                    onChange={handleChange}
                     />

                    <input
                    type="number"
                    name="sks"
                    placeholder="SKS Mata kuliah"
                    className="border p-2 w-80"
                    value={form.sks}
                    onChange={handleChange}
                     />   
                    
                    <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded w-80"
                    type="submit">Tambahkan
                    </button>
                </form>
            </div>
        </div>
    );
}