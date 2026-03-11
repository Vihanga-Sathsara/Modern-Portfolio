import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { FaArrowRight, FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function HeroSection() {
    return (
        <section id="home" className="w-full flex items-center justify-center min-h-screen relative overflow-hidden mt-12">
            <div className="w-full flex flex-row items-center justify-center absolute">
                <div className="w-96 h-96 bg-purple-800 opacity-20 rounded-full blur-3xl"></div>
                <div className="w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
            </div>
            <div className="w-full flex flex-col items-center justify-center relative z-10">
                <div className="text-center w-full relative mb-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-lg md:text-3xl lg:text-3xl font-bold 
                           bg-linear-to-r from-blue-400  to-purple-500 bg-clip-text text-transparent mb-4"
                        >
                        <Typewriter
                            words={[
                            "Web Developer",
                            "Mobile App Developer",
                            "Full Stack Developer",
                            "Software Engineer"
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </motion.h2>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="text-2xl md:text-4xl lg:text-7xl font-bold text-white">
                        Hi, I'm Vihanga Sathsara
                    </motion.h1>   
                </div>
                <div className="lg:w-[50%] w-[80%] relative text-center mt-4">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2 }}
                        className="text-base lg:text-2xl md:text-2xl text-gray-300 mb-4">Full-Stack Engineer passionate about building modern, 
                        scalable systems that balance performance, usability, and clean code. 
                        I transform complex requirements into refined digital experiences.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.5 }}
                        className="w-full flex flex-row gap-3 items-center justify-center mt-7">
                        <a href="#projects">
                            <button className="mt-4 px-6 py-3 border border-b-blue-500 border-r-blue-500 border-l-purple-500 border-t-purple-500 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 text-[10px] md:text-2xl lg:text-lg cursor-pointer">
                                View My Work<FaArrowRight className="ml-2 inline-block" />
                            </button>
                        </a>       
                        <a href="/documents/VihangaSathsara.pdf"  rel="noopener noreferrer" target="_blank" download>
                            <button className="mt-4 px-6 py-3 border border-b-blue-500 border-r-blue-500 border-l-purple-500 border-t-purple-500 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 text-[10px] md:text-2xl lg:text-lg cursor-pointer">
                                Download CV <FaDownload className="ml-2 inline-block" />
                            </button>
                        </a>   
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3 }}
                        className="w-full flex flex-row gap-3 items-center justify-center mt-7">
                        <a href="https://www.linkedin.com/in/vihanga-sathsara-363100265/" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 lg:text-3xl text-xl border rounded-full p-4"><FaLinkedin /></a>
                        <a href="https://github.com/Vihanga-Sathsara" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 lg:text-3xl text-xl border rounded-full p-4"><FaGithub /></a>
                    </motion.div>
                </div>
            </div>
            
        </section>
    )
}