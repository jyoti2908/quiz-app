import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="flex flex-wrap gap-4 md:flex-nowrap md:justify-center bg-[#1C1C1C] h-auto w-auto md:gap-8">
            <div className="mx-auto md:mx-0 animate-slideInLeft
            h-[450px] w-[220px] bg-purple-300 text-white rounded-xl border-4 border-gray-500 mt-6 mb-4 md:mb-8">
                <div>
                    <img className="h-20 w-20 rounded-full mt-16 ml-16" src="brain.jpg" />
                </div>
                <div>
                    <p className="animate-flash text-5xl text-purple-700">QUIZ</p>
                </div>
                <div>
                    <img className="h-20 w-20 rounded-full bg-purple-400 ml-16 mt-4" src="num.webp" />
                </div>
                <div>
                     <Link to="/quiz"><button className="h-8 w-40 rounded-full bg-purple-400 text-white text-sm mt-20
                    hover:bg-purple-600">START</button></Link>
                </div>
            </div>
            <div className="mx-auto md:mx-0 animate-slideInRight
             h-[450px] w-[220px] bg-purple-300 text-white rounded-xl border-4 border-gray-500 mt-6 mb-4 md:mb-8">
                <div>
                    <p className="h-20 w-20 rounded-full mt-20 ml-16"></p>
                </div>
                <div className="hover:bg-purple-600 flex h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2
                                transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <Link to="/html"><button className="hover:bg-purple-900 hover:text-white h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px] ml-4">A</button></Link>
                    <p className="mt-[4px] ml-4">HTML Questions</p>
                </div>
                <div className="hover:bg-purple-600 flex h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2
                transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <button className="hover:bg-purple-900 hover:text-white ml-4 h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">B</button>
                    <p className="ml-4 mt-[4px]">CSS Questions</p>
                </div>
                <div className="hover:bg-purple-600 flex h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2
                transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <button className="hover:bg-purple-900 hover:text-white ml-4 h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">C</button>
                    <p className="ml-4 mt-[4px]">JS Questions</p>
                </div>
                <div className="hover:bg-purple-600 flex h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2
                transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <button className="hover:bg-purple-900 hover:text-white ml-4 h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">D</button>
                    <p className="ml-4 mt-[4px]">REACTJS Questions</p>
                </div>
                <div className="hover:bg-purple-600 flex h-8 w-48 rounded-full bg-purple-400 text-white text-sm mt-4 ml-2
                transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <button className="hover:bg-purple-900 hover:text-white ml-4 h-6 w-6 bg-white text-purple-700 rounded-full mt-[3px]">E</button>
                    <p className="ml-4 mt-[4px]">G.K. Questions</p>
                </div>
            </div>
        </div>
    )
}
export default Body;