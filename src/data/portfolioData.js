// import resumePdf from '../assets/Bharatlal_Resume.pdf'
import chatapp from '../assets/Chat-app.png'
import ecommerce from '../assets/ecommerce-app.png'
import animatedlanding from '../assets/animated-app.png'

// Certificate images imports
import backend from '../assets/backend-certificate.png'
import frontend from '../assets/frontend-certificate.png'
import DSA from '../assets/DSA-certificate.png'
import experiencecertificates from '../assets/Experience-certificate.png'
import DM from '../assets/DM-certificate.png'


export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Bharat Lal',
  title: 'Frontend Engineer',
  tagline: 'I build accessible, high-performance web applications with React and Next.js that deliver exceptional user experiences.',
  email: 'bharatlalsohna@gmail.com',
  location: 'Gurgaon , Haryana, India',
  availability: 'Open to opportunities',
  interests: ['Open Source', 'UI/UX Design'],
  resumeFileName: '/Bharatlal_Resume.pdf',
  resumePath: 'Bharatlal_Resume.pdf',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/bharatlal124', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharatlal0124/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:bharatlalsohna@gmail.com', icon: 'mail' },
]

export const about = {
  paragraphs: [
    'Frontend Developer with 2+ years of experience building production-ready web applications.',
    'Previously worked at Nians, where I contributed to enterprise projects for Apollo Hospitals, EID Parry, Medijourn, AceCloud, and other clients.',
    'I enjoy creating intuitive user interfaces, improving application performance, and solving real-world problems with modern frontend technologies. I thrive in collaborative environments and am always eager to learn new technologies.',
  ],
  highlights: [
    { label: 'Location', value: 'Gurgaon, India' },
    { label: 'Availability', value: 'Immediate Joiner' },
    { label: 'Interests', value: 'Open Source ' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS', ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Firebase', 'Socket.IO'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'GitHub',, 'Postman', 'Vite', 'Webpack', 'Cloudinary', 'VS Code', 'AWS', 'Figma', 'CI/CD'],
  },
]

export const projects = [
  {
    title: 'Real Time Chat Application',
    description:
      'Built a real-time chat application using React.js, Node.js, Express.js, Socket.IO, and MongoDB. Implemented authentication, image sharing with Cloudinary, typing indicators, responsive UI, and persistent chat history to deliver a seamless messaging experience.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.IO', 'Cloudinary'],
    liveUrl: 'https://bharat-chat-app.vercel.app/',
    githubUrl: 'https://github.com/bharatlal124/Real-time-chat-app',
    image: chatapp,
  },
  {
    title: 'E-Commerce React Application',
    description:
      'Scalable e-commerce web application built with React and Firebase, featuring secure authentication and real-time database management.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://busy-buy-project.netlify.app/',
    githubUrl: 'https://github.com/bharatlal124/Busy-buy-Project',
    image: ecommerce,
  },
  {
    title: 'Animated Landing Page',
    description:
      'Immersive, high-performance landing page showcasing advanced scroll-triggered animations using GSAP and Tailwind CSS.',
    tech: ['HTML', 'JavaScript', 'Tailwind CSS', 'GSAP', 'AOS'],
    liveUrl: 'https://royal-diamond-park.netlify.app/',
    githubUrl: 'https://github.com/bharatlal124/animate_web_with_GSAP',
    image: animatedlanding,
  },
  {
    title: 'Hospital API',
    description:
      'Production-ready Node.js REST API for managing hospital workflows, patient-doctor interactions, and JWT-secured authentication.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
    liveUrl: 'https://hospital-api-4lv3.onrender.com/',
    githubUrl: 'https://github.com/bharatlal124/Hospital_API',
    image: null,
  },
  {
    title: 'Postaway API',
    description:
      'Developed a RESTful backend API for a social media platform using Node.js, Express.js, and MongoDB. Implemented JWT authentication, OTP-based password reset, user management, post creation, comments, likes, friendships, and profile management.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
    liveUrl: '/',
    githubUrl: 'https://github.com/bharatlal124/Postaway-II-API-project',
    image: null,
  },
]

export const certificates = [
  {
    title: 'Certificate of Experience ',
    issuer: 'Coding Ninjas',
    date: '2024',
    link: 'https://drive.google.com/file/d/1CQJbtffI46-AFDANV95fjRGWJAr5SmRW/view?usp=drivesdk',
    image: experiencecertificates,
  },
  {
    title: 'Front End Web Developer ',
    issuer: 'Coding Ninjas',
    date: '2023',
    link: 'https://certificate.codingninjas.com/view/a0da78100530d010',
    image: frontend,
  },
  {
    title: 'Backend web Development in Node.js',
    issuer: 'Coding Ninjas',
    date: '2023',
    link: 'https://certificate.codingninjas.com/view/1bf0731e9c922eee',
    image: backend,
  },
  {
    title: 'The fundamental of Digital Marketing ',
    issuer: 'Google',
    date: '2023',
    link: 'https://drive.google.com/file/d/1Hfotn5toRGyLpjrarVY2YBi9iMY9SBYN/view?usp=drive_link',
    image: DM,
  },
  {
    title: 'Data Structure  ',
    issuer: 'Coding Ninjas',
    date: '2023',
    link: 'https://certificate.codingninjas.com/verify/82518866c43a1605',
    image: DSA,
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Nians (Formerly Technians)',
    period: 'June 2024 – May 2026',
    bullets: [
      'Developed and maintained 8+ production-ready web applications, corporate websites, and landing pages for healthcare, SaaS, and enterprise clients.',
      'Built frontend solutions for enterprise clients including Apollo Hospitals, EID Parry, Medijourn, and AceCloud using HTML, CSS, Bootstrap, JavaScript, React.js, and Next.js.',
      'Built 7+ high-converting landing pages with responsive, cross-browser compatible, and mobile-first designs.',
      'Built reusable UI components and interactive animations using React.js, GSAP, AOS, and modern frontend development practices.',
      'Integrated REST APIs to enable seamless frontend-backend communication and dynamic user experiences.',
      'Optimized application performance through image optimization, lazy loading, code splitting, and efficient frontend rendering techniques.',
      'Collaborated with designers and backend developers using Git and GitHub to deliver high-quality production releases in an Agile environment.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Coding Ninjas',
    period: 'March 2024 – June 2024',
    bullets: [
      'Mentored students in HTML, CSS, JavaScript, React.js, and MERN Stack development.',
      'Conducted one-on-one mentoring sessions, debugged student code, and guided students through web development concepts and project implementation.',
      'Helped students build practical frontend and full-stack applications while improving their problem-solving skills.',
    ],

  },
]

export const footer = {
  copyright: `© ${new Date().getFullYear()}  bharatlal. All rights reserved.`,
  credit: 'Built with React & Tailwind CSS',
}
