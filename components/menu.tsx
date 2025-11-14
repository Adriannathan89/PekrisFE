import Button from "@/components/Button";

export default function Menu() {
  return (
    <div className=" flex">
    <div className="border-r-1 py-2 border-[#A1A6B4]">
        <p className="px-3 mb-4">Menu</p>
        <div>
          <p><Button>Dasborad</Button></p>
          <p><Button>Mata Kuliah</Button></p>
          <p><Button>Tugas</Button></p>
          <p><Button>Kalkulator Nilai</Button></p>
        </div>
    </div>
    </div>
  );
}
    