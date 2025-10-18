import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="flex justify-center bg-[#1C1C1C] h-screen gap-8">
            <div className="h-[450px] w-[220px] bg-purple-300 text-white rounded-xl border-4 border-gray-500 mt-6">
                <div>
                    <img className="h-20 w-20 rounded-full mt-16 ml-16" src="brain.jpg" />
                </div>
                <div>
                    <p className="text-5xl text-purple-700">QUIZ</p>
                </div>
                <div>
                    <img className="h-20 w-20 rounded-full bg-purple-400 ml-16 mt-4" src="num.webp" />
                </div>
                <div>
                    <button className="h-8 w-40 rounded-full bg-purple-400 text-white text-sm mt-20">START</button>
                </div>
            </div>
            <div className="h-[450px] w-[220px] bg-purple-300 text-white rounded-xl border-4 border-gray-500 mt-6">
                <div>
                    <p className="h-20 w-20 rounded-full mt-20 ml-16"></p> 
                </div>
                <div className=" flex justify-around h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2">
                   <Link to="/html"><button className="h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">A</button></Link>
                   <p className=" text-start mt-[4px]">HTML Questions</p>
                </div>
                 <div className="flex justify-around h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2">
                   <button className="h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">B</button>
                   <p className=" mt-[4px]">CSS Questions</p>
                </div>
                 <div className="flex justify-around h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2">
                   <button className="h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">C</button>
                   <p className=" mt-[4px]">JS Questions</p>
                </div>
                 <div className="flex justify-around h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2">
                   <button className="h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">D</button>
                   <p className=" mt-[4px]">REACTJS Questions</p>
                </div>
                   <div className="flex justify-around h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2">
                   <button className="h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">E</button>
                   <p className=" mt-[4px]">G.K. Questions</p>
                </div>
            </div>
        </div>
    )
}
export default Body;