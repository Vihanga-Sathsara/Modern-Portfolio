import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaGithub, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMongodb, SiMysql, SiTypescript, SiJenkins } from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
      { name: "React Native", icon: <FaReact className="text-cyan-400 text-2xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-purple-500 text-2xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-2xl" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
      { name: "Java", icon: <FaJava className="text-red-600 text-2xl" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600 text-2xl" /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-orange-500 text-2xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-2xl" /> },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub className="text-gray-300 text-2xl" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400 text-2xl" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-400 text-2xl" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

      <div className="flex flex-col gap-12 max-w-6xl mx-auto">
        {skillCategories.map((category, catIndex) => (
          <div key={category.category}>
            <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800 bg-opacity-20 border border-gray-700 hover:bg-gray-700 transition cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + catIndex * 0.2, duration: 0.4, type: "spring", stiffness: 100 }}
                >
                  {skill.icon}
                  <span className="mt-2 text-white font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}