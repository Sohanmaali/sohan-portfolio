

export const projects = [
    {
        title: 'CarMucho',
        description: 'Developed a user-friendly car booking platform with advanced search, filters, and location-based availability. Integrated a real-time chat system using Socket.IO with typing indicators, read receipts, and user-specific conversations. Implemented real-time notifications for bookings and messages. Built an admin dashboard to manage inventory, bookings, and customer interactions.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Nest', 'Next', 'Socket.io', 'Bootstrap', 'Typescript', 'Redis',],

        demo: 'https://carmucho.com/',
        image: '/images/projects/carmucho.png'
    },
    {
        title: 'Scrapify',
        description: 'Developed a full-stack MERN web application to streamline scrap material sales. Implemented user authentication and role-based access control for sellers and admins. Built a dynamic dashboard for managing listings, prices, and transactions. Integrated secure payments, optimized RESTful APIs, and enhanced UX with a responsive design and real-time notifications.',
        tags: ['Next.js', "React", "Node.js", "MongoDB", "Stripe", "Nest", "Socket.io", "Bootstrap", "Typescript", "Redis"],

        demo: 'https://scrapify-client-alpha.vercel.app',
        image: '/images/projects/scrapify.png'
    },
    {
        title: 'Portfolio Website',
        description: 'Developed a personal portfolio website to showcase my projects, skills, and experience. Built a modern, responsive design using Tailwind CSS and optimized for performance. Implemented a blog feature using MDX and Next.js. Created a custom hook to handle dark mode and system preference detection. Integrated a chatbot using Dialogflow and EmailJS for contact form.',
        tags: ['Next.js', "React", "Node.js", "Typescript",],

        demo: 'https://showcase-with-sohan.vercel.app',
        image: '/images/projects/portFolio.png'
    },
];

export const education = [
    {
        id: 1,
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Ragiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal',
        year: '2023 - 2025',
        description: 'Specialized in Advanced Web Technologies and Cloud Computing',
        achievements: [
            'Scored 8.5 CGPA',
            'Completed major project on E-commerce Platform using MERN Stack',
            'Active participant in coding competitions and hackathons'
        ]
    },
    {
        id: 2,
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Barkatullah Vishwavidyalaya, Bhopal',
        year: '2020 - 2023',
        description: 'Focused on Computer Science fundamentals and software development',
        achievements: [
            'Scored 7.8 CGPA',
            'Developed Library Management System as academic project',
            'Participated in technical symposiums and workshops'
        ]
    },
    {
        id: 3,
        degree: '12th (Senior Secondary)',
        institution: 'Govt High School Khategaon',
        year: '2019 - 2020',
        description: 'Science Stream with Computer Science',
        achievements: [
            'Scored 75% in MP Board Exams',
            'Participated in school science exhibitions',
            'Member of Computer Club'
        ]
    },
    {
        id: 4,
        degree: '10th (Secondary)',
        institution: 'Gaytri Vidya Mandir, Khategaon',
        year: '2017 - 2018',
        description: 'General Studies with focus on Science and Mathematics',
        achievements: [
            'Scored 75% in MP Board Exams',
            'Active participant in extracurricular activities',
            'Member of School Quiz Team'
        ]
    }
];


export const experience = [
    {
        id: 1,
        role: 'MERN Stack Developer',
        company: 'FODUU - Web Design Company India',
        year: '2024 - Present',
        description: 'Developing modern web applications using React, Next.js, and TypeScript',
        responsibilities: [
            'Building responsive and interactive user interfaces',
            'Implementing state management using Redux Toolkit',
            'Collaborating with backend developers for API integration',
            'Optimizing application performance and implementing best practices',
            'Participating in code reviews and team meetings'
        ]
    },
    {
        id: 2,
        role: 'Full Stack Trainee',
        company: 'InfoBeans Foundation Indore',
        year: '2023 - 2024',
        description: 'Full-stack development training program',
        responsibilities: [
            'Learned frontend technologies: HTML, CSS, JavaScript, React',
            'Gained experience in backend development with Node.js and Express',
            'Worked on database design and management with MongoDB',
            'Developed and deployed full-stack applications',
            'Participated in team projects and code reviews'
        ]
    }
];

interface Repository {
    id: number;
    name: string;
    description: string;
    url: string;
    language: string;
    stars: number;
    forks: number;
    updated: string;
    topics: string[];
}

export const repositories: Repository[] = [
    {
        id: 1,
        name: 'portfolio',
        description: 'A comprehensive platform for buying and selling products online. This project aims to provide a seamless experience for users to list, browse, and purchase products.',
        url: 'https://github.com/Sohanmaali/scrapify-client',
        language: 'TypeScript',
        stars: 24,
        forks: 5,
        updated: '2 days ago',
        topics: ['nextjs', 'tailwindcss', 'typescript']
    },
    {
        id: 2,
        name: 'Interview-Preparation',
        description: 'This repository contains solutions to common interview problems. It is intended to serve as a reference for anyone preparing for technical interviews.',
        url: 'https://github.com/Sohanmaali/Interview-Preparation',
        language: 'JavaScript',
        stars: 42,
        forks: 12,
        updated: '1 week ago',
        topics: ['react', 'nodejs', 'mongodb']
    },
    {
        id: 3,
        name: 'Chat App',
        description: 'A mobile-first application to discover and save recipes with filtering by ingredients and dietary restrictions.',
        url: 'https://github.com/Sohanmaali/Chat-app',
        language: 'TypeScript',
        stars: 18,
        forks: 3,
        updated: '3 days ago',
        topics: ['react', 'typescript', 'firebase', 'socket.io', 'tailwindcss']
    },
    {
        id: 4,
        name: 'Easy_solution',
        description: 'A project of helping nature. Here, people can share their skills/expertise with others who need help. It can be anything from programming to home repair. The idea is to create a community where people are willing to help each other without expecting anything in return.',
        url: 'https://github.com/Sohanmaali/Easy_solution',
        language: 'JavaScript',
        stars: 15,
        forks: 2,
        updated: '1 month ago',
        topics: ['react', "nodejs", "express", "mongodb"]
    },
    // {
    //     id: 5,
    //     name: 'blog-api',
    //     description: 'RESTful API for blog application',
    //     url: 'https://github.com/yourusername/blog-api',
    //     language: 'JavaScript',
    //     stars: 8,
    //     forks: 1,
    //     updated: '2 weeks ago',
    //     topics: ['nodejs', 'express', 'mongodb']
    // },
    // {
    //     id: 6,
    //     name: 'data-visualization',
    //     description: 'Interactive data visualization dashboard',
    //     url: 'https://github.com/yourusername/data-viz',
    //     language: 'TypeScript',
    //     stars: 31,
    //     forks: 7,
    //     updated: '5 days ago',
    //     topics: ['react', 'd3', 'typescript']
    // }
];