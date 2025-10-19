import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="w-full bg-[#1C1C1C] text-white px-6 py-4 ">
            <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Logo Section */}
                <div className="flex flex-row items-center gap-2 md:flex-col md:gap-0">
                    <Link to="/"><HiOutlineQuestionMarkCircle className="h-6 w-6" /></Link>
                    <Link to="/"> <p className="text-green-400 text-md font-semibold">WEB<span className="text-xs">Quiz</span></p></Link>
                </div>
                <div />
                {/* Navigation */}
                <ul className="mx-auto md:mx-0 flex flex-wrap text-sm gap-2 md:gap-8 md:text-md text-gray-400">
                    <li className="transition-transform duration-300 ease-in-out hover:scale-90 hover:text-purple-300">HOME</li>
                    <Link to="/about"><li className="transition-transform duration-300 ease-in-out hover:scale-90 hover:text-purple-300">ABOUT</li></Link>
                    <Link to="/quiz"><li className="transition-transform duration-300 ease-in-out hover:scale-90 hover:text-purple-300">QUIZ</li></Link>
                    <li className="transition-transform duration-300 ease-in-out hover:scale-90 hover:text-purple-300">PRICING</li>
                    <Link to="/contact"><li className="transition-transform duration-300 ease-in-out hover:scale-90 hover:text-purple-300">CONTACT</li></Link>
                    <li className="transition-transform duration-300 ease-in-out hover:scale-90 hover:text-purple-300">CONTRIBUTE</li>
                    <li>|</li>
                </ul>

                {/* Button Group - Always side by side */}
                <div className="mx-auto md:mx-0 flex flex-nowrap gap-4">
                    <button className="font-semibold text-xs px-4 py-2 h-8 w-24 bg-green-400 text-white rounded-3xl
                    animate-shake hover:bg-transparent">SIGN IN</button>
                    <button className="font-semibold text-xs px-4 py-2 h-8 w-24 border border-green-400 text-white 
                    animate-shake hover:bg-green-400 rounded-3xl">SIGN UP</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
