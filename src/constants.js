//tech-logo
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

//experience-logo
import sensationlogo from "./assets/company_logo/sensation_sofware.png";
import apptunixlogo from "./assets/company_logo/apptunix_logo.jpeg";

//projectImage
import jobPortalImage from "./assets/ProjectImages/jobPortalImage.png";
import gadgetShopImage from "./assets/ProjectImages/gadgetShopImage.png";

//education logo
import jmitLogo from "./assets/education_logo/jmit_logo.png";
import sgmpLogo from "./assets/education_logo/sgmp_logo.png";

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
    img: sensationlogo,
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
    img: apptunixlogo,
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
    img: jmitLogo,
    school:
      "Seth Jai Parkash Mukand Lal Institute of Engineering and Technology,Radaur",
    date: "2022 - 2025",
    grade: "75.2%",
    desc: "I completed my Bachelor's degree in Computer Application (BCA) from JMIT College, Radaur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at  College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    id: 1,
    img: sgmpLogo,
    school:
      "Sanjay Gandhi Memorial Senior Secondary Public School, Ladwa - Kurukshetra",
    date: "2021 - 2022",
    grade: "94%",
    desc: "I completed my class 12 education from S.G.M.P Senior Secondary School, Ladwa - Kurukshetra, under the CBSE board.",
    degree: "CBSE(XII) - Commerce with Maths",
  },
  {
    id: 2,
    img: sgmpLogo,
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
    image: jobPortalImage,
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
    image: gadgetShopImage,
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
