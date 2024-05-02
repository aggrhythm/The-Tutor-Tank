export default function Exams() {
    let data = {
        question: "A certain university will select 1 of 7 candidates eligible to fill a position in the mathematics department and 3 of 10 candidates eligible to fill 3 identical positions in the computer science department . if none of the candidates is eligible for a position in both departments , how many different sets of 4 candidates are there to fill the 4 positions ?",
        options: ["a ) 420", "b ) 770", "c ) 840", "d ) 165", "e ) 315"]
    }
    return <div className="w-full flex flex-col items-center pt-10 mb-10">
        <div className="flex justify-between w-5/6 text-[--tertiary] text-5xl font-bold">
            <div>Exams 103</div>
            <div>23rd Apr, 2024</div>
        </div>
        <div className="w-5/6 h-full bg-[--secondary] rounded-lg">
            <div className="flex justify-between w-full h-1/5 bg-[--tertiary] text-white px-10 py-4 text-3xl rounded-t-lg">
                <div>Q1/20</div>
                <div>Time: 02:24</div>
            </div>
            <div className="">
                <div className="text-3xl mt-16 mx-10">Q {data.question}</div>
                <div className="flex m-10 gap-10 my-16">
                    {data.options.map((d, i) => {
                        return <button className="bg-[--tertiary] text-white text-3xl p-3 px-5 rounded-lg" key={i}>{d} </button>

                    })}
                </div>
            </div>
            <div className="flex justify-between w-full h-1/5 bg-[--tertiary] text-white px-10 py-4 text-xl rounded-b-lg">
                <div className="flex gap-8">
                    <button className="text-black bg-[--secondary] text-xl px-7 py-2">Prev</button>
                    <button className="text-black bg-[--secondary] text-xl px-7 py-2">Next</button>
                </div>
                <button className="text-black bg-[--secondary] text-xl px-7 py-2">Submit</button>

            </div>
        </div>


    </div>
}