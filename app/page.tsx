import Image from "next/image";
import Menu from "../components/menu"
import Header from "../components/header"
import ItemContainer from "@/components/itemcontainer";
import SubjectList from "../components/subjectlist"

export default function Home() {
  return (
    <div className="flex justify-center mt-2">
      <div className="border-[2px] border-[#87CEFA] ml-10 mt-10 rounded-2xl overflow-hidden w-375 bg-[#F7F8FC]">
      <Header />
      <div className="flex text-[#6C6F75]">
        <Menu />
        <ItemContainer />
      </div>
      </div>
    </div>
  );
}
