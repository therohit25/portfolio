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
  Server,
  Database,
  Palette,
  Cloud,
  Gauge,
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
                Full Stack Engineer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Rohit Ghadage
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed animate-fade-in">
              I am Rohit Ghadage, a Full Stack Engineer with around 3 years of
              experience specializing in Next.js and frontend architecture, with
              solid full-stack depth across Node.js, NestJS, and
              performance-focused production systems.
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
                href="https://drive.google.com/file/d/1cS3vCS2h_cB6hYKFz_sftWxJYY_MMbJI/view?usp=sharing"
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

      {/* Summary Section */}
      <section
        id="summary"
        className={`${darkMode ? "bg-gray-800/50" : "bg-white"} py-20`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Summary</h2>
          </div>

          <div
            className={`space-y-4 text-lg leading-relaxed max-w-4xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <p>
              Full Stack Engineer with ~3 years of experience specializing in
              Next.js and frontend architecture, with solid full-stack depth
              across product and client-facing platforms. My core stack includes
              Next.js, React.js, Node.js, NestJS, Express.js, TypeScript, MySQL,
              MongoDB, TypeORM, and Knex.js — with hands-on experience in
              frontend architecture, backend systems, and performance
              engineering.
            </p>
            <p>
              I specialize in performance optimization and technical SEO — SSR,
              SSG, ISR, caching, Core Web Vitals, code splitting, lazy loading,
              and bundle optimization — and have taken production Lighthouse
              scores from ~40 to 97, consistently maintaining 90+ across
              Performance, SEO, Accessibility, and Best Practices.
            </p>
            <p>
              On the backend, I've built and maintained 10+ production
              microservices — authentication, payments (Stripe, Razorpay),
              orders, affiliate and voucher systems, listing services, UTM
              tracking, and user/author dashboards — along with REST APIs,
              Redis, BullMQ, and PM2-based background workers, database/API
              optimization, and production troubleshooting. I also have working
              exposure to Docker, Kubernetes (AKS), NGINX, Cloudflare, and Azure
              DevOps CI/CD pipelines.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: "3 yrs", label: "Experience" },
              { value: "40 → 97", label: "Lighthouse Score" },
              { value: "10+", label: "Microservices Shipped" },
              { value: "4,000+", label: "Concurrent Users Served" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl p-5 text-center transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
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
                  <h3 className="text-2xl font-semibold">
                    Full Stack Engineer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Techne AI Pvt. Ltd.
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
                    Led migration of legacy platforms to Next.js 15, taking
                    Lighthouse scores from ~40 to 97+ with consistent 90+ across
                    Performance, SEO, Accessibility, and Best Practices
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Improved frontend performance via SSR/SSG, code splitting,
                    lazy loading, caching, bundle optimization, and Core Web
                    Vitals/technical SEO
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Reduced Docker image size by 60% (2 GB → 800 MB) and cut
                    deployment time by 50% through multi-stage builds,
                    dependency optimization, and CI/CD improvements
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Migrated critical legacy PHP functionality into modular
                    Node.js, Express.js, and NestJS backend services using
                    TypeScript, MySQL, MongoDB, and TypeORM
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Designed Redis + BullMQ + PM2 background job processing,
                    resolving production issues around worker management and
                    resource utilization
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Automated 4–5 HRMS workflows through scheduled jobs,
                    email/notification automation, and reporting, reducing
                    manual effort by 40%
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Owned core HRMS and ticketing modules — user management,
                    replacement workflows, reporting, PDF generation, and
                    business process automation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Implemented authentication, authorization, protected routes,
                    input validation, and API security including encrypted
                    parameters and secure URL handling
                  </span>
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
                    Full Stack Engineer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    DooGraphics
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
                    Built multilingual, SEO-friendly web platforms with Next.js
                    using SSR, SSG, and ISR, improving Core Web Vitals across
                    sites
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Built and maintained 10+ production microservices —
                    including authentication and payment services — using
                    NestJS, Express, TypeORM, and MySQL
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Spearheaded caching and search improvements with Redis and
                    Elasticsearch, enabling fast reads for 4,000+ concurrent
                    users
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Built PWAs with Redis caching and Service Workers for
                    offline-first performance
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Managed Azure DevOps CI/CD pipelines and monitored
                    Kubernetes resource usage for efficient deployments
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>
                    Improved NGINX performance and configuration for production
                    reliability
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

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Code2,
                title: "Frontend & Frameworks",
                skills: [
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Redux Toolkit",
                  "HTML",
                  "CSS",
                ],
              },
              {
                icon: Server,
                title: "Backend & Architecture",
                skills: [
                  "Node.js",
                  "Express.js",
                  "NestJS",
                  "REST APIs",
                  "Microservices",
                  "BullMQ",
                  "PM2",
                ],
              },
              {
                icon: Database,
                title: "Databases & ORMs",
                skills: [
                  "MySQL",
                  "MongoDB",
                  "Redis",
                  "TypeORM",
                  "Knex.js",
                  "Elasticsearch",
                ],
              },
              {
                icon: Palette,
                title: "Styling & UI",
                skills: ["Tailwind CSS", "Material-UI", "Bootstrap 5"],
              },
              {
                icon: Cloud,
                title: "DevOps & Cloud",
                skills: [
                  "Docker",
                  "Kubernetes (AKS)",
                  "Azure DevOps CI/CD",
                  "NGINX",
                  "Cloudflare",
                  "Linux",
                  "Bash",
                ],
              },
              {
                icon: Gauge,
                title: "Performance & Integrations",
                skills: [
                  "SSR / SSG / ISR",
                  "Core Web Vitals",
                  "PWAs",
                  "Service Workers",
                  "Stripe",
                  "Razorpay",
                ],
              },
            ].map(({ icon: Icon, title, skills }) => (
              <div
                key={title}
                className={`rounded-xl p-6 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 hover:border-gray-600"
                    : "bg-gray-50 border border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700 text-gray-200"
                          : "bg-white text-gray-800 border border-gray-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
