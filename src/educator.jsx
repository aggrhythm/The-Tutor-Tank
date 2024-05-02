import Exams from "./components/exams";
import Upcoming from "./components/upcoming";

export default function Educator() {
    let data = [
        [1, "Thermodynamics", "3:00-4:00, 22nd April, 2024"],
        [1, "Thermodynamics", "3:00-4:00, 22nd April, 2024"],
        [1, "Thermodynamics", "3:00-4:00, 22nd April, 2024"],
        [1, "Thermodynamics", "3:00-4:00, 22nd April, 2024"],
        [1, "Thermodynamics", "3:00-4:00, 22nd April, 2024"],
        [1, "Thermodynamics", "3:00-4:00, 22nd April, 2024"],
    ]
    return <div>
        <div className="p-20">
            <div className="text-8xl font-bold text-[--tertiary] ">Heyy Learner,</div>
            <div className="text-7xl font-bold">
                Attend sessions and give tests to gear up for your next exam.
            </div>
        </div>
        <div className="flex ml-16 w-full">

            <Upcoming data={data.concat(data)} />
            <div>
                <Exams />
                <div className="w-full bg-[--secondary] m-3 rounded-lg pb-10">
                    <div className="text-4xl font-bold text-[--tertiary] text-center">Analysis</div>
                    <img src="/graph.png" width={400} className="ml-12 my-10 "></img>

                </div>
            </div>
        </div>

    </div>
}