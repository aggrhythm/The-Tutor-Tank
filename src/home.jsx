import { useNavigate } from "react-router-dom"

function Card({ head, body }) {
    return <div className="w-1/3 m-2 h-30 bg-[--secondary] p-6 rounded-lg">
        <div className="text-3xl text-black font-bold">{head}</div>
        <div className="text-2xl text-gray-600">{body}</div>
    </div>
}

export default function Home() {
    const navigate = useNavigate();
    return <div className="flex flex-col items-center">
        <div className="h-full  text-left pt-16 px-40">
            <div className="text-9xl font-bold text-[--tertiary] ">Hi,</div>
            <div className="text-7xl font-bold">
            Welcome to tutor tank,
            where every fish find its place in the deep ocean.
            </div>
            <div className="w-full flex justify-end my-8 gap-10 px-20">
                <button onClick={() => { navigate("/student") }}>Learner</button>
                <button onClick={() => { navigate("/educator") }}>Tutor</button>
            </div>
        </div>
        <div className="bg-[--secondary] my-16 w-4/5 h-full rounded-xl flex overflow-hidden">
            <div className="p-10 pt-14">
                <div className="text-6xl text-[--tertiary] font-bold pb-6">About TutorTank</div>
                <div className="text-3xl">
                     An upcoming platform leveraging the Adam Model to recommend exam question on basis of user's performance and connect with a tutor who is most appropriate for the student.
                </div>
                <div className="flex gap-8 mt-10 mx-10">
                    <div className="p-2 bg-[--tertiary]  text-white text-center rounded-lg text-2xl w-24">Physics</div>
                    <div className="p-2 bg-[--tertiary]  text-white text-center rounded-lg text-2xl w-24">Calculus</div>
                    <div className="p-2 bg-[--tertiary]  text-white text-center rounded-lg text-2xl w-24">Algebra</div>
                    <div className="p-2 bg-[--tertiary]  text-white text-center rounded-lg text-2xl w-48">and much more...</div>
                </div>
            </div>
            <img src="/about.jpg" width={400} />

        </div>
        <div className="w-full flex-col items-start mt-10">
            <div className="text-6xl text-[--tertiary] font-bold p-10">Testimonials</div>
            <div className="flex mb-10">

                <Card head={"Bruce Wayne, DTU"} body={"TutorTank revolutionized my study routine, offering engaging lessons and personalized learning paths. With its interactive quizzes and comprehensive resources, I soared to academic success, achieving remarkable grades effortlessly."} />
                <Card head={"Bruce Wayne, DTU"} body={"TutorTank revolutionized my study routine, offering engaging lessons and personalized learning paths. With its interactive quizzes and comprehensive resources, I soared to academic success, achieving remarkable grades effortlessly."} />
                <Card head={"Bruce Wayne, DTU"} body={"TutorTank revolutionized my study routine, offering engaging lessons and personalized learning paths. With its interactive quizzes and comprehensive resources, I soared to academic success, achieving remarkable grades effortlessly."} />
            </div>
        </div>

    </div>
}