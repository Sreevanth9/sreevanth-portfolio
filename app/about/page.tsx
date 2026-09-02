'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
	Github,
	Linkedin,
	Mail,
	FileText,
	Server,
	Code2,
	LayoutGrid,
	Cpu,
	ExternalLink,
	ArrowRight,
	Award,
} from 'lucide-react';

import {
  skillCategories,
  certificates,
  siteConfig,
} from '@/lib/constants';

export default function AboutPage() {
  const featuredProjects = [
    {
      title: 'IntelliFarm AI',
      description:
        'Smart cloud agriculture platform providing AI-driven crop disease diagnostics, weather analytics, and scalable cloud storage.',
      points: [
        'Built full-stack architecture using React 18, Node.js, and Express REST APIs.',
        'Implemented secure direct-to-cloud file uploads with AWS S3 pre-signed URLs.',
        'Integrated Groq Qwen Vision AI for automated plant leaf pathology analysis.',
      ],
      stack: ['React.js', 'Node.js', 'Express.js', 'AWS S3', 'Groq AI', 'Supabase'],
      link: 'https://intellifarm-ai.vercel.app',
      image:
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'AI-Powered Dental Diagnosis Platform',
      description:
        'Healthcare application for dental symptom assessment, appointment scheduling, and automated clinical management.',
      points: [
        'Designed RESTful API workflows for patient scheduling and doctor availability.',
        'Built interactive AI chatbot providing preliminary dental triage and symptom assessment.',
        'Integrated secure JWT authentication and role-based access control.',
      ],
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chatbot AI'],
      link: 'https://dentiginee.lovable.app',
      image:
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const expertise = [
    {
      title: 'Backend Engineering',
      desc: 'REST APIs, authentication systems, and scalable server architecture.',
      icon: Server,
    },
    {
      title: 'Java Development',
      desc: 'Object-oriented programming, clean code principles, and system design.',
      icon: Code2,
    },
    {
      title: 'Full-Stack Development',
      desc: 'React, Node.js, Express.js, MongoDB, and modern engineering workflows.',
      icon: LayoutGrid,
    },
    {
      title: 'AI-Integrated Systems',
      desc: 'AI workflows, vision models, AWS cloud integration, and intelligent APIs.',
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="container max-w-7xl mx-auto pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">

            <p className="text-primary tracking-[0.3em] text-xs sm:text-sm mb-4 sm:mb-6 font-medium">
              SOFTWARE ENGINEER
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-4 sm:mb-6">
              Vadlamudi Sreevanth Chowdhary
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 mb-6 sm:mb-8 font-medium">
              Backend Engineer • Java Developer • MERN Stack Developer
            </p>

            <div className="space-y-4 max-w-2xl mb-8 sm:mb-10 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m Vadlamudi Sreevanth Chowdhary, a Computer Science graduate from Amrita Vishwa Vidyapeetham, Bengaluru. I have hands-on experience with Java, MERN stack development, REST APIs, data structures, backend systems, and full-stack application development.
              </p>
              <p>
                I enjoy building practical applications, solving technical problems, and learning through hands-on projects. My work has involved backend development, databases, APIs, AI-powered applications, and different areas of full-stack development, with a focus on writing clean and maintainable code.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl">

              <a
                href="/Sreevanth_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5 sm:py-4 hover:border-primary hover:bg-primary/5 transition-all text-sm sm:text-base"
              >
                <FileText size={18} className="text-primary shrink-0" />
                <span>Resume</span>
              </a>

              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5 sm:py-4 hover:border-primary hover:bg-primary/5 transition-all text-sm sm:text-base"
              >
                <Github size={18} className="text-primary shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5 sm:py-4 hover:border-primary hover:bg-primary/5 transition-all text-sm sm:text-base"
              >
                <Linkedin size={18} className="text-primary shrink-0" />
                <span>LinkedIn</span>
              </a>

              <Link
                href="/contact"
                className="flex items-center justify-center lg:justify-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5 sm:py-4 hover:border-primary hover:bg-primary/5 transition-all text-sm sm:text-base"
              >
                <Mail size={18} className="text-primary shrink-0" />
                <span>Contact</span>
              </Link>

            </div>

          </div>

          <div className="order-1 lg:order-2 flex justify-center mb-6 lg:mb-0">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px] sm:blur-[120px]" />

              <Image
                src="/sreevanth.jpeg"
                alt="Vadlamudi Sreevanth Chowdhary"
                width={430}
                height={430}
                priority
                className="
                  relative
                  rounded-full
                  object-cover
                  border-2 border-primary/30
                  w-56 h-56
                  sm:w-72 sm:h-72
                  md:w-80 md:h-80
                  lg:w-[420px] lg:h-[420px]
                  max-w-[80vw] max-h-[80vw]
                  shadow-[0_0_80px_rgba(45,212,191,0.18)]
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* EXPERTISE */}

      <section className="container max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          Expertise
        </h2>

        <p className="text-zinc-400 mb-10 sm:mb-14 text-base sm:text-lg">
          Focused backend engineering capabilities for modern software delivery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6 sm:p-8
                  hover:border-primary/40
                  hover:-translate-y-1
                  transition-all duration-300
                  h-full
                  flex flex-col
                "
              >

                <Icon className="text-primary mb-5 sm:mb-6" size={32} />

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* PROJECTS */}

      <section className="container max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          Projects
        </h2>

        <p className="text-zinc-400 mb-10 sm:mb-14 text-base sm:text-lg">
          A collection of selected projects showcasing backend architecture and full-stack delivery.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="
                h-full
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-6 sm:p-7
                hover:border-primary/40
                transition-all duration-300
                flex flex-col
              "
            >

              <div className="flex gap-6 flex-col sm:flex-row h-full">

                <div className="w-full sm:w-[190px] shrink-0">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={190}
                    height={150}
                    className="
                      w-full sm:w-[190px]
                      h-48 sm:h-[150px]
                      object-cover
                      rounded-2xl
                      border border-white/10
                    "
                  />

                </div>

                <div className="flex-1 flex flex-col">

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">

                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="
                          rounded-full
                          bg-primary/10
                          text-primary
                          border border-primary/20
                          px-3 py-1
                          text-xs font-medium
                        "
                      >
                        {tech}
                      </div>
                    ))}

                  </div>

                  <ul className="space-y-2.5 text-zinc-300 mb-6 flex-1 text-sm leading-relaxed">

                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2.5 items-start">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}

                  </ul>

                  <div className="mt-auto pt-2">

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-xl
                        bg-primary
                        text-primary-foreground
                        font-medium
                        text-sm
                        px-5 py-3
                        hover:opacity-90
                        shadow-md shadow-primary/20
                        transition-all
                      "
                    >
                      <ExternalLink size={16} />
                      Visit Project
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="
              inline-flex items-center justify-center
              bg-[#20ae93] hover:bg-[#1a957d]
              text-white font-semibold text-base sm:text-lg
              h-14 px-8 sm:px-10
              rounded-[24px]
              shadow-lg shadow-[#20ae93]/25 hover:shadow-[#20ae93]/40
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            View All Projects
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>

      </section>

      {/* TECHNICAL SKILLS */}

      <section className="container max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          Technical Skills
        </h2>

        <p className="text-zinc-400 mb-10 sm:mb-14 text-base sm:text-lg">
          Technologies and tools I use for software engineering and backend systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.slice(0, 3).map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6 sm:p-7
                  hover:border-primary/40
                  transition-all duration-300
                  flex flex-col h-full
                "
              >

                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/5">

                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CategoryIcon size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {category.skills.length} competencies
                    </p>
                  </div>

                </div>

                <div className="flex flex-wrap gap-2 flex-grow content-start">

                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                          inline-flex items-center gap-2
                          rounded-xl
                          border border-white/10
                          bg-white/[0.03]
                          px-3 py-1.5
                          text-xs sm:text-sm
                          text-zinc-300
                          hover:border-primary/40
                          hover:bg-white/[0.06]
                          hover:text-white
                          transition-all duration-200
                        "
                      >
                        <SkillIcon size={14} className="text-primary shrink-0" />
                        <span className="font-medium whitespace-nowrap">{skill.name}</span>
                      </div>
                    );
                  })}

                </div>

              </div>
            );
          })}

        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/skills"
            className="
              inline-flex items-center justify-center
              bg-[#20ae93] hover:bg-[#1a957d]
              text-white font-semibold text-base sm:text-lg
              h-14 px-8 sm:px-10
              rounded-[24px]
              shadow-lg shadow-[#20ae93]/25 hover:shadow-[#20ae93]/40
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            Explore Complete Skills Directory
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>

      </section>

      {/* EDUCATION + CERTIFICATIONS */}

      <section className="container max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10 flex flex-col justify-between">

            <div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">
                Education
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="text-base sm:text-lg text-zinc-300 mb-2 font-medium">
                Amrita Vishwa Vidyapeetham, Bengaluru
              </p>

              <div className="inline-flex rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs sm:text-sm mt-3 text-zinc-300">
                2022 – 2026
              </div>

              <div className="space-y-4 text-zinc-400 leading-relaxed mt-6 sm:mt-8 text-sm sm:text-base">
                <p>
                  Pursued a strong foundation in computer science with a focus on software engineering, data structures and algorithms, object-oriented programming, database systems, operating systems, computer networks, and full-stack application development. Developed practical experience through academic and personal projects involving Java, JavaScript, React.js, Node.js, Express.js, REST APIs, and databases.
                </p>
                <p>
                  Worked on projects involving AI-powered applications, backend systems, database-driven platforms, and algorithmic problem solving, applying concepts learned through coursework to build practical software solutions.
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-white/5">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Certificates
                  </h2>
                  <p className="text-sm text-zinc-400 mt-1">
                    Professional credentials & technical specializations
                  </p>
                </div>
                <div className="h-11 w-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Award size={22} />
                </div>
              </div>

              <div className="space-y-3">
                {certificates
                  .filter((cert) => !cert.title.toLowerCase().includes('claude'))
                  .slice(0, 3)
                  .map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group block p-4 rounded-2xl
                      border border-white/5 bg-white/[0.02]
                      hover:border-primary/30 hover:bg-white/[0.05]
                      transition-all duration-300
                    "
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base text-white group-hover:text-primary transition-colors line-clamp-1">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-zinc-400">
                          <span className="text-primary font-medium">{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </div>
                        {cert.skills && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {cert.skills.slice(0, 3).map((skill) => (
                              <span
                                key={skill}
                                className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/5 font-normal"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 flex justify-start">
              <Link
                href="/certificates"
                className="
                  inline-flex items-center justify-center
                  bg-[#20ae93] hover:bg-[#1a957d]
                  text-white font-semibold text-base
                  h-14 px-8
                  rounded-[24px]
                  shadow-lg shadow-[#20ae93]/25 hover:shadow-[#20ae93]/40
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                View All Certificates
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}