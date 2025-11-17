import { useEffect, useState } from "react";
import TugasCard from "./tugascard";
import { Darumadrop_One } from "next/font/google";

interface Tugas {
    id: number,
    nama: string,
    deadline: string,
    status: string,
}

export default function TugasList() {
    const [data, setData] = useState<Tugas[]>([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function TugasFetch() {
            try {
                const res = await fetch("http://localhost:8080/api/Tugas", {
                    method: "GET",
                    headers: {
                        "Content-Type": "Application/json",
                    }
                });
                const json = await res.json()
                console.log(json);
                setData(json.Tugas);
            }
            catch (err) {
                console.log("Something went Wrong");
            } finally{
                setloading(false);
            }
        }

        TugasFetch()
    }, []);

    if(loading) return <p className="p-4">Loading...</p>;

    return (
        <div className="flex flex-wrap gap-4 p-4">
            {data.map((tugas) => (<TugasCard key={tugas.id} data={tugas} />))}
        </div>
    );
}