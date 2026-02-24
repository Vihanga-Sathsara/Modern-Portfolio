import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section 
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-6"
    >
      <div className="lg:w-[80%] md:w-[90%] w-[90%] text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 
          bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 
          bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-sm md:text-3xl lg:text-2xl leading-relaxed w-full"
        >
          I am a driven Software Engineering student at IJSE and a passionate 
          Full Stack Developer focused on building modern web, mobile, and 
          standalone desktop applications. 

          I specialize in React and React Native for frontend and mobile 
          development, combined with strong backend expertise in Java, 
          Spring Boot, and database design.

          I am committed to writing clean, scalable, and maintainable code 
          while delivering seamless user experiences. My goal is to transform 
          ideas into powerful, real-world digital solutions.
        </motion.p>
      </div>
    </section>
  )
}