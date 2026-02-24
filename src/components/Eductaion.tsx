import { motion } from "framer-motion";

const educationData = [
  {
    title: "Software Engineering (Higher National Diploma)",
    institution: "IJSE - Institute of Software Engineering",
    period: "Feb 2024 - Present",
    description:
      "Gaining hands-on experience in full-stack development, specializing in modern architectures including the MERN stack and Java Spring Boot.",
    skills: ["Full-Stack Development", "System Design", "RESTful APIs"],
    location: "Southern Province",
  },
  {
    title: "G.C.E. Advanced Level",
    institution: "MR/Thelijjawila Central College",
    period: "Graduated Jan 2022",
    description:
      "Completed secondary education with a focus on core academic foundations before transitioning into specialized software engineering studies.",
    skills: [],
    location: "Southern Province",
  },
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.title}
            className="bg-gray-800 bg-opacity-20 p-6 rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{edu.title}</h3>
            <p className="text-gray-300 font-medium">{edu.institution}</p>
            <p className="text-gray-400 italic">{edu.period}</p>
            <p className="mt-2 text-gray-300">{edu.description}</p>

            {edu.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {edu.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-700 bg-opacity-30 rounded-full text-sm text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <p className="mt-2 text-gray-400 text-sm">📍 {edu.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}