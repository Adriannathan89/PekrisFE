"use client";

export default function HeaderContent({Judul} : {Judul : string}) {
  return (
    <div className="flex justify-center border-b-1 border-[#A1A6B4] text-[#ffffff] h-20">
        <div className="w-50 ml-[1px] border-[#A1A6B4]">
            <div className="px-3 py-[2px] mt-6">
            <a className="flex justify-center font-bold">{Judul}</a>
            </div>
        </div>
    </div>
  );
}
    