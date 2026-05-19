export const siteConfig = {
	name: 'Sreevanth Chowdhary Vadlamudi',
	description:
	'Backend-focused software engineer building scalable web applications, REST APIs, AI-assisted systems, and modern full-stack platforms.',
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

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Full-Stack Web Developer',
		company: 'Personal and Academic Development Projects',
		location: 'Bengaluru, India',
		startDate: '2025',
		endDate: '2026',
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
		title: 'AI and Algorithm Systems Developer',
		company: 'Research and Engineering Projects',
		location: 'Bengaluru, India',
		startDate: '2025',
		endDate: '2026',
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

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Full Stack Web Development Practice',
		description:
			'Practice projects and applications built while learning full stack web development.',
		image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
		tags: ['React', 'Node.js', 'MongoDB'],
		repo: 'https://github.com/Sreevanth9/fullstack-web-development-practice',
	},
	{
		title: 'SecureVoIP MATLAB',
		description:
			'Secure VoIP communication simulation and encryption techniques using MATLAB.',
		image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
		tags: ['MATLAB', 'VoIP', 'Security'],
		repo: 'https://github.com/Sreevanth9/SecureVoIP-MATLAB',
	},
	{
		title: 'Chat WebSocket',
		description:
			'Real-time chat application developed using WebSocket technology.',
		image: 'https://images.pexels.com/photos/5053848/pexels-photo-5053848.jpeg',
		tags: ['WebSocket', 'Node.js', 'Realtime'],
		repo: 'https://github.com/Sreevanth9/chat-websocket',
	},
	{
		title: 'Pokemon Finder',
		description:
			'Pokemon search application using API integration and dynamic UI rendering.',
		image: 'https://images.pexels.com/photos/9072313/pexels-photo-9072313.jpeg',
		tags: ['React', 'API', 'JavaScript'],
		repo: 'https://github.com/Sreevanth9/Pokemon_finder',
	},
	{
		title: 'Flutter MVVM App',
		description:
			'Flutter mobile application following MVVM architecture principles.',
		image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
		tags: ['Flutter', 'Dart', 'MVVM'],
		repo: 'https://github.com/Sreevanth9/flutter_mvvm_app',
	},
	{
		title: 'EV Route Optimizer',
		description:
			'Electric vehicle route optimization system using shortest path algorithms.',
		image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg',
		tags: ['Python', 'Algorithms', 'Routing'],
		repo: 'https://github.com/Sreevanth9/EVRouteOptimizer',
	},
	{
		title: 'Java SE Learning Journey',
		description:
			'Collection of Java SE concepts, examples, and practice programs.',
		image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
		tags: ['Java', 'OOP'],
		repo: 'https://github.com/Sreevanth9/java-se-learning-journey',
	},
	{
		title: 'Data Analysis Case Studies',
		description:
			'Data analysis projects and case studies using Python and visualization tools.',
		image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
		tags: ['Python', 'Pandas', 'Power BI'],
		repo: 'https://github.com/Sreevanth9/data-analysis-case-studies',
	},
	{
		title: 'Dentiginee',
		description:
			'Dental appointment booking and dentist finder MERN application.',
		image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg',
		tags: ['MERN', 'Authentication', 'MongoDB'],
		repo: 'https://github.com/Sreevanth9/dentiginee',
	},
	{
		title: 'Machine Learning',
		description:
			'Machine learning models, experiments, and implementations.',
		image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
		tags: ['Machine Learning', 'Python'],
		repo: 'https://github.com/Sreevanth9/ML',
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
		degree: 'Bachelor of Technology',
		field: 'Computer Science and Engineering',
		institution: 'Amrita Vishwa Vidyapeetham',
		location: 'Bengaluru, India',
		startDate: '2022',
		endDate: '2026',
		achievements: [
			'Focused on software engineering, backend systems, data structures, algorithms, and full-stack development.',
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
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiGithub,
	SiLinux,
	SiHtml5,
	SiCss,
	SiJsonwebtokens,
	SiCplusplus,
	SiNextdotjs,
	SiTailwindcss,
	SiMysql,
	SiPostman,
	SiPython,
	SiSocketdotio,
	SiVercel,
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
} from 'lucide-react';

export type SkillIcon = IconType | LucideIcon;

export type SkillCategory = {
	title: string;
	icon: SkillIcon;
	skills: {
		name: string;
		icon: SkillIcon;
	}[];
};

export const skillCategories: SkillCategory[] = [
	{
		title: 'Programming Languages',
		icon: Code2,
		skills: [
			{ name: 'Java', icon: FaJava },
			{ name: 'JavaScript', icon: SiJavascript },
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
			{ name: 'React.js', icon: SiReact },
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'Tailwind CSS', icon: SiTailwindcss },
			{ name: 'HTML5', icon: SiHtml5 },
			{ name: 'CSS3', icon: SiCss },
			{ name: 'Responsive UI Design', icon: FaCode },
			{ name: 'Framer Motion', icon: FaCode },
		],
	},
	{
		title: 'Backend Development',
		icon: Server,
		skills: [
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'Express.js', icon: SiExpress },
			{ name: 'REST APIs', icon: TbApi },
			{ name: 'Socket.io', icon: SiSocketdotio },
			{ name: 'API Integration', icon: TbApi },
			{ name: 'Object-Oriented Programming', icon: FaServer },
		],
	},
	{
		title: 'Databases',
		icon: Database,
		skills: [
			{ name: 'MongoDB', icon: SiMongodb },
			{ name: 'Mongoose', icon: SiMongodb },
			{ name: 'SQLite', icon: FaDatabase },
			{ name: 'MySQL', icon: SiMysql },
		],
	},
	{
		title: 'Authentication & Security',
		icon: ShieldCheck,
		skills: [
			{ name: 'JWT Authentication', icon: SiJsonwebtokens },
			{ name: 'bcrypt', icon: ShieldCheck },
			{ name: 'OTP Authentication', icon: ShieldCheck },
			{ name: 'Authentication Systems', icon: ShieldCheck },
			{ name: 'Cryptography', icon: ShieldCheck },
		],
	},
	{
		title: 'AI / Machine Learning',
		icon: BrainCircuit,
		skills: [
			{ name: 'Machine Learning', icon: BrainCircuit },
			{ name: 'Deep Learning', icon: BrainCircuit },
			{ name: 'Computer Vision', icon: BrainCircuit },
			{ name: 'PyTorch', icon: BrainCircuit },
			{ name: 'YOLO', icon: BrainCircuit },
			{ name: 'Prompt Engineering', icon: BrainCircuit },
			{ name: 'Generative AI', icon: BrainCircuit },
		],
	},
	{
		title: 'Cloud & Deployment',
		icon: Cloud,
		skills: [
			{ name: 'AWS S3', icon: FaAws },
			{ name: 'AWS Rekognition', icon: FaAws },
			{ name: 'Oracle OCI', icon: Cloud },
			{ name: 'Vercel', icon: SiVercel },
			{ name: 'EmailJS', icon: FaCode },
		],
	},
	{
		title: 'Tools & Platforms',
		icon: Wrench,
		skills: [
			{ name: 'Git', icon: SiGithub },
			{ name: 'GitHub', icon: SiGithub },
			{ name: 'Linux', icon: SiLinux },
			{ name: 'VS Code', icon: VscCode },
			{ name: 'Postman', icon: SiPostman },
			{ name: 'npm', icon: SiNpm },
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
		skills: ['Java', 'JavaScript', 'Python', 'C', 'C++', 'SQL'],
	},
	{
		title: 'Frontend Development',
		skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Web Design', 'Framer Motion'],
	},
	{
		title: 'Backend Development',
		skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT Authentication', 'bcrypt', 'OTP Authentication', 'API Integration'],
	},
	{
		title: 'Databases',
		skills: ['MongoDB', 'Mongoose', 'SQLite', 'MySQL'],
	},
	{
		title: 'AI / Machine Learning',
		skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Image Processing', 'PyTorch', 'NumPy', 'YOLO', 'UNET', 'Prompt Engineering', 'Generative AI'],
	},
	{
		title: 'Cloud & Deployment',
		skills: ['AWS S3', 'AWS Rekognition', 'Oracle OCI Generative AI', 'Vercel', 'EmailJS', 'Cloud Computing'],
	},
	{
		title: 'Tools & Platforms',
		skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Postman', 'npm'],
	},
	{
		title: 'Core Computer Science',
		skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving', 'Graph Algorithms', 'Network Programming', 'Authentication Systems', 'Cryptography'],
	},
];

