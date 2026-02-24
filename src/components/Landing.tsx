import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import ContentPage from "./ContentPage"

const Landing = () => {
const [showHero, setShowHero] = React.useState(true)
const [showContent, setShowContent] = React.useState(false)
    return ( 
        <> 
            {
                showHero && !showContent && (
                     
                    <motion.section
                        key="hero"
                        className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                    <div className="w-full flex flex-row items-center justify-center absolute">
                        <div className="w-96 h-96 bg-purple-800 opacity-20 rounded-full blur-3xl"></div>
                        <div className="w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
                    </div>
                        <motion.div
                            className="text-center z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                        >

                            <motion.h1
                                className="text-5xl md:text-6xl font-bold mb-4"
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ type: "spring", stiffness: 250, damping: 12 }}
                                onAnimationComplete={() => setTimeout(() => setShowHero(false), 800)}
                            >
                                Hi 👋
                            </motion.h1>

                            <motion.h2
                                className="text-3xl md:text-5xl font-semibold mb-3"
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                I'm Vihanga Sathsara
                            </motion.h2>
                        </motion.div>
                    </motion.section> 
                )
                                
            }     
            
            {
                !showHero && !showContent && (
                    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
                    <div className="w-full flex flex-row items-center justify-center absolute">
                        <div className="w-96 h-96 bg-purple-800 opacity-20 rounded-full blur-3xl"></div>
                        <div className="w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
                    </div>
                        <motion.div
                            className="h-full flex items-center justify-center absolute z-10"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            onAnimationComplete={() => setTimeout(() => setShowContent(true), 800)}
                        >
                            <p className="text-xl md:text-4xl lg:text-5xl font-bold">
                                Welcome to My Portfolio 🚀
                            </p>
                        </motion.div>
                    </section>

                )
            }
            {
                showContent  && (
                        <ContentPage></ContentPage>
                )
            }
        </>
    )
}

export default Landing