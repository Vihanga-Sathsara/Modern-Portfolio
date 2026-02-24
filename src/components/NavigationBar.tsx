import React from "react"
import { FaCode,FaBars } from "react-icons/fa"
export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    return (
        <> 
            <nav className="w-[90%] bg-white/10 backdrop-blur-md shadow-md p-4 rounded-lg">
                <div className="container mx-auto flex items-center justify-between">
                    <div><p className="text-white font-bold text-base lg:text-2xl flex items-center"><FaCode className="mr-2" /> My Portfolio</p></div>
                    <ul className="hidden lg:flex lg:space-x-6 lg:text-xl">
                        <li className="text-white"><a href="#home" className="hover:text-blue-400 hover:underline hover:underline-offset-6 transition-colors duration-300">Home</a></li>
                        <li className="text-white"><a href="#about" className="hover:text-blue-400 hover:underline hover:underline-offset-6 transition-colors duration-300">About</a></li>
                        <li className="text-white"><a href="#projects" className="hover:text-blue-400 hover:underline hover:underline-offset-6 transition-colors duration-300">Projects</a></li>
                        <li className="text-white"><a href="#skills" className="hover:text-blue-400 hover:underline hover:underline-offset-6 transition-colors duration-300">Skills</a></li>
                        <li className="text-white"><a href="#contact" className="hover:text-blue-400 hover:underline hover:underline-offset-6 transition-colors duration-300">Contact</a></li>
                    </ul>
                    <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} >
                        <FaBars className="text-white text-2xl" />
                    </div>
                </div>
                {
                    isMenuOpen && (
                        <div className="absolute w-[70%] right-0 top-16 p-5 rounded-lg bg-blue-700/10 backdrop-blur-md z-10">
                            <ul className="flex flex-col mt-4 space-y-3 text-white lg:hidden">
                                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                                <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
                                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    )
                }
            </nav>
            
        </>
    )
}