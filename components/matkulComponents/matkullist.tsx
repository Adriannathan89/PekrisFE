import { useEffect, useState } from "react";
import MatkulCard from "./matkulcard";
import { useRouter } from "next/navigation";

interface MataKuliah {
  id: number;
  nama: string;
  namaDosen: string;
  sks: number;
  listOfTugas: Array<Record<string, unknown>>;
}

export default function MatkulList() {
  const router = useRouter();
  const [data, setData] = useState<MataKuliah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatkul() {
      try {
        const res = await fetch("http://localhost:8080/api/MataKuliah", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
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

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="relative w-full h-full">
      <div
        className="
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-8 
          px-10 py-6
        "
      >
        {data.map((matkul) => (
          <MatkulCard key={matkul.id} data={matkul} />
        ))}
      </div>

      <button
        onClick={() => router.push("/addMatkul")}
        className="
        fixed bottom-23 right-40
        w-14 h-14 
        rounded-full 
        bg-[#0CF25D] 
        shadow-lg shadow-black/40
        text-white text-3xl
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:shadow-black/60
      "
      >
        +
      </button>
    </div>
  );
}
