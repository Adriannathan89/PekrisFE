import React from "react"
import Button from "../Button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface MataKuliah {
  id: number,
  nama: string,
  namaDosen: string,
  sks: number,
  listOfTugas: Array<Record<string, any>>
}

export default function MatkulCard({data}: {data: MataKuliah}) {

    const panjang = data.listOfTugas.length;
    let tugasContent;

    switch (panjang) {
        case 1:
            tugasContent = (
                <>
                    {data.listOfTugas.map((item, index) => (
                        <div key={index}>
                            <div className="flex">
                                <div className="mt-[5px] w-[7px] h-[7px] rounded-full border-2 border-green-400"></div>
                                <p className="ml-2">Nama: {item.nama}</p>
                            </div>
                            <div className="ml-[14px]">
                                <p>Deadline: {item.deadline}</p>
                                <p>Status: {item.status}</p>
                            </div>
                        </div>
                    ))}
                </>
            );
            break;
        case 2:
            const item = data.listOfTugas[0]
            tugasContent = (
                <div>
                    <div className="flex">
                            <div className="mt-[5px] w-[7px] h-[7px] rounded-full border-2 border-green-400"></div>
                                <p className="ml-2">Nama: {item.nama}</p>
                            </div>
                    <div className="ml-[14px] mb-[7px]">
                        <p>Deadline: {item.deadline}</p>
                        <p>Status: {item.status}</p>
                    </div>
                    <button className="group flex">
                        <span className="mr-[5px]">Selengkapnya</span> 
                        <ChevronDown className="mt-[3px] transition-transform duration-300 group-hover:rotate-180" size={15} color="white" />
                    </button>
                    
                </div>
            );
            break;

        default:
            tugasContent = <p>Tidak ada tugas</p>;
    }

    return (
        <div className="flex justify-left border-1 mt-10 ml-10 w-60 h-60 rounded-xl">
            <div className="mt-4 ml-5">
                <p>Matkul: {data.nama}</p>
                <p>Dosen: {data.namaDosen}</p>
                <p>SKS: {data.sks}</p>

                <div>
                    <p className="font-semibold">Tugas:</p>
                    {tugasContent}
                </div>
            </div>
        </div>
    );
}
