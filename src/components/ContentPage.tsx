import { motion } from "framer-motion"
import NavigationBar from "./NavigationBar"
import HeroSection from "./HeroSection"
import AboutMe from "./AboutMe"
import Projects from "./Project"
import Skills from "./Skills"
import Education from "./Eductaion"
import Contact from "./Contact"

export default function ContentPage() {
    return (
        <section className="bg-linear-to-br from-gray-950 via-gray-900 to-gray-800 overflow-x-hidden items-center justify-center relative">
            <motion.section  
                className="w-full top-3 fixed z-50 items-center justify-center flex" 
                animate={{ opacity: 1, y: 0 }} 
                initial={{ opacity: 0, y: -20 }} 
                transition={{ duration: 1 }}
            >
                <NavigationBar />
            </motion.section>

            <section className="w-full overflow-x-hidden">
                <HeroSection />
            </section>
            <section className="w-full overflow-x-hidden">
                <AboutMe />
            </section>
            <section className="w-full overflow-x-hidden">
                <Projects />
            </section>
            <section className="w-full overflow-x-hidden">
                <Skills />
            </section>
            <section className="w-full overflow-x-hidden">
                <Education />
            </section>
            <section className="w-full overflow-x-hidden">
                <Contact />
            </section>
        </section>
       
    )
}