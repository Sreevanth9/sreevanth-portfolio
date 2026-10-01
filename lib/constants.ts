export const siteConfig = {
	name: 'Vadlamudi Sreevanth Chowdhary',
	description:
		'Personal portfolio of Vadlamudi Sreevanth Chowdhary — Software Engineer specializing in backend architecture, Google Cloud infrastructure (GCP), Core Java, TypeScript, Node.js, and modern full-stack software systems.',
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
			title: 'Projects & Publications',
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

export const trajectoryMindsExperience: Experience = {
	title: 'Full Stack Developer Intern',
	company: 'Trajectory Minds Software Solutions',
	category: 'Full-Stack Development & Cloud Infrastructure',
	location: 'Remote',
	startDate: 'September 16, 2026',
	endDate: 'Present',
	period: 'September 2026 – Present',
	summary:
		'Engineering full-stack web applications, FastAPI backend services, dual-storage lead capture systems with Google Sheets and Firebase Firestore, and automated GCP CI/CD deployment pipelines.',
	isPrimary: true,
	description: [
		'Developed and optimized full-stack web workflows with a high-performance Python FastAPI backend, RESTful endpoints, and responsive user-facing interfaces.',
		'Engineered an enterprise lead capture and inquiry system with dual persistence across Google Sheets API and Firebase Firestore (contact_submissions collection).',
		'Architected a zero-key cloud deployment pipeline on Google Cloud Run leveraging Application Default Credentials (ADC) and custom IAM Service Accounts.',
		'Configured end-to-end CI/CD automation via GitHub → Google Cloud Build → Google Artifact Registry → Cloud Run using multi-stage Docker containerization.',
		'Implemented comprehensive security hardening including Pydantic/backend input validation, honeypot anti-spam defense, strict Firestore security rules, and formula injection escaping.',
		'Designed an interactive confirmation UX featuring animated status indicators, multi-step onboarding progression, and double-submission protection.',
		'Eliminated container startup race conditions in Cloud Run by refactoring database and Google API clients to non-blocking lazy initializations.',
	],
	technologies: [
		'FastAPI',
		'Python',
		'Google Cloud Platform',
		'Cloud Run',
		'Cloud Build',
		'Artifact Registry',
		'Docker',
		'Firebase Firestore',
		'Google Sheets API',
		'Cloud IAM',
		'Application Default Credentials (ADC)',
		'React.js',
		'REST APIs',
		'CI/CD',
		'Web Security',
	],
	documents: [
		{
			title: 'View Offer Letter',
			url: '/documents/trajectory-minds-internship-offer-letter.pdf',
		},
	],
};

export const indiaSpaceLabExperience: Experience = {
	title: 'Research & Software Development Intern',
	company: 'India Space Lab',
	category: 'Space Technology & Aerospace Software',
	location: 'Remote',
	startDate: 'May 1, 2026',
	endDate: 'June 15, 2026',
	period: 'May 1, 2026 – June 15, 2026',
	summary:
		'Completed a Summer Internship & Technical Training Program focused on space technology, autonomous systems, and aerospace software development.',
	description: [
		'Developed an ISRO-inspired CanSat Ground Control Software (GCS) using React.js, JavaScript, and Three.js for real-time mission visualization and telemetry monitoring.',
		'Implemented Python-based PID Controller Tuning and Autonomous Navigation algorithms for engineering applications.',
		'Worked on telemetry processing, sensor charting, and mission mapping using Leaflet.js and Chart.js.',
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
		{
			title: 'View Evaluation Report',
			url: '/documents/india-space-lab-evaluation-report.pdf',
		},
	],
};

export const professionalExperiences: Experience[] = [
	trajectoryMindsExperience,
	indiaSpaceLabExperience,
];

export const primaryExperience: Experience = trajectoryMindsExperience;

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
	...professionalExperiences,
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
	reportUrl?: string;
	reportText?: string;
	certificateUrl?: string;
	certificateText?: string;
};

export type Publication = {
	title: string;
	conference: string;
	location?: string;
	year: string;
	authors?: string;
	description: string;
	tags: string[];
	paperUrl?: string;
	certificateUrl?: string;
	projectUrl?: string;
};

export const selectedProjects: Project[] = [
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
		reportUrl: '/documents/teledentistry-ai-paper.pdf',
		reportText: 'View Paper',
	},
	{
		title: 'SketchForce AI – Forensic Suspect Identification System',
		description:
			'Forensic suspect matching platform leveraging OpenCV and AWS Rekognition facial comparison, secure OTP authentication, role-based access control, and AWS S3 digital evidence storage.',
		image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
		tags: ['Java', 'JavaFX', 'OpenCV', 'AWS Rekognition', 'AWS S3', 'SQLite'],
		repo: 'https://github.com/Sreevanth9/Sketch-Force-AI',
		reportUrl: '/documents/sketchforce-ai-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'Deep Learning-Based Brain Tumor Analysis',
		description:
			'A multi-task deep learning system combining tumor segmentation and multi-class classification from MRI scans using an enhanced U-Net architecture.',
		image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop',
		tags: ['Deep Learning', 'U-Net', 'Image Segmentation', 'Computer Vision', 'MRI Analysis', 'Python'],
		reportUrl: '/documents/brain-tumor-analysis-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'PySpark-Driven Graph-Based E-commerce Recommendation and Purchase Prediction System',
		description:
			'A graph-based recommendation and purchase prediction system using PySpark, Node2Vec, FAISS, machine learning, and deep learning for large-scale e-commerce interaction data.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
		tags: ['PySpark', 'FAISS', 'Node2Vec', 'Machine Learning', 'Deep Learning', 'XGBoost', 'ANN'],
		reportUrl: '/documents/pyspark-ecommerce-recommendation-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'Efficient Pathfinding Algorithms for Autonomous Vehicles Using Graph Algorithms',
		description:
			'An autonomous-vehicle path planning system combining A* for global path planning, D*-Lite for dynamic replanning, and network-flow algorithms for traffic-aware route decisions.',
		image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop',
		tags: ['A*', 'D*-Lite', 'Graph Algorithms', 'Network Flow', 'Path Planning', 'Optimization'],
		reportUrl: '/documents/autonomous-vehicles-pathfinding-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'Smart Irrigation System for Protected Flower Cultivation Using Real-Time Sensing and Automation',
		description:
			'An IoT-based smart irrigation system using real-time environmental sensing and ESP32-based automation for protected flower cultivation.',
		image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
		tags: ['ESP32', 'IoT', 'Blynk', 'Soil Moisture Sensors', 'Temperature/Humidity Sensors', 'Automation'],
		reportUrl: '/documents/smart-irrigation-system-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'Real-Time Web Chat Application with Live Performance Metrics',
		description:
			'Low-latency full-duplex chat platform built with Node.js, Express, and Socket.IO featuring real-time room communication, typing indicators, message persistence, and live P95 latency monitoring dashboards.',
		image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
		tags: ['Socket.io', 'Node.js', 'Express.js', 'WebSocket', 'Latency Metrics', 'Distributed Systems'],
		repo: 'https://github.com/Sreevanth9/chat-websocket',
		reportUrl: '/documents/real-time-chat-paper.pdf',
		reportText: 'View Paper',
	},
	{
		title: 'EV Route Optimizer',
		description:
			'Smart navigation and shortest-path planning platform for electric vehicles incorporating graph algorithms (Floyd-Warshall, Bellman-Ford), traffic constraints, and charging station graphs.',
		image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop',
		tags: ['JavaScript', 'Graph Algorithms', 'Leaflet.js', 'Optimization'],
		repo: 'https://github.com/Sreevanth9/EVRouteOptimizer',
		reportUrl: '/documents/ev-route-optimizer-daa-report.pdf',
		reportText: 'View Report',
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
		title: 'Blockchain-Based Transaction Validation and Management System',
		description:
			'Decentralized transaction verification and ledger management framework featuring cryptographic block validation, immutable audit trails, and peer-to-peer consensus mechanisms.',
		image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
		tags: ['Blockchain', 'Cryptography', 'Distributed Systems', 'Consensus', 'Security'],
		reportUrl: '/documents/blockchain-transaction-validation-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'Underwater Debris Detection with YOLO & CBAM Modifications',
		description:
			'Marine robotics perception pipeline evaluating YOLO architectures modified with Convolutional Block Attention Modules (CBAM) for high-accuracy submerged debris classification.',
		image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
		tags: ['YOLO', 'CBAM', 'Computer Vision', 'PyTorch', 'Object Detection', 'Marine AI'],
		reportUrl: '/documents/underwater-debris-detection-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'CanSat Ground Control Software',
		description:
			'ISRO-inspired real-time ground station interface featuring telemetry parsing, 3D attitude visualization with Three.js, mission maps via Leaflet, and live sensor charting.',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
		tags: ['React.js', 'Three.js', 'Leaflet.js', 'Chart.js', 'Telemetry', 'JavaScript'],
		repo: 'https://github.com/Sreevanth9/cansat-gcs',
		reportUrl: '/documents/cansat-project-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'SecureVoIP Cryptographic Communication',
		description:
			'Encrypted VoIP communication system in MATLAB featuring AES voice payload encryption, RSA digital signatures, and TCP socket stream transmission with hidden message encoding over SIP.',
		image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
		tags: ['MATLAB', 'AES Encryption', 'RSA', 'TCP Sockets', 'Cryptography'],
		repo: 'https://github.com/Sreevanth9/SecureVoIP-MATLAB',
		reportUrl: '/documents/secure-audio-sip-report.pdf',
		reportText: 'View Report',
	},
	{
		title: 'Flutter MVVM Public API App',
		description:
			'Cross-platform mobile application architected with MVVM pattern, clean state management, responsive ListView pagination, and robust error handling for REST APIs.',
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
];

export const researchProjects: Project[] = selectedProjects;

export const publications: Publication[] = [
	{
		title: 'Teledentistry Enhancement Through AI-Based Image Classification and Patient Scheduling Framework',
		conference: 'International Conference on Interdisciplinary Research in Science, Engineering, and Technology (ICIRSET 2025)',
		location: 'Shah & Anchor Kutchhi Engineering College, Mumbai (Scopus-Indexed)',
		year: '2025',
		authors: 'Vadlamudi Sreevanth Chowdhary',
		description:
			'A research work exploring AI-based image classification and patient scheduling within a teledentistry framework.',
		tags: ['Teledentistry', 'AI Image Classification', 'Patient Scheduling', 'Healthcare AI', 'REST APIs'],
		paperUrl: '/documents/teledentistry-ai-paper.pdf',
		certificateUrl: '/documents/icirset-2025-certificate.jpeg',
		projectUrl: 'https://dentiginee.lovable.app',
	},
	{
		title: 'Real-Time Web Chat Application with Live Performance Metrics',
		conference: 'Sixteenth International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)',
		location: 'IIT Indore (in association with IEEE EPS & AICTE)',
		year: '2025',
		authors: 'Vadlamudi Sreevanth Chowdhary',
		description:
			'Presented at the Sixteenth International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025) held at IIT Indore. Focuses on real-time web communication, WebSockets/Socket.IO, latency measurement, P95 latency, and live metrics dashboards.',
		tags: ['Real-Time Web Communication', 'WebSockets', 'Socket.IO', 'Latency Measurement', 'P95 Latency', 'Live Metrics Dashboard'],
		paperUrl: '/documents/real-time-chat-paper.pdf',
		certificateUrl: '/documents/icccnt-2025-certificate.pdf',
		projectUrl: undefined,
	},
];

export const projects: Project[] = selectedProjects;

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

export const certificates: Certificate[] = [
	{
		title: 'Ultimate Web Development Course 2026 - Build Modern Websites: MERN Stack',
		issuer: 'Udemy',
		date: 'May 7, 2026',
		description:
			'Modern full-stack web development training covering React, Node.js, Express, MongoDB, REST APIs, and responsive UI design.',
		skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
		url: '/certificates/udemy-mern-stack-development.jpg',
	},
	{
		title: 'Java Programming - Beginner to Master: Core Java Programming',
		issuer: 'Udemy',
		date: 'January 26, 2026',
		description:
			'Core Java programming concepts including OOP, collections framework, exception handling, multithreading, and system design.',
		skills: ['Java', 'OOP', 'Collections', 'Multithreading'],
		url: '/certificates/udemy-java-beginner-to-master.pdf',
	},
	{
		title: 'Claude Code 101',
		issuer: 'Anthropic',
		date: 'May 5, 2026',
		description:
			'AI-assisted development workflow training focused on Claude Code tooling, prompt engineering, productivity workflows, and developer acceleration.',
		skills: ['Claude Code', 'AI Workflow', 'Prompt Engineering'],
		url: '/certificates/claude-code-101.pdf',
	},
	{
		title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
		issuer: 'Oracle',
		date: 'September 16, 2025',
		description:
			'Professional certification covering Generative AI fundamentals, LLM concepts, embeddings, OCI generative AI services, and enterprise AI architectures.',
		skills: ['Generative AI', 'LLMs', 'Oracle OCI', 'Embeddings'],
		url: '/certificates/oracle-generative-ai-professional.pdf',
	},
	{
		title: 'AWS Essential Training for Developers',
		issuer: 'LinkedIn Learning',
		date: 'September 3, 2026',
		description:
			'Developer-centric AWS cloud foundations covering Amazon EC2 compute, AWS Lambda serverless architectures, storage, security, and cloud deployment pipelines.',
		skills: ['AWS', 'Amazon EC2', 'AWS Lambda', 'Cloud Computing'],
		url: '/certificates/linkedin-aws-essential-training-for-developers.pdf',
	},
	{
		title: 'Claude 101',
		issuer: 'Anthropic',
		date: 'May 5, 2026',
		description:
			'Fundamentals of Claude AI workflows, prompting techniques, AI-assisted productivity, and practical LLM usage concepts.',
		skills: ['Claude AI', 'LLMs', 'Prompting'],
		url: '/certificates/claude-101.pdf',
	},
	{
		title: 'Agentic AI Fundamentals: Architectures, Frameworks, and Applications',
		issuer: 'LinkedIn Learning',
		date: 'August 1, 2026',
		description:
			'In-depth training covering autonomous AI agents, multi-agent frameworks, tool usage patterns, reasoning loops, and production AI architectures.',
		skills: ['Agentic AI', 'AI Agents', 'Autonomous Systems'],
		url: '/certificates/linkedin-agentic-ai-fundamentals.pdf',
	},
	{
		title: 'Career Essentials in GitHub Professional Certificate',
		issuer: 'GitHub & LinkedIn',
		date: 'August 4, 2026',
		description:
			'Comprehensive professional certification program validating end-to-end GitHub workflows, collaborative software engineering, repository management, and DevOps automation.',
		skills: ['GitHub', 'Git', 'DevOps', 'Version Control'],
		url: '/certificates/github-career-essentials.pdf',
	},
	{
		title: 'Practical GitHub Copilot',
		issuer: 'LinkedIn Learning',
		date: 'August 4, 2026',
		description:
			'Hands-on AI pair programming with GitHub Copilot covering code generation, test authoring, prompt engineering, and code refactoring.',
		skills: ['GitHub Copilot', 'AI Pair Programming', 'Productivity'],
		url: '/certificates/linkedin-practical-github-copilot.pdf',
	},
	{
		title: 'Practical GitHub Actions',
		issuer: 'LinkedIn Learning',
		date: 'July 17, 2026',
		description:
			'CI/CD automation using GitHub Actions including workflow orchestration, custom triggers, environment secrets, matrix builds, and deployment pipelines.',
		skills: ['GitHub Actions', 'CI/CD', 'Automation'],
		url: '/certificates/linkedin-practical-github-actions.pdf',
	},
	{
		title: 'Practical GitHub Project Management and Collaboration',
		issuer: 'LinkedIn Learning',
		date: 'August 3, 2026',
		description:
			'Agile project planning, GitHub Issues, Projects boards, pull request workflows, code review best practices, and team collaboration.',
		skills: ['Project Management', 'GitHub Projects', 'Collaboration'],
		url: '/certificates/linkedin-practical-github-project-management.pdf',
	},
	{
		title: 'Practical GitHub Code Search',
		issuer: 'LinkedIn Learning',
		date: 'August 4, 2026',
		description:
			'Advanced code navigation, regex-based code search, semantic indexing, and architectural code exploration across large repositories.',
		skills: ['Code Search', 'Repository Navigation', 'GitHub'],
		url: '/certificates/linkedin-practical-github-code-search.pdf',
	},
	{
		title: 'AI Agents for Everyday Professionals: Simple Automations to Speed Up Your Work',
		issuer: 'LinkedIn Learning',
		date: 'July 30, 2026',
		description:
			'Practical implementation of AI agents and workflow automation to streamline repetitive tasks, process data, and accelerate engineering workflows.',
		skills: ['AI Agents', 'Automation', 'Workflows'],
		url: '/certificates/linkedin-ai-agents-professionals.pdf',
	},
	{
		title: 'Artificial Intelligence Foundations: Machine Learning',
		issuer: 'LinkedIn Learning',
		date: 'August 15, 2026',
		description:
			'Core machine learning concepts, supervised and unsupervised learning pipelines, model training, evaluation metrics, and algorithms.',
		skills: ['Machine Learning', 'AI Foundations', 'Algorithms'],
		url: '/certificates/linkedin-ai-foundations-machine-learning.pdf',
	},
	{
		title: 'Python Essential Training',
		issuer: 'LinkedIn Learning',
		date: 'July 28, 2026',
		description:
			'Comprehensive Python programming foundations including object-oriented programming, data structures, functional constructs, and standard libraries.',
		skills: ['Python', 'OOP', 'Data Structures'],
		url: '/certificates/linkedin-python-essential-training.pdf',
	},
	{
		title: 'Learn C and C++ (Beginner to Advance)',
		issuer: 'Udemy',
		date: 'October 3, 2023',
		description:
			'Programming fundamentals, memory management, pointers, OOP, and problem-solving techniques using C and C++.',
		skills: ['C', 'C++', 'Memory Management', 'Data Structures'],
		url: '/certificates/udemy-c-and-cpp-beginner-to-advance.pdf',
	},
	{
		title: 'Software Engineering Job Simulation',
		issuer: 'J.P. Morgan Chase & Co. / Forage',
		date: 'August 25, 2025',
		description:
			'Completed practical software engineering simulation tasks including Kafka integration, REST API integration, H2 database integration, and backend project setup.',
		skills: ['Kafka', 'REST API', 'Backend Development', 'Java'],
		url: '/certificates/forage-software-engineering-simulation.pdf',
	},
	{
		title: 'Deloitte Data Analytics Job Simulation',
		issuer: 'Deloitte / Forage',
		date: 'August 25, 2025',
		description:
			'Hands-on analytics experience involving data cleaning, dashboard creation, business insights, and forensic technology analysis.',
		skills: ['Data Analytics', 'Visualization', 'Forensic Technology'],
		url: '/certificates/deloitte-forage-data-analytics-simulation.pdf',
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
	SiFastapi,
	SiGooglecloud,
	SiFirebase,
	SiGooglesheets,
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
			{ name: 'Python', icon: SiPython, featured: true },
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
			{ name: 'FastAPI', icon: SiFastapi, featured: true },
			{ name: 'Node.js', icon: SiNodedotjs, featured: true },
			{ name: 'Express.js', icon: SiExpress, featured: true },
			{ name: 'REST APIs', icon: TbApi, featured: true },
			{ name: 'Python Backend', icon: SiPython, featured: true },
			{ name: 'Socket.io', icon: SiSocketdotio },
			{ name: 'Server-Sent Events (SSE)', icon: Zap },
			{ name: 'API Integration', icon: TbApi },
			{ name: 'Nodemailer', icon: Mail },
			{ name: 'SMTP', icon: Send },
		],
	},
	{
		title: 'Databases & Storage',
		icon: Database,
		skills: [
			{ name: 'MongoDB', icon: SiMongodb, featured: true },
			{ name: 'Firebase Firestore', icon: SiFirebase, featured: true },
			{ name: 'Supabase', icon: SiSupabase, featured: true },
			{ name: 'Google Sheets API', icon: SiGooglesheets },
			{ name: 'Mongoose', icon: SiMongodb },
			{ name: 'MySQL', icon: SiMysql },
			{ name: 'Oracle SQL', icon: FaDatabase },
			{ name: 'H2 Database', icon: FaDatabase },
			{ name: 'SQLite', icon: FaDatabase },
		],
	},
	{
		title: 'AI & Machine Learning',
		icon: BrainCircuit,
		skills: [
			{ name: 'Generative AI', icon: Sparkles, featured: true },
			{ name: 'Agentic AI', icon: Bot, featured: true },
			{ name: 'Claude Code', icon: Terminal, featured: true },
			{ name: 'Claude AI', icon: Sparkles },
			{ name: 'LLMs & Embeddings', icon: Sparkles, featured: true },
			{ name: 'Machine Learning', icon: BrainCircuit },
			{ name: 'Deep Learning', icon: Layers },
			{ name: 'Computer Vision', icon: Eye },
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
			{ name: 'Google Cloud Platform (GCP)', icon: SiGooglecloud, featured: true },
			{ name: 'Cloud Run', icon: SiGooglecloud, featured: true },
			{ name: 'Cloud Build', icon: Workflow, featured: true },
			{ name: 'Artifact Registry', icon: Boxes },
			{ name: 'Docker', icon: SiDocker, featured: true },
			{ name: 'GitHub Actions', icon: GitBranch, featured: true },
			{ name: 'CI/CD Automation', icon: Workflow, featured: true },
			{ name: 'Oracle Cloud (OCI)', icon: Cloud },
			{ name: 'AWS', icon: FaAws, featured: true },
			{ name: 'Amazon EC2', icon: FaAws },
			{ name: 'AWS Lambda', icon: FaAws },
			{ name: 'AWS S3', icon: FaAws },
			{ name: 'AWS Rekognition', icon: Eye },
			{ name: 'AWS SDK', icon: FaAws },
			{ name: 'AWS Amplify', icon: FaAws },
			{ name: 'AWS App Runner', icon: Rocket },
			{ name: 'Docker Compose', icon: SiDocker },
			{ name: 'CloudFront', icon: Globe },
			{ name: 'Vercel', icon: SiVercel },
		],
	},
	{
		title: 'Authentication & Security',
		icon: ShieldCheck,
		skills: [
			{ name: 'Google Cloud IAM', icon: KeyRound, featured: true },
			{ name: 'Application Default Credentials (ADC)', icon: ShieldCheck, featured: true },
			{ name: 'JWT Authentication', icon: SiJsonwebtokens, featured: true },
			{ name: 'Firestore Security Rules', icon: Shield },
			{ name: 'Anti-Spam / Honeypot Defense', icon: Bot },
			{ name: 'Formula Injection Prevention', icon: ShieldCheck },
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
			{ name: 'Multithreading & Concurrency', icon: Cpu },
			{ name: 'Memory Management', icon: Boxes },
			{ name: 'DBMS', icon: Database },
			{ name: 'Operating Systems', icon: Terminal },
			{ name: 'Computer Networks', icon: Network },
		],
	},
	{
		title: 'Tools & Platforms',
		icon: Wrench,
		skills: [
			{ name: 'GitHub Copilot', icon: Bot, featured: true },
			{ name: 'GitHub Actions', icon: GitBranch },
			{ name: 'GitHub Projects & Agile', icon: Boxes },
			{ name: 'GitHub Code Search', icon: SiGithub },
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
			'FastAPI',
			'Node.js',
			'Express.js',
			'REST APIs',
			'Python Backend',
			'Socket.io',
			'Server-Sent Events (SSE)',
			'API Integration',
			'Nodemailer',
			'SMTP',
		],
	},
	{
		title: 'Databases & Storage',
		skills: ['MongoDB', 'Firebase Firestore', 'Supabase', 'Google Sheets API', 'Mongoose', 'MySQL', 'Oracle SQL', 'H2 Database', 'SQLite'],
	},
	{
		title: 'AI & Machine Learning',
		skills: [
			'Generative AI',
			'Agentic AI',
			'Claude Code',
			'Claude AI',
			'LLMs & Embeddings',
			'Machine Learning',
			'Deep Learning',
			'Computer Vision',
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
			'Google Cloud Platform (GCP)',
			'Cloud Run',
			'Cloud Build',
			'Artifact Registry',
			'Docker',
			'GitHub Actions',
			'CI/CD Automation',
			'Oracle Cloud (OCI)',
			'AWS',
			'Amazon EC2',
			'AWS Lambda',
			'AWS S3',
			'AWS Rekognition',
			'AWS SDK',
			'AWS Amplify',
			'AWS App Runner',
			'Docker Compose',
			'CloudFront',
			'Vercel',
		],
	},
	{
		title: 'Authentication & Security',
		skills: [
			'Google Cloud IAM',
			'Application Default Credentials (ADC)',
			'JWT Authentication',
			'Firestore Security Rules',
			'Anti-Spam / Honeypot Defense',
			'Formula Injection Prevention',
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
			'Multithreading & Concurrency',
			'Memory Management',
			'DBMS',
			'Operating Systems',
			'Computer Networks',
		],
	},
	{
		title: 'Tools & Platforms',
		skills: ['GitHub Copilot', 'GitHub Actions', 'GitHub Projects', 'GitHub Code Search', 'Git', 'GitHub', 'Linux', 'VS Code', 'Postman', 'npm', 'Vercel'],
	},
];

