interface Tugas {
    id: number,
    nama: string,
    deadline: string,
    status: string,
}

export default function TugasCard({data}: {data:Tugas}) {
    return(
        <div className="flex justify-left border-1 mt-10 ml-10 w-60 rounded-lg">
            <div className="ml-5">
                <p>Tugas: {data.nama}</p>
                <p>Deadline: {data.deadline}</p>
                <p>Status: {data.status}</p>
            </div>
        </div>
    );
}