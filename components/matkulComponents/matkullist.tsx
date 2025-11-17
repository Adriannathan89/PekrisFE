import { useEffect, useState } from "react";
import MatkulCard from "./matkulcard"

interface MataKuliah {
  id: number,
  nama: string,
  namaDosen: string,
  sks: number,
  listOfTugas: Array<Record<string, unknown>>
}

export default function MatkulList() {
  const [data, setData] = useState<MataKuliah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchMatkul() {
    try {
      const res = await fetch("http://localhost:8080/api/MataKuliah", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const json = (await res.json()).MataKuliah;
      setData(json);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }

  fetchMatkul();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div>
      <div className="flex flex-wrap gap-4 p-4">
        {
          data.map((Matkul) => (<MatkulCard key={Matkul.id} data={Matkul} />
        ))
        }
      </div>
      <div className="flex justify-end fixed bottom-[100px] right-[155px]">
        <button className="w-15 h-15 border-1 border-black rounded-full bg-green-400">
          <span className="text-white text-3xl">+</span>
        </button>
      </div>
    </div>
  );

}