import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import carrental1 from "../assets/images/carrental1.png";
import carrental2 from "../assets/images/carrental2.png";
import carrental3 from "../assets/images/carrental3.png";
import carrental4 from "../assets/images/carrental4.png";
import carrental5 from "../assets/images/carrental5.png";
import medimurt from "../assets/images/medimurt-hub.png";
import medimurt1 from "../assets/images/medimurt-hub1.png";
import medimurt2 from "../assets/images/medimurt-hub2.png";
import medimurt3 from "../assets/images/medimurt-hub3.png";
import medimurt4 from "../assets/images/medimurt-hub4.png";
import medimurt5 from "../assets/images/medimurt-hub5.png";
import recipe1 from "../assets/images/recipe1.png";
import recipe2 from "../assets/images/recipe2.png";
import recipe3 from "../assets/images/recipe3.png";
import recipe4 from "../assets/images/recipe4.png";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

const projects = [
  // medimurt hub
  {
    images: [medimurt, medimurt1, medimurt2, medimurt3, medimurt4, medimurt5],
    title: "MediMurt Hub",
    description:
      "Medimurt Hub is a centralized platform or dashboard designed for medicine sellers or distributors to manage their products, advertisements, and business operations efficiently.",
    fetures: [
      "Responsive design for mobile, tablet, and desktop (including dashboard)",
      "Firebase authentication with Google, GitHub & email/password login",
      "Role-based dashboard for Admin, Seller, and User",
      "Dynamic slider based on Admin advertisements",
      "Category-based medicine filtering and navigation",
      "Add-to-cart with quantity control and checkout flow",
      "Stripe-based secure payment and PDF invoice generation",
      "Realtime Toast and SweetAlert notifications for all actions",
      "React Hook Form and TanStack Query integration throughout",
      "Environment variables used for Firebase config & API keys",
      "Private Routes with token validation for protected pages",
      "404 Error Page and Secure Deployment",
    ],
    technology: [
      "React Data Table",
      "TanStack Query",
      "Stripe Payment",
      "React Print",
      "Lottie Animations",
      "React Hook Form",
      "SwiperJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Router v7",
      "Firebase Authentication",
      "Axios",
      "DaisyUI",
      "Tailwind CSS",
      "React 19",
      "SweetAlert2",
      "React Toastify",
      "dotenv",
    ],
    links: [
      {
        icon: <CiGlobe size={20} />,
        name: "Live Site",
        url: "https://multi-vendor-medicine-e266c.web.app",
      },
      {
        icon: <FaGithub size={20} />,
        name: "GitHub",
        url: "https://github.com/FajlaRabby24/medimurt-hub-client",
      },
    ],
  },
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
        name: "GitHub",
        url: "https://github.com/FajlaRabby24/car-rental-client",
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
        name: "GitHub",
        url: "https://github.com/FajlaRabby24/recipe-book-client",
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
