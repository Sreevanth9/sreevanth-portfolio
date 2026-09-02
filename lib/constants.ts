export const siteConfig = {
	name: 'Sreevanth Chowdhary Vadlamudi',
	description:
		'Personal portfolio of Sreevanth Chowdhary Vadlamudi — Software engineer building scalable web applications, REST APIs, AI-assisted systems, and modern full-stack platforms.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/Sreevanth9',
		linkedin: 'https://www.linkedin.com/in/sreevanth-vadlamudi',
		leetcode: 'https://leetcode.com/u/SreevanthV/',
		twitter: '',
		facebook: '',
		instagram: '',
		whatsapp: 'https://wa.me/917207818784',
		email: 'mailto:vsreevanth@gmail.com',
		phone: 'tel:+917207818784',
	},
};

export type ExperienceDocument = {
	title: string;
	url: string;
};

export type Experience = {
	title: string;
	company: string;
	category?: string;
	location: string;
	startDate: string;
	endDate: string;
	period?: string;
	summary?: string;
	isPrimary?: boolean;
	description: string[];
	technologies: string[];
	documents?: ExperienceDocument[];
};

export const primaryExperience: Experience = {
	title: 'Research & Software Development Intern',
	company: 'India Space Lab',
	category: 'Space Technology & Software Development',
	location: 'Remote',
	startDate: 'May 1, 2026',
	endDate: 'June 15, 2026',
	period: 'May 1, 2026 – June 15, 2026',
	summary:
		'Completed a Summer Internship & Technical Training Program focused on space technology, autonomous systems, and aerospace software development.',
	isPrimary: true,
	description: [
		'Developed an ISRO-inspired CanSat Ground Control Software (GCS) using React.js, JavaScript, and Three.js for mission visualization and monitoring.',
		'Implemented Python-based PID Controller Tuning and Autonomous Navigation solutions for engineering applications.',
		'Worked on telemetry processing and mission visualization using Leaflet.js and Chart.js.',
		'Gained hands-on exposure to CanSat & CubeSat systems, Advanced Drone Technology, Rocketry, Remote Sensing & GIS, and Disaster Management.',
		'Completed projects involving PID Controller Tuning, Autonomous Navigation, and Designing of GCS for CanSat.',
	],
	technologies: [
		'React.js',
		'JavaScript',
		'Three.js',
		'Python',
		'Leaflet.js',
		'Chart.js',
		'PID Control',
		'Autonomous Navigation',
		'Telemetry',
		'CanSat',
		'CubeSat',
	],
	documents: [
		{
			title: 'View Completion Letter',
			url: '/documents/india-space-lab-completion-letter.pdf',
		},
		{
			title: 'View Internship Certificate',
			url: '/documents/india-space-lab-internship-certificate.pdf',
		},
	],
};

export const engineeringExperiences: Experience[] = [
	{
		title: 'Full-Stack Web Developer',
		company: 'Personal & Academic Development Projects',
		location: 'Bengaluru, India',
		startDate: '2025',
		endDate: '2026',
		period: '2025 – 2026',
		description: [
			'Built and deployed full-stack web applications using React.js, Node.js, Express.js, and MongoDB with focus on scalable backend architecture and responsive user interfaces.',
			'Developed authentication systems using JWT, bcrypt password hashing, OTP verification, and secure REST API integration for modern web applications.',
			'Worked on MERN stack projects involving real-time communication, appointment systems, portfolio applications, and API-driven platforms while improving frontend and backend development workflows.',
		],
		technologies: [
			'React.js',
			'Node.js',
			'Express.js',
			'MongoDB',
			'JWT',
			'bcrypt',
			'REST APIs',
		],
	},
	{
		title: 'AI & Algorithm Systems Developer',
		company: 'Research & Engineering Projects',
		location: 'Bengaluru, India',
		startDate: '2025',
		endDate: '2026',
		period: '2025 – 2026',
		description: [
			'Developed AI-assisted systems related to forensic identification, dental diagnosis workflows, and intelligent image-based processing applications.',
			'Implemented graph algorithms including Floyd-Warshall, Bellman-Ford, Johnson’s, and Yen’s algorithms for electric vehicle route optimization systems.',
			'Integrated cloud-based services such as AWS S3 and AWS Rekognition for secure image storage, facial recognition workflows, and scalable processing pipelines.',
		],
		technologies: [
			'JavaFX',
			'Spring Boot',
			'Python',
			'Graph Algorithms',
			'AWS S3',
			'AWS Rekognition',
			'SQLite',
		],
	},
];

export const experiences: Experience[] = [
	primaryExperience,
	...engineeringExperiences,
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	linkText?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'IntelliFarm AI – Smart Cloud Agriculture Platform',
		description:
			'Cloud-powered smart agriculture platform providing crop disease diagnosis via Groq Qwen Vision AI, real-time weather analytics, and AWS S3 direct pre-signed photo uploads.',
		image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop',
		tags: ['React.js', 'Node.js', 'Express.js', 'AWS S3', 'AWS App Runner', 'Supabase', 'Groq AI'],
		link: 'https://intellifarm-ai.vercel.app',
		linkText: 'Visit Project',
		repo: 'https://github.com/Sreevanth9/IntelliFarm-AI',
	},
	{
		title: 'AI-Powered Dental Diagnosis Platform (Dentiginee)',
		description:
			'Intelligent healthcare platform featuring AI symptom assessment, appointment scheduling, automated doctor availability management, and an interactive dental guidance chatbot.',
		image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
		tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chatbot AI'],
		link: 'https://dentiginee.lovable.app',
		linkText: 'Visit Project',
		repo: 'https://github.com/Sreevanth9/dentiginee',
	},
	{
		title: 'SketchForce AI – Forensic Suspect Identification System',
		description:
			'Forensic suspect matching platform leveraging OpenCV and AWS Rekognition facial comparison, secure OTP authentication, role-based access control, and AWS S3 digital evidence storage.',
		image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
		tags: ['Java', 'JavaFX', 'OpenCV', 'AWS Rekognition', 'AWS S3', 'SQLite'],
		repo: 'https://github.com/Sreevanth9/Sketch-Force-AI',
	},
	{
		title: 'CanSat Ground Control Software',
		description:
			'ISRO-inspired real-time ground station interface featuring telemetry parsing, 3D attitude visualization with Three.js, mission maps via Leaflet, and live sensor charting.',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
		tags: ['React.js', 'Three.js', 'Leaflet.js', 'Chart.js', 'Telemetry', 'JavaScript'],
		repo: 'https://github.com/Sreevanth9/cansat-gcs',
	},
	{
		title: 'Real-Time Web Chat Application',
		description:
			'Low-latency chat system built with Node.js, Express, and Socket.IO featuring live performance metrics, room management, typing indicators, and message persistence. Published at ICCCNT 2025.',
		image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
		tags: ['Socket.io', 'Node.js', 'Express.js', 'WebSocket', 'Realtime'],
		repo: 'https://github.com/Sreevanth9/chat-websocket',
	},
	{
		title: 'EV Route Optimizer',
		description:
			'Smart navigation and shortest-path planning platform for electric vehicles incorporating graph algorithms (Floyd-Warshall, Bellman-Ford), traffic constraints, and charging station graphs.',
		image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop',
		tags: ['JavaScript', 'Graph Algorithms', 'Leaflet.js', 'Optimization'],
		repo: 'https://github.com/Sreevanth9/EVRouteOptimizer',
	},
	{
		title: 'Student Management REST API',
		description:
			'Production-ready TypeScript backend API featuring modular Express routing, JWT authentication, schema validation, and structured database operations.',
		image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
		tags: ['TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'JWT'],
		repo: 'https://github.com/Sreevanth9/student-management-api',
	},
	{
		title: 'SecureVoIP Cryptographic Communication',
		description:
			'Encrypted VoIP communication system in MATLAB featuring AES voice payload encryption, RSA digital signatures, and TCP socket stream transmission.',
		image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
		tags: ['MATLAB', 'AES Encryption', 'RSA', 'TCP Sockets', 'Cryptography'],
		repo: 'https://github.com/Sreevanth9/SecureVoIP-MATLAB',
	},
	{
		title: 'Flutter MVVM Public API App',
		description:
			'Cross-platform mobile application architected with MVVM pattern, clean state management, responsive ListView pagination, and error handling for REST APIs.',
		image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
		tags: ['Flutter', 'Dart', 'MVVM', 'Mobile Development', 'REST API'],
		repo: 'https://github.com/Sreevanth9/flutter_mvvm_app',
	},
	{
		title: 'Full-Stack Web Development Practice Suite',
		description:
			'Comprehensive repository of full-stack engineering modules, API integrations, and MERN stack mini-applications built with modern web development practices.',
		image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
		tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3'],
		repo: 'https://github.com/Sreevanth9/fullstack-web-development-practice',
	},
	{
		title: 'Data Analysis & Analytics Case Studies',
		description:
			'Exploratory data analysis case studies applying Pandas, NumPy, statistical modeling, and Power BI visualization across real-world datasets.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
		tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Jupyter'],
		repo: 'https://github.com/Sreevanth9/data-analysis-case-studies',
	},
	{
		title: 'Machine Learning Foundations & Implementations',
		description:
			'Machine learning notebooks covering supervised and unsupervised learning algorithms, model evaluation, and classification pipelines.',
		image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop',
		tags: ['Python', 'Machine Learning', 'Scikit-Learn', 'Jupyter'],
		repo: 'https://github.com/Sreevanth9/ML',
	},
	{
		title: 'Pokemon Finder Async Web App',
		description:
			'Asynchronous web application consuming PokéAPI with dynamic card rendering, multi-stat filtering, and responsive CSS UI.',
		image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1200&auto=format&fit=crop',
		tags: ['JavaScript', 'REST API', 'Async/Await', 'CSS3'],
		repo: 'https://github.com/Sreevanth9/Pokemon_finder',
	},
	{
		title: 'Java SE Fundamentals & OOP Architecture',
		description:
			'Hands-on implementations of core Java SE architecture, OOP principles, collection framework algorithms, concurrency, and competitive programming problems.',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
		tags: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
		repo: 'https://github.com/Sreevanth9/java-se-learning-journey',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'B.Tech in Computer Science & Engineering',
		field: 'Computer Science and Engineering',
		institution: 'Amrita Vishwa Vidyapeetham',
		location: 'Bengaluru, India',
		startDate: '2022',
		endDate: '2026',
		achievements: [
			'Pursued a strong foundation in computer science with a focus on software engineering, data structures and algorithms, object-oriented programming, database systems, operating systems, computer networks, and full-stack application development. Developed practical experience through academic and personal projects involving Java, JavaScript, React.js, Node.js, Express.js, REST APIs, and databases.',
			'Worked on projects involving AI-powered applications, backend systems, database-driven platforms, and algorithmic problem solving, applying concepts learned through coursework to build practical software solutions.',
		],
	},
	{
		degree: 'Higher Secondary Education',
		field: 'Mathematics, Physics, and Chemistry',
		institution: 'Narayana Junior College',
		location: 'Vijayawada, Andhra Pradesh',
		startDate: '2020',
		endDate: '2022',
		achievements: [
			'Built a strong foundation in analytical thinking, mathematics, and science fundamentals for computer science studies.',
		],
	},
	{
		degree: 'Secondary Education',
		field: 'School Education',
		institution: 'Narayana High School',
		location: 'Nellore, Andhra Pradesh',
		startDate: '2019',
		endDate: '2020',
		achievements: [
			'Developed disciplined study habits and a strong academic base in science, mathematics, and problem solving.',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	description?: string;
	skills?: string[];
	url?: string;
};

export const certificates = [
  {
    title: 'Ultimate Web Development Course 2026 - Build Modern Websites: MERN Stack',
    issuer: 'Udemy',
    date: 'May 7, 2026',
    description:
      'Comprehensive modern web development training focused on React, Node.js, Express, MongoDB, and responsive UI design.',
    skills: ['React', 'Node.js', 'MongoDB'],
    url: 'https://www.udemy.com/certificate/UC-f26960a8-d17d-49f3-a3bc-3ef18485eeb4/',
  },

  {
    title: 'Java Programming - Beginner to Master: Core Java Programming',
    issuer: 'Udemy',
    date: 'January 26, 2026',
    description:
      'Core Java programming concepts including OOP, collections, exception handling, and multithreading.',
    skills: ['Java', 'OOP', 'Collections'],
    url: 'https://www.udemy.com/certificate/UC-390e0554-30a9-434f-9650-9a95aca0aae6/',
  },

  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'May 5, 2026',
    description:
      'AI-assisted development workflow training focused on Claude Code tooling, prompt engineering, productivity workflows, and developer acceleration.',
    skills: ['Claude Code', 'AI Workflow', 'Prompt Engineering'],
    url: 'https://verify.skilljar.com/c/9jdfmfng49cb',
  },

  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'May 5, 2026',
    description:
      'Fundamentals of Claude AI workflows, prompting techniques, AI-assisted productivity, and practical LLM usage concepts.',
    skills: ['Claude AI', 'LLMs', 'AI Productivity'],
    url: 'https://verify.skilljar.com/c/w7omwfd3822m',
  },

  {
    title: 'Oracle OCI Generative AI Professional: Generative AI and LLM Concepts',
    issuer: 'Oracle',
    date: 'September 26, 2025',
    description:
      'Professional certification covering Generative AI fundamentals, LLM concepts, embeddings, and AI applications.',
    skills: ['Generative AI', 'LLMs', 'OCI'],
    url: 'https://drive.google.com/file/d/1xMumP7pXY1s1g6yy3toL3EDGl1nx06Qu/view',
  },

  {
    title: 'Deloitte Data Analytics Virtual Experience: Data Analysis and Visualization',
    issuer: 'Deloitte',
    date: 'August 25, 2025',
    description:
      'Hands-on analytics experience involving data cleaning, dashboard creation, business insights, and visualization.',
    skills: ['Data Analytics', 'Visualization', 'Power BI'],
    url: 'https://drive.google.com/file/d/1iTNLDvMYKbAt5burZ24Ds97m2M_NWPd-/view',
  },

  {
    title: 'C and C++ (Beginner to Advanced): Problem Solving and Programming Fundamentals',
    issuer: 'Udemy',
    date: 'October 3, 2023',
    description:
      'Programming fundamentals and problem-solving techniques using C and C++ with practical coding exercises.',
    skills: ['C', 'C++', 'Problem Solving'],
    url: 'https://www.udemy.com/certificate/UC-2f15b32d-955e-477a-8c20-e3fe1a0236a5/',
  },

  {
    title: 'Software Engineering Job Simulation',
    issuer: 'J.P. Morgan Chase & Co. / Forage',
    date: 'August 25, 2025',
    description:
      'Completed practical software engineering simulation tasks including Kafka integration, REST API integration, H2 database integration, and backend project setup.',
    skills: ['Kafka', 'REST API', 'Backend Development', 'Java'],
    url: 'https://drive.google.com/file/d/1g68vkhbOYO8zHvvCZ40Jv_CH4qMCE1ny/view?usp=sharing',
  },
];

import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';
import { FaJava, FaDatabase, FaServer, FaCode, FaAws } from 'react-icons/fa';
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiHtml5,
	SiCss,
	SiFramer,
	SiRedux,
	SiReactrouter,
	SiThreedotjs,
	SiLeaflet,
	SiChartdotjs,
	SiNodedotjs,
	SiExpress,
	SiSocketdotio,
	SiMongodb,
	SiPostgresql,
	SiSupabase,
	SiMysql,
	SiOpenai,
	SiOpencv,
	SiPytorch,
	SiDocker,
	SiVercel,
	SiJsonwebtokens,
	SiPython,
	SiCplusplus,
	SiGithub,
	SiLinux,
	SiPostman,
	SiNpm,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import {
	Code2,
	LayoutGrid,
	Server,
	Database,
	ShieldCheck,
	Wrench,
	Cloud,
	BrainCircuit,
	Cpu,
	Mail,
	Send,
	Sparkles,
	Bot,
	Workflow,
	Terminal,
	Zap,
	Eye,
	Scan,
	Layers,
	Network,
	Globe,
	Shield,
	KeyRound,
	Users,
	Gauge,
	Lock,
	CheckSquare,
	Boxes,
	GitBranch,
	Share2,
	Rocket,
} from 'lucide-react';

export type SkillIcon = IconType | LucideIcon;

export type SkillItem = {
	name: string;
	icon: SkillIcon;
	featured?: boolean;
};

export type SkillCategory = {
	title: string;
	icon: SkillIcon;
	skills: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
	{
		title: 'Programming Languages',
		icon: Code2,
		skills: [
			{ name: 'Java', icon: FaJava, featured: true },
			{ name: 'JavaScript (ES6+)', icon: SiJavascript, featured: true },
			{ name: 'TypeScript', icon: SiTypescript, featured: true },
			{ name: 'Python', icon: SiPython },
			{ name: 'C', icon: FaCode },
			{ name: 'C++', icon: SiCplusplus },
			{ name: 'SQL', icon: FaDatabase },
		],
	},
	{
		title: 'Frontend Development',
		icon: LayoutGrid,
		skills: [
			{ name: 'React.js', icon: SiReact, featured: true },
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'TypeScript', icon: SiTypescript, featured: true },
			{ name: 'JavaScript', icon: SiJavascript, featured: true },
			{ name: 'HTML5', icon: SiHtml5 },
			{ name: 'CSS3', icon: SiCss },
			{ name: 'Tailwind CSS', icon: SiTailwindcss },
			{ name: 'Framer Motion', icon: SiFramer },
			{ name: 'Redux Toolkit', icon: SiRedux },
			{ name: 'React Router', icon: SiReactrouter },
			{ name: 'Three.js', icon: SiThreedotjs },
			{ name: 'Leaflet.js', icon: SiLeaflet },
			{ name: 'Chart.js', icon: SiChartdotjs },
		],
	},
	{
		title: 'Backend Development',
		icon: Server,
		skills: [
			{ name: 'Node.js', icon: SiNodedotjs, featured: true },
			{ name: 'Express.js', icon: SiExpress, featured: true },
			{ name: 'REST APIs', icon: TbApi, featured: true },
			{ name: 'Socket.io', icon: SiSocketdotio },
			{ name: 'Server-Sent Events (SSE)', icon: Zap },
			{ name: 'API Integration', icon: TbApi },
			{ name: 'Nodemailer', icon: Mail },
			{ name: 'SMTP', icon: Send },
		],
	},
	{
		title: 'Databases',
		icon: Database,
		skills: [
			{ name: 'MongoDB', icon: SiMongodb, featured: true },
			{ name: 'Mongoose', icon: SiMongodb },
			{ name: 'PostgreSQL', icon: SiPostgresql, featured: true },
			{ name: 'Supabase', icon: SiSupabase, featured: true },
			{ name: 'MySQL', icon: SiMysql },
			{ name: 'Oracle SQL', icon: FaDatabase },
			{ name: 'SQLite', icon: FaDatabase },
		],
	},
	{
		title: 'AI & Machine Learning',
		icon: BrainCircuit,
		skills: [
			{ name: 'Machine Learning', icon: BrainCircuit },
			{ name: 'Deep Learning', icon: Layers },
			{ name: 'Computer Vision', icon: Eye },
			{ name: 'Generative AI', icon: Sparkles, featured: true },
			{ name: 'AI Agents', icon: Bot, featured: true },
			{ name: 'Function Calling', icon: Workflow },
			{ name: 'Multimodal AI', icon: Cpu },
			{ name: 'Prompt Engineering', icon: Terminal },
			{ name: 'OpenAI API', icon: SiOpenai },
			{ name: 'Groq', icon: Zap },
			{ name: 'OpenCV', icon: SiOpencv },
			{ name: 'PyTorch', icon: SiPytorch },
			{ name: 'YOLO', icon: Scan },
		],
	},
	{
		title: 'Cloud & DevOps',
		icon: Cloud,
		skills: [
			{ name: 'AWS', icon: FaAws, featured: true },
			{ name: 'AWS S3', icon: FaAws },
			{ name: 'AWS Rekognition', icon: Eye },
			{ name: 'AWS SDK', icon: FaAws },
			{ name: 'AWS Amplify', icon: FaAws },
			{ name: 'AWS App Runner', icon: Rocket },
			{ name: 'Docker', icon: SiDocker, featured: true },
			{ name: 'Docker Compose', icon: SiDocker },
			{ name: 'CloudFront', icon: Globe },
			{ name: 'Vercel', icon: SiVercel },
		],
	},
	{
		title: 'Authentication & Security',
		icon: ShieldCheck,
		skills: [
			{ name: 'JWT Authentication', icon: SiJsonwebtokens },
			{ name: 'bcrypt', icon: ShieldCheck },
			{ name: 'OTP Authentication', icon: KeyRound },
			{ name: 'Role-Based Access Control', icon: Users },
			{ name: 'Supabase Auth', icon: SiSupabase },
			{ name: 'Helmet.js', icon: Shield },
			{ name: 'API Rate Limiting', icon: Gauge },
			{ name: 'Input Validation', icon: CheckSquare },
			{ name: 'XSS Protection', icon: Lock },
		],
	},
	{
		title: 'Core Computer Science',
		icon: Cpu,
		skills: [
			{ name: 'Data Structures & Algorithms', icon: GitBranch },
			{ name: 'Object-Oriented Programming', icon: Boxes },
			{ name: 'DBMS', icon: Database },
			{ name: 'Operating Systems', icon: Terminal },
			{ name: 'Computer Networks', icon: Network },
		],
	},
	{
		title: 'Tools & Platforms',
		icon: Wrench,
		skills: [
			{ name: 'Git', icon: GitBranch },
			{ name: 'GitHub', icon: SiGithub },
			{ name: 'Linux', icon: SiLinux },
			{ name: 'VS Code', icon: VscCode },
			{ name: 'Postman', icon: SiPostman },
			{ name: 'npm', icon: SiNpm },
			{ name: 'Vercel', icon: SiVercel },
		],
	},
];

export type SkillGroup = {
	title: string;
	skills: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		title: 'Programming Languages',
		skills: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'C', 'C++', 'SQL'],
	},
	{
		title: 'Frontend Development',
		skills: [
			'React.js',
			'Next.js',
			'TypeScript',
			'JavaScript',
			'HTML5',
			'CSS3',
			'Tailwind CSS',
			'Framer Motion',
			'Redux Toolkit',
			'React Router',
			'Three.js',
			'Leaflet.js',
			'Chart.js',
		],
	},
	{
		title: 'Backend Development',
		skills: [
			'Node.js',
			'Express.js',
			'REST APIs',
			'Socket.io',
			'Server-Sent Events (SSE)',
			'API Integration',
			'Nodemailer',
			'SMTP',
		],
	},
	{
		title: 'Databases',
		skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Supabase', 'MySQL', 'Oracle SQL', 'SQLite'],
	},
	{
		title: 'AI & Machine Learning',
		skills: [
			'Machine Learning',
			'Deep Learning',
			'Computer Vision',
			'Generative AI',
			'AI Agents',
			'Function Calling',
			'Multimodal AI',
			'Prompt Engineering',
			'OpenAI API',
			'Groq',
			'OpenCV',
			'PyTorch',
			'YOLO',
		],
	},
	{
		title: 'Cloud & DevOps',
		skills: [
			'AWS',
			'AWS S3',
			'AWS Rekognition',
			'AWS SDK',
			'AWS Amplify',
			'AWS App Runner',
			'Docker',
			'Docker Compose',
			'CloudFront',
			'Vercel',
		],
	},
	{
		title: 'Authentication & Security',
		skills: [
			'JWT Authentication',
			'bcrypt',
			'OTP Authentication',
			'Role-Based Access Control',
			'Supabase Auth',
			'Helmet.js',
			'API Rate Limiting',
			'Input Validation',
			'XSS Protection',
		],
	},
	{
		title: 'Core Computer Science',
		skills: [
			'Data Structures & Algorithms',
			'Object-Oriented Programming',
			'DBMS',
			'Operating Systems',
			'Computer Networks',
		],
	},
	{
		title: 'Tools & Platforms',
		skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Postman', 'npm', 'Vercel'],
	},
];

