import { useNavigate } from "react-router-dom"
export default function Exams() {
    let data = [
        [1, "Exam103", "24th April, 2024", "/exam"],
        [1, "Exam103", "24th April, 2024", "/exam"],
        [1, "Exam103", "24th April, 2024", "/exam"],
    ]
    const navigate = useNavigate()
    return <div className="bg-[--secondary] w-full flex-col items-center p-10 rounded-lg m-3">
        <div className="text-[--tertiary] text-4xl font-bold">Upcoming Exams</div>
        <div className="text-black text-2xl mt-7">
            {data.map((d, i) => {
                return <div key={i} onClick={() => { navigate(d[3]) }} className="gap-16 flex cursor-pointer">
                    <div>{d[0]}</div>
                    <div >{d[1]}</div>
                    <div className="ml-10">{d[2]}</div>
                </div>
            })}
        </div>
    </div>
}