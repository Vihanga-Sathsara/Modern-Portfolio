import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
  id: 1,
  title: "SkillLink",
  shortDesc: "Mobile skill & service marketplace app built with React Native and Firebase",
  fullDesc:
    "SkillLink is a mobile-first marketplace application that connects skilled professionals with clients. Service providers can create profiles, publish their services, and manage bookings, while clients can search, explore, and request services easily. The application uses Firebase Authentication for secure login and Firestore for real-time cloud data management, ensuring scalability and smooth performance across Android and iOS devices.",
  tech: ["React Native", "Firebase", "Firestore", "Expo"],
  link: "https://github.com/Vihanga-Sathsara/SkillLink",
  image: "/images/skilllink.png", // replace with your actual image path
},
 {
  id: 2,
  title: "EduFlow",
  shortDesc: "AI-powered MERN stack education management platform deployed on Vercel",
  fullDesc:
    "EduFlow is a full-stack education management platform built using the MERN stack (MongoDB, Express.js, React, Node.js) and enhanced with AI-powered capabilities. The system includes secure JWT-based authentication, student and course management, and RESTful API architecture. An AI model is integrated using OpenRouter to provide intelligent features within the platform. Cloudinary is used for efficient cloud-based image management, and the application is deployed on Vercel for fast and scalable hosting. The project demonstrates modern full-stack architecture, clean code practices, and cloud integration.",
  tech: [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "JWT",
    "OpenRouter AI",
    "Cloudinary",
    "Vercel",
    "REST API"
  ],
  link: "https://github.com/Vihanga-Sathsara/EduFlow-FrontEnd",
  backendLink: "https://github.com/Vihanga-Sathsara/EduFlow-BackEnd",
  image: "/images/eduflow.png",
},
{
  id: 3,
  title: "JustRide",
  shortDesc: "Full-stack taxi booking system built with Spring Boot and MySQL",
  fullDesc:
    "JustRide is a complete web-based taxi booking system developed using Java Spring Boot and MySQL. The platform connects passengers, drivers, and administrators through a secure JWT-based authentication system. It includes real-time ride booking, GPS tracking with Leaflet.js maps, automated fare calculation, driver verification workflows, and a comprehensive admin dashboard for financial and system monitoring. The application follows a layered architecture with RESTful APIs, role-based access control, and secure data handling practices.",
  tech: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "MySQL",
    "Hibernate",
    "Bootstrap 5",
    "JavaScript (ES6)",
    "Leaflet.js",
    "Maven"
  ],
  link: "https://github.com/Vihanga-Sathsara/JustRide",
  image: "/images/justride.png"
},
{
  id: 4,
  title: "Aquarium Management System",
  shortDesc: "JavaFX-based aquarium management platform with MySQL and reporting features",
  fullDesc:
    "The Aquarium Management System is a desktop application designed to simplify aquarium operations. Developed with Java and JavaFX for a responsive GUI, it uses MySQL for secure data storage and JasperReports for professional reporting. The system follows the MVC (Model-View-Controller) pattern combined with a Layered Architecture to separate concerns, manage business logic, and ensure maintainable code. Administrators can manage aquarium tanks, animals, feeding schedules, and staff efficiently through intuitive interfaces.",
  tech: [
    "Java",
    "JavaFX",
    "MySQL",
    "Maven",
    "JasperReports",
    "MVC Design Pattern",
    "Layered Architecture"
  ],
  link: "https://github.com/Vihanga-Sathsara/Aquarium-Managment-System",
  image: "/images/aquarium-management.png"
},
{
  id: 5,
  title: "Mental Therapy Center Management",
  shortDesc: "Desktop app for managing therapy center operations with appointments, sessions, and reporting.",
  fullDesc:
    "The Mental Therapy Center Management system is a desktop application designed to streamline therapy center operations. Built with JavaFX for the UI and MySQL for data storage, it handles user authentication, appointment scheduling, session tracking, and reporting using a clean MVC and Layered Architecture.",
  tech: ["Java", "JavaFX", "MySQL"],
  link: "https://github.com/Vihanga-Sathsara/Mental_Therapy_Center_Management",
  image: "/images/mental-therapy-center.png"
},
{
  id: 6,
  title: "HotelSite",
  shortDesc: "Responsive hotel website built using Bootstrap.",
  fullDesc:
    "HotelSite is a fully responsive website designed for hotel businesses, showcasing rooms, services, and amenities. Built with HTML, CSS, and Bootstrap for modern layout, responsiveness, and smooth user experience.",
  tech: ["HTML", "CSS", "Bootstrap"],
  link: "https://github.com/Vihanga-Sathsara/HotelSite-Boostrap",
  image: "/images/hotel-site.png"
},
{
  id: 7,
  title: "Review Website",
  shortDesc: "A platform to submit and browse reviews for products/services",
  fullDesc: "This project is a dynamic review website where users can submit and browse reviews for products or services. Built using HTML, CSS, and JavaScript, it demonstrates responsive design and interactive user experience.",
  tech: ["HTML", "CSS", "JavaScript"],
  link: "https://github.com/Vihanga-Sathsara/Review-website",
  image: "/images/review-website.png" // replace with your image path
},
{
  id: 8,
  title: "Space Shooter Game",
  shortDesc: "A classic 2D space shooter game built with JavaScript",
  fullDesc: "This project is an interactive 2D space shooter game where players can control a spaceship, shoot enemies, and collect power-ups. Built using HTML, CSS, and JavaScript, it showcases game logic, animations, and collision detection.",
  tech: ["HTML", "CSS", "JavaScript"],
  link: "https://github.com/Vihanga-Sathsara/Space_Shooter_Game",
  image: "/images/space-shooter.png" // replace with your image path
}
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  return (
    <section id="projects" className="min-h-screen text-white py-16 px-6 w-[80%] items-center justify-center mx-auto mt-12">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition overflow-hidden"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.shortDesc}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-xl max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-4">{selectedProject.fullDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-800 border border-gray-700 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Visit Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}