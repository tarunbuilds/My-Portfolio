export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Mern Stack Intern",
    company: "Sensation Software Solutions (Pvt.) Ltd.",
    date: "August 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Mern Stack Intern",
    company: "Apptunix Technologies Pvt Ltd.",
    date: "June 2024 - August 2024",
    desc: "Completed 2-month MERN Stack training with hands-on experience in frontend UI design and backend development",
    skills: ["ReactJS", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
];

export const education = [
  {
    id: 0,
    img: bsaLogo,
    school:
      "Seth Jai Parkash Mukand Lal Institute of Engineering and Technology,Radaur",
    date: "2022 - 2025",
    grade: "75.2%",
    desc: "I completed my Bachelor's degree in Computer Application (BCA) from JMIT College, Radaur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at  College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    id: 1,
    img: vpsLogo,
    school:
      "Sanjay Gandhi Memorial Senior Secondary Public School, Ladwa - Kurukshetra",
    date: "2021 - 2022",
    grade: "94%",
    desc: "I completed my class 12 education from S.G.M.P Senior Secondary School, Ladwa - Kurukshetra, under the CBSE board.",
    degree: "CBSE(XII) - Commerce with Maths",
  },
  {
    id: 2,
    img: vpsLogo,
    school:
      "Sanjay Gandhi Memorial Senior Secondary Public School, Ladwa - Kurukshetra",
    date: "2019 - 2020",
    grade: "84%",
    desc: "I completed my class 10 education from S.G.M.P Senior Secondary School, Ladwa - Kurukshetra, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Job Portal (MERN Stack)",
    description:
      "A full-stack MERN job portal application that connects recruiters and job seekers. Features include user authentication, role-based access (Admin & Candidate), job posting and management, job applications tracking, and profile management. Built with secure REST APIs, JWT authentication, Cloudinary file uploads, and a responsive UI for a smooth hiring workflow.",
    image: jobPortalLogo,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com/tarunbuilds/Job_portal",
    webapp: "https://job-portal-40kc.onrender.com/",
  },

  {
    id: 1,
    title: "Gadget Shop (MERN Stack)",
    description:
      "A full-stack MERN ecommerce application for buying and selling electronic gadgets. Includes user authentication, product listing and management, cart functionality, order processing, and image uploads. The platform features secure REST APIs, Cloudinary-based image handling, and a responsive UI for an optimized shopping experience.",
    image: gadgetShopLogo,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com/tarunbuilds",
    webapp: "https://symphonious-quokka-135a9d.netlify.app/",
  },
];
