import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Download,
  Github,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Moon,
  Sun,
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
            : "bg-white text-gray-700 hover:bg-gray-100"
        } shadow-lg`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero Section */}
      <section
        className={`${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900"
            : "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
        } text-white`}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="space-y-6">
            <div className="inline-block">
              <span
                className={`text-sm font-medium px-4 py-2 rounded-full ${
                  darkMode
                    ? "bg-blue-900/50 text-blue-300"
                    : "bg-blue-500/20 text-blue-200"
                } backdrop-blur-sm`}
              >
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Rohit Ghadage
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed animate-fade-in">
              I am Rohit Ghadage, a Website Developer with around 2 years of
              experience building modern, intuitive, and progressive web
              applications using technologies like Next.js, React, and Node.js.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:rohitghadage070@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Mail size={20} />
                Email Me
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1-H2ishLs81zGmcJ1OwX06Lx2RMAZ-mxo"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white/10 hover:bg-white/20"
                } backdrop-blur-sm`}
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 pt-6">
              <a
                href="https://linkedin.com/in/rohit-ghadage-6591161a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="tel:+919112823376"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
              <a
                href="mailto:rohitghadage070@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="space-y-12">
          {/* TechneAI */}
          <div
            className={`relative pl-8 border-l-2 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div
              className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ${
                darkMode ? "bg-blue-500" : "bg-blue-600"
              }`}
            ></div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Software Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    TechneAI
                  </p>
                </div>
                <span
                  className={`text-sm px-4 py-1 rounded-full ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Mar 2025 – Present
                </span>
              </div>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Migrated legacy platforms to Next.js 15, improving SEO and
                    scalability
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Automated ticketing workflows, reducing manual effort by 40%
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Reduced build size by 60% and containerized app for faster
                    deployments
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>Designed Node.js alternative to legacy PHP CMS</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>Reviewed PRs for scalable, maintainable code</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Doographics */}
          <div
            className={`relative pl-8 border-l-2 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div
              className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ${
                darkMode ? "bg-blue-500" : "bg-blue-600"
              }`}
            ></div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Junior Fullstack Developer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Doographics
                  </p>
                </div>
                <span
                  className={`text-sm px-4 py-1 rounded-full ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Dec 2023 – Feb 2025
                </span>
              </div>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Built modern, SEO-friendly web apps with Next.js using SSR,
                    SSG, and ISR
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Integrated Express + MySQL microservices with reusable UI
                    components
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>Built PWAs with Redis caching and Service Workers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Improved NGINX performance and integrated ElasticSearch
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Learn and Build */}
          <div
            className={`relative pl-8 border-l-2 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div
              className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ${
                darkMode ? "bg-gray-500" : "bg-gray-400"
              }`}
            ></div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">MERN Stack Intern</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Learn and Build
                  </p>
                </div>
                <span
                  className={`text-sm px-4 py-1 rounded-full ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Jul 2023 – Aug 2023
                </span>
              </div>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Built one-to-one chat app with Socket.io and JWT
                    authentication
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>Worked with React, Redux Toolkit, and Material-UI</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Immensphere */}
          <div
            className={`relative pl-8 border-l-2 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div
              className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ${
                darkMode ? "bg-gray-500" : "bg-gray-400"
              }`}
            ></div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Web Development Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Immensphere
                  </p>
                </div>
                <span
                  className={`text-sm px-4 py-1 rounded-full ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Feb 2023 – Apr 2023
                </span>
              </div>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Developed accessible, responsive websites and REST APIs
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>Used Chart.js for dynamic data visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`${darkMode ? "bg-gray-800/50" : "bg-white"} py-20`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "NestJS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 text-gray-200"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Styling & UI
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Tailwind CSS", "Material-UI", "Bootstrap 5"].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 text-gray-200"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Databases & State
              </h3>
              <div className="flex flex-wrap gap-3">
                {["MySQL", "MongoDB", "Redis", "Redux Toolkit"].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 text-gray-200"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                DevOps & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Linux",
                  "Bash",
                  "Nginx",
                  "Docker",
                  "Kubernetes",
                  "ElasticSearch",
                  "PWAs",
                  "Service Workers",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 text-gray-200"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold">Personal Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* YOGGURU */}
          <div
            className={`rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-white hover:shadow-xl"
            } shadow-lg`}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold">YOGGURU</h3>
              <ExternalLink className="text-blue-600" size={20} />
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["MERN", "GPT-3.5", "Stripe", "ZegoCloud"].map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-3 py-1 rounded-full ${
                    darkMode
                      ? "bg-blue-900/30 text-blue-300"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul
              className={`space-y-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  Built a yoga platform with live video sessions and GPT-powered
                  yoga assistant
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  Integrated Stripe payments for subscription management
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Added QR attendance and role-based access control</span>
              </li>
            </ul>
          </div>

          {/* Integrated Startup Environment */}
          <div
            className={`rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-white hover:shadow-xl"
            } shadow-lg`}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold">
                Integrated Startup Environment
              </h3>
              <ExternalLink className="text-blue-600" size={20} />
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["PHP", "MySQL", "AJAX"].map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-3 py-1 rounded-full ${
                    darkMode
                      ? "bg-blue-900/30 text-blue-300"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul
              className={`space-y-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Platform connecting innovators and investors</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Implemented authentication and real-time chatrooms</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  Dynamic startup posts with AJAX-powered interactions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`${darkMode ? "bg-gray-800/50" : "bg-white"} py-20`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {/* MCA */}
            <div
              className={`rounded-xl p-8 ${
                darkMode ? "bg-gray-900/50" : "bg-gray-50"
              } transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                    YCSRD, Shivaji University
                  </p>
                  <p
                    className={`mt-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Kolhapur, India
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm px-4 py-1 rounded-full inline-block ${
                      darkMode
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    2022 – 2024
                  </p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-3">
                    CGPA: 8.3
                  </p>
                </div>
              </div>
            </div>

            {/* BCS */}
            <div
              className={`rounded-xl p-8 ${
                darkMode ? "bg-gray-900/50" : "bg-gray-50"
              } transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Bachelor of Computer Science (BCS)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                    YCIS
                  </p>
                  <p
                    className={`mt-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Satara, India
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm px-4 py-1 rounded-full inline-block ${
                      darkMode
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    2019 – 2022
                  </p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-3">
                    CGPA: 9.87
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p
            className={`text-xl mb-12 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Feel free to reach out for collaborations or just a friendly chat
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:rohitghadage070@gmail.com"
              className={`flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              <Mail className="text-blue-600" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">rohitghadage070@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919112823376"
              className={`flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              <Phone className="text-blue-600" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+91 9112823376</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/rohit-ghadage-6591161a4"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              <Linkedin className="text-blue-600" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="font-medium">rohit-ghadage</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${
          darkMode ? "bg-gray-900" : "bg-slate-900"
        } text-gray-400 py-8`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Rohit Ghadage. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
