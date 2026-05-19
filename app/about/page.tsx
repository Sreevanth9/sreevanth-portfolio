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
} from 'lucide-react';

import {
  skillCategories,
  certificates,
  siteConfig,
} from '@/lib/constants';

export default function AboutPage() {
  const featuredProjects = [
    {
      title: 'SketchForce AI',
      description:
        'Forensic identification system with AI workflows.',
      points: [
        'Authentication system with secure login and OTP.',
        'Facial recognition and image storage using AWS S3.',
        'Built with Spring Boot and SQLite for rapid prototyping.',
      ],
      stack: ['JavaFX', 'Spring Boot', 'AWS Rekognition', 'SQLite'],
      link: 'https://github.com/Sreevanth9',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'AI Dental Diagnosis Platform',
      description:
        'AI-powered dental diagnosis and appointment system.',
      points: [
        'Built secure REST APIs and chatbot-driven workflows.',
        'Created responsive full-stack interface.',
        'Integrated AI-assisted patient interactions.',
      ],
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://github.com/Sreevanth9/dentiginee',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const expertise = [
    {
      title: 'Backend Engineering',
      desc: 'REST APIs, authentication systems, scalable server architecture.',
      icon: Server,
    },
    {
      title: 'Java Development',
      desc: 'Object-oriented programming, clean code, and system design.',
      icon: Code2,
    },
    {
      title: 'Full-Stack Development',
      desc: 'React, Node.js, Express.js, MongoDB, and modern workflows.',
      icon: LayoutGrid,
    },
    {
      title: 'AI-Integrated Applications',
      desc: 'AI workflows, AWS integration, and intelligent systems.',
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="container max-w-7xl mx-auto pt-32 pb-24 px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-primary tracking-[0.35em] text-sm mb-6 font-medium">
              SOFTWARE ENGINEER
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              Sreevanth Chowdhary Vadlamudi
            </h1>

            <p className="text-xl text-zinc-300 mb-8">
              Backend Engineer • Java Developer • MERN Stack Developer
            </p>

            <p className="text-zinc-300 text-lg leading-9 max-w-2xl mb-10">
              Building scalable systems, REST APIs, and modern
              full-stack web applications with clean architecture
              and performance-driven engineering.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-xl">

              <a
                href="/Sreevanth_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 hover:border-primary transition-all"
              >
                <FileText size={18} className="text-primary" />
                <span>Resume</span>
              </a>

              <a
                href={siteConfig.links.github}
                target="_blank"
                className="
									flex items-center gap-3
									rounded-xl
									border border-white/10
									bg-white/[0.02]
									px-5 py-4
									hover:border-primary
									hover:bg-primary/5
									transition-all duration-300
								"
              >
                <Github size={18} className="text-primary" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                className="
									flex items-center gap-3
									rounded-xl
									border border-white/10
									bg-white/[0.02]
									px-5 py-4
									hover:border-primary
									hover:bg-primary/5
									transition-all duration-300
								"
              >
                <Linkedin size={18} className="text-primary" />
                <span>LinkedIn</span>
              </a>

              <Link
                href="/contact"
                className="
									flex items-center gap-3
									rounded-xl
									border border-white/10
									bg-white/[0.02]
									px-5 py-4
									hover:border-primary
									hover:bg-primary/5
									transition-all duration-300
								"
              >
                <Mail size={18} className="text-primary" />
                <span>Contact</span>
              </Link>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[120px]" />

              <Image
                src="/sreevanth.jpeg"
                alt="Sreevanth"
                width={430}
                height={430}
                priority
                className="
									relative
									rounded-full
									object-cover
									border-2 border-primary/30
									w-[340px] h-[340px]
									md:w-[430px] md:h-[430px]
									shadow-[0_0_120px_rgba(45,212,191,0.18)]
								"
              />

            </div>

          </div>

        </div>

      </section>

      {/* EXPERTISE */}

      <section className="container max-w-7xl mx-auto py-10 px-6">

        <h2 className="text-5xl font-bold mb-4">
          Expertise
        </h2>

        <p className="text-zinc-400 mb-14 text-lg">
          Focused backend engineering capabilities for modern software delivery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
									rounded-3xl
									border border-white/10
									bg-white/[0.03]
									p-8
									hover:border-primary/40
									hover:-translate-y-1
									transition-all duration-300
									h-full
								"
              >

                <Icon className="text-primary mb-6" size={34} />

                <h3 className="text-2xl font-semibold mb-5">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* PROJECTS */}

      <section className="container max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-5xl font-bold mb-4">
          Projects
        </h2>

        <p className="text-zinc-400 mb-14 text-lg">
          A collection of selected projects showcasing backend architecture and full-stack delivery.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="
								h-full
								rounded-3xl
								border border-white/10
								bg-white/[0.03]
								p-7
								hover:border-primary/40
								transition-all duration-300
								flex flex-col
							"
            >

              <div className="flex gap-6 flex-col md:flex-row h-full">

                <div className="md:min-w-[190px]">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={190}
                    height={140}
                    className="
											w-full md:w-[190px]
											h-[140px]
											object-cover
											rounded-2xl
											border border-white/10
										"
                  />

                </div>

                <div className="flex-1 flex flex-col">

                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mb-5 leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="
													rounded-full
													bg-violet-500/20
													text-violet-300
													border border-violet-500/20
													px-3 py-1
													text-xs
												"
                      >
                        {tech}
                      </div>
                    ))}

                  </div>

                  <ul className="space-y-3 text-zinc-400 mb-8 flex-1">

                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7">
                        <span className="text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}

                  </ul>

                  <div className="mt-auto">

                    <a
                      href={project.link}
                      target="_blank"
                      className="
												inline-flex items-center gap-2
												rounded-xl
												border border-white/10
												px-5 py-3
												hover:border-primary
												hover:bg-primary/10
												transition-all
											"
                    >
                      <Github size={18} />
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="flex justify-center mt-10">

          <Link
            href="/projects"
            className="
							rounded-xl
							bg-primary
							text-primary-foreground
							px-6 py-3
							font-medium
							hover:opacity-90
							transition-all
						"
          >
            View All Projects
          </Link>

        </div>

      </section>

      {/* TECHNICAL SKILLS */}

      <section className="container max-w-7xl mx-auto py-10 px-6">

        <h2 className="text-5xl font-bold mb-4">
          Technical Skills
        </h2>

        <p className="text-zinc-400 mb-14 text-lg">
          Technologies and tools I work with for scalable systems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skillCategories.slice(0, 8).map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="
									rounded-2xl
									border border-white/10
									bg-white/[0.03]
									p-6
									hover:border-primary/30
									transition-all duration-300
								"
              >

                <div className="flex items-center gap-3 mb-5">

                  <CategoryIcon
                    className="text-primary"
                    size={22}
                  />

                  <h3 className="font-semibold text-xl">
                    {category.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-3">

                  {category.skills.slice(0, 6).map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
													flex items-center gap-2
													text-sm text-zinc-300
													min-w-fit
												"
                      >
                        <Icon size={14} className="text-primary" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* EDUCATION + CERTIFICATIONS */}

      <section className="container max-w-7xl mx-auto py-24 px-6">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">

            <h2 className="text-4xl font-bold mb-8">
              Education
            </h2>

            <h3 className="text-2xl font-semibold text-primary mb-5">
              B.Tech in Computer Science & Engineering
            </h3>

            <p className="text-lg text-zinc-300 mb-2">
              Amrita Vishwa Vidyapeetham, Bengaluru
            </p>

            <div className="inline-flex rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm mt-4">
              2022 - 2026
            </div>

            <p className="text-zinc-400 leading-8 mt-8">
              Focused on software engineering, backend systems,
              data structures, algorithms, and full-stack development.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">

            <h2 className="text-4xl font-bold mb-8">
              Certifications
            </h2>

            <div className="space-y-4">

              {certificates.slice(0, 5).map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  className="flex items-start gap-3 text-zinc-300 hover:text-primary transition-all"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{cert.title}</span>
                </a>
              ))}

            </div>

            <Link
              href="/certificates"
              className="
								inline-flex mt-8
								rounded-xl
								border border-white/10
								px-5 py-3
								hover:border-primary
								transition-all
							"
            >
              View All Certificates
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}