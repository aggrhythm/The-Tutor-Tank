export default function Upcoming({ data }) {

    return <div className="bg-[--secondary] w-1/2 flex-col items-center p-10 rounded-lg m-3">
        <div className="text-[--tertiary] text-4xl font-bold">Upcoming Sessions</div>
        <div className="text-black text-2xl mt-7">
            {data.map((d, i) => {
                return <div key={i} className="gap-16 flex">
                    <div>{d[0]}</div>
                    <div >{d[1]}</div>
                    <div className="ml-20">{d[2]}</div>
                </div>
            })}
        </div>
    </div>
}