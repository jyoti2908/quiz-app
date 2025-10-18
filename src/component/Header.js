import { FaRegQuestionCircle } from "react-icons/fa";

function Header() {
    return (
        <div>
            <div className="font-semibold text-sm flex justify-around text-center gap-6 px-4 py-4 w-screen h-16 bg-[#1C1C1C] text-white">
                <div>
                    <FaRegQuestionCircle  className="h-6 w-6 ml-4"/>
                    <p className="text-green-400 text-md">WEBQuiz</p>
                </div>
                <div />
                <div />
                <div className="">
                    <ul className="flex flex-row gap-8 px-4 py-2 text-gray-400">
                        <li>HOME </li>
                        <li>ABOUT</li>
                        <li>QUIZ</li>
                        <li>PRICING</li>
                        <li>CONTACT </li>
                        <li>CONTRIBUTE </li>
                        <li>|</li>
                    </ul>
                </div>
                <div>
                    <button className="font-semibold text-xs p-2 h-8 w-24 border-none bg-green-400 text-white rounded-3xl">SIGN IN</button>
                    <button className="ml-4 font-semibold text-xs p-2 h-8 w-24 border-[1px] border-green-400 bg-transparent text-white rounded-3xl">SIGN UP</button>
                </div>
            </div>

        </div>
    )
}
export default Header;