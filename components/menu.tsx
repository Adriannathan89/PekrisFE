import Button from "@/components/Button";
import { Home, BookOpen, ClipboardList, Calculator} from "lucide-react";
import { Space_Mono } from "next/font/google";
import { useRouter } from "next/navigation";


export default function Menu() {
  const router = useRouter(); 

  return (
    <div className=" flex">
    <div className="border-r-1 py-2 border-[#A1A6B4]">
        <div className=" flex px-3 mb-4"> 
          <div className="mt-[4px] w-[15px] h-[15px] rounded-full border-2 border-green-400"></div> 
          <span className="flex justify-center ml-2 text-[18px] text-[#3e84ed]">Menu</span>
        </div>
        <div>
          <p className="mb-2">
            <Button onClick={() => router.push("/")}><Home size={22} /> <span className="ml-2">Dasborad</span></Button>
          </p>
          <p className="mb-2">
          <Button onClick={() => router.push("/MataKuliah")}><BookOpen size={22} />  <span className="ml-2">Mata Kuliah</span></Button>
          </p>
          <p className="mb-2">
          <Button onClick={() => router.push("/Tugas")}><ClipboardList size={20} />   <span className="ml-2">Tugas</span></Button>
          </p>
          <p className="mb-2"> 
            <Button onClick={() => router.push("/KalkulatorNilai")}><Calculator size={20} /> <span className="ml-2">Kalkulator Nilai</span></Button>
          </p>
        </div>
    </div>
    </div>
  );
}
    