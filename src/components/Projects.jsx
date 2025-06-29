import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import carrental1 from "../assets/images/carrental1.png";
import carrental2 from "../assets/images/carrental2.png";
import carrental3 from "../assets/images/carrental3.png";
import carrental4 from "../assets/images/carrental4.png";
import carrental5 from "../assets/images/carrental5.png";
import jobtrack1 from "../assets/images/jobtrack1.png";
import jobtrack2 from "../assets/images/jobtrack2.png";
import jobtrack3 from "../assets/images/jobtrack3.png";
import jobtrack4 from "../assets/images/jobtrack4.png";
import recipe1 from "../assets/images/recipe1.png";
import recipe2 from "../assets/images/recipe2.png";
import recipe3 from "../assets/images/recipe3.png";
import recipe4 from "../assets/images/recipe4.png";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

const projects = [
  // car rental
  {
    images: [carrental1, carrental2, carrental3, carrental4, carrental5],
    title: "Car Rental System",
    description:
      "A feature-rich, full-stack car rental platform where users can browse, add, update, delete, and book cars in real-time. It supports secure authentication, JWT-based route protection, car management, and a dynamic UI for optimal user experience across devices.",
    fetures: [
      "Add, Update, Delete Cars (CRUD)",
      "Search and Book Cars with real-time availability",
      "Responsive design for mobile, tablet, and desktop",
      "User Authentication using Firebase & JWT",
      "Private Routes with token validation",
      "Sorting and Filtering of Cars by Price and Date",
      "Recent Listings, Special Offers, and Animations",
      "Booking Management (Modify/Cancel)",
      "404 Error Page and Secure Deployment",
    ],
    technology: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "Firebase Authentication",
      "JWT",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "dotenv",
    ],
    links: [
      {
        icon: <CiGlobe size={20} />,
        name: "Live Site",
        url: "https://car-rental-b7869.web.app",
      },
      {
        icon: <FaGithub size={20} />,
        name: "Client",
        url: "https://github.com/FajlaRabby24/car-rental-client",
      },
      {
        icon: <FaGithub size={20} />,
        name: "Server",
        url: "https://github.com/FajlaRabby24/car-rental-server",
      },
    ],
  },
  //   recipe book
  {
    images: [recipe1, recipe2, recipe3, recipe4],
    title: "Recipe Book App",
    description:
      "Recipe Book is a full-stack, responsive web application where users can explore, add, like, and manage recipes. It offers personalized user experiences with protected routes, a wishlist-like 'like' system, and cuisine-based filtering. Designed for food enthusiasts to discover and share culinary delights.",
    fetures: [
      "Top Recipes Section with dynamic likes sorting from MongoDB",
      "Private Routes: Add Recipe, My Recipes, and Recipe Details",
      "Add, Update, and Delete Recipes with real-time UI sync",
      "Like System with restrictions (cannot like own recipes)",
      "Filter Recipes by Cuisine Type on All Recipes page",
      "Authentication with Email/Password and Google login",
      "Dark/Light Theme Toggle with persistent state",
      "Custom 404 Page, Lottie Animations & Typewriter Effects",
    ],
    technology: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Authentication",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT (optional for secure API access)",
      "Axios",
      "React Awesome Reveal",
      "React Tooltip",
      "React Simple Typewriter",
      "Lottie React",
    ],
    links: [
      {
        icon: <CiGlobe size={20} />,
        name: "Live Site",
        url: "https://recipe-book-app-45653.web.app",
      },
      {
        icon: <FaGithub size={20} />,
        name: "Client",
        url: "https://github.com/FajlaRabby24/recipe-book-client",
      },
      {
        icon: <FaGithub size={20} />,
        name: "Server",
        url: "https://github.com/FajlaRabby24/recipe-book-server",
      },
    ],
  },
  //   job track
  {
    images: [jobtrack1, jobtrack2, jobtrack3, jobtrack4],
    title: "JobTrack",
    description:
      "JobTrack is a modern, user-friendly platform designed to help job seekers explore job listings from multiple companies, filter opportunities, view job details, and apply directly. It includes private routes, authentication, dynamic modals, and a company-wise job management system with a sleek, responsive UI.",
    fetures: [
      "Dynamic Company-wise Job Listings from JSON",
      "Private Route for Company Details and My Profile",
      "Job Details Modal with 'Apply' button (opens external site)",
      "Login/Register with Firebase, Google Auth, and Password Validation",
      "Forget Password Flow that redirects to Gmail",
      "Responsive Layout for Mobile, Tablet, and Desktop",
      "Animated Sections using Framer Motion",
      "Dynamic Title for Each Page using React Helmet",
      "Custom 404 Page with themed illustration and redirect",
    ],
    technology: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Authentication",
      "Framer Motion",
      "React Helmet",
      "Axios",
      "React Hook Form",
      "React Toastify",
    ],
    links: [
      {
        icon: <CiGlobe size={20} />,
        name: "Live Site",
        url: "https://job-track-84023.web.app",
      },
      {
        icon: <FaGithub size={20} />,
        name: "Client GitHub",
        url: "https://github.com/FajlaRabby24/job-track",
      },
    ],
  },
];

const Projects = () => {
  return (
    <Container>
      <section id="projects" className="px-3 xl:px-0 scroll-mt-20">
        <h1 className="section-title">Projects</h1>
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Projects;
