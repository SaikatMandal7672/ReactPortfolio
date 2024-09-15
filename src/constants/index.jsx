import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";
import weather2 from "../assets/weather-2.png"
import apple from "../assets/apple-2.jpeg"
import food from "../assets/food-delivery.png"


export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  " React , NodeJs , MongoDb, Tailwind , JavaScript , Java , C++ ,";

export const PROJECTS = [
  {
    id: 1,
    title: "Food Delivery Website",
    description:
      "A full-featured food delivery website with an admin dashboard | ReactJs , NodeJs.",
    imgSrc: food,
    GitHub: "https://github.com/SaikatMandal7672/Food-delivery-App",
    link:""

  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills | HTML, CSS , JS.",
    imgSrc: project3,
    GitHub: "https://github.com/SaikatMandal7672/Portfolio",
    link: "https://saikatmandal7672.github.io/Portfolio/",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard providing current weather data and forecasts | HTML , CSS , JS.",
    imgSrc: weather2,
    GitHub: " Github:// https://github.com/SaikatMandal7672/Weather-App",
    link: ""

  },
  {
    id: 4,
    title: "iPhone 15pro website clone",
    imgSrc: apple,
    description: "A clone of the official iphone 15pro website | ReactJs ,ThreeJs.",
    GitHub: "https://github.com/SaikatMandal7672/Apple-15pro-clone",
    link: ""
  },
  {
    id: 5,
    title: "React PortFolio Website",
    imgSrc: project1,
    description: "A personal Portfolio website built using ReactJs.",
    GitHub: "#",
    link: "",


  },
  {
    id: 6,
    title: "Any Future Project",
    imgSrc: project2,
    description: "Just for the layout to look good.", 
    GitHub: "",
    link: ""

  }
];

export const ABOUT =
  "A 3rd year undergrad, a dedicated Full Stack Developer, specialize in creating dynamic and responsive web applications with great user experiences. Have a strong foundation in both front-end and back-end technologies. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "Google",
    role: "Software Engineer",
    year: "12/2023 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Facebook",
    role: "Frontend Developer",
    year: "01/2021 - 11/2023",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/saikat.mandal.374549/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/saikat7672/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/SaikatM88157644",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/SaikatMandal7672",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/saikat-mandal-b9b2a3230/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "saikatmandal290103@gmail.com",
  phone: "+91 7044744450",
};
