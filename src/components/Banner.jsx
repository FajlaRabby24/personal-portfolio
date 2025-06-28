import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { MdOutlineVibration } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import image from "../assets/images/image.png";

const words = [
  "MERN Stack Developer",
  "UI/UX Designer",
  "React.js Enthusiast",
  "Node.js Backend Developer",
  "API Integration Specialist",
  "MongoDB & Express Expert",
  "Responsive Web Designer",
  "Clean Code Advocate",
  "Performance Optimizer",
  "Frontend Engineer",
  "RESTful API Builder",
  "Creative Problem Solver",
];

const Banner = () => {
  return (
    <div className="min-h-[calc(80vh-66px)] flex items-center justify-center">
      <div className="relative">
        <div className="flex gap-2 ">
          {/* image  */}
          <div className="avatar">
            <div className="bg-radial from-primary from-40% to-secondary w-32 rounded-full ">
              <img className="object-contain" src={image} />
            </div>
          </div>
          {/* title  */}
          <h2 className="text-white font-bold text-6xl  leading-16">
            HEY, I'M <span className="title">FAJLA</span> 🪄 <br /> A{" "}
            <span className="title text-5xl">
              <Typewriter loop={true} words={words} />
            </span>
          </h2>
        </div>
        <p className="text-white py-5 text-lg">
          <span className="font-semibold">A MERN stack developer</span> with
          sciid foundations in design. <br /> passionate about crafting seamless
          user experiences I thrive at the intersection of creativity and <br />
          functionality.
        </p>
        <div className="flex flex-wrap items-center gap-7 pt-1">
          <button className="btn bg-white">
            <GoDownload size={20} /> Resume
          </button>
          <button className="btn bg-white">
            <MdOutlineVibration size={20} /> View Projects
          </button>
          <p className="text-white">|</p>
          <a target="_blank" href="https://github.com/FajlaRabby24">
            <FaGithub size={20} color="white" />
          </a>
          <a target="_blank" href="https://github.com/FajlaRabby24">
            <FaLinkedin size={20} color="white" />
          </a>
          <a target="_blank" href="https://github.com/FajlaRabby24">
            <FaX size={20} color="white" />
          </a>
        </div>
        {/* gradient box  */}
        <div className="absolute flex top-0 ">
          <div className="w-96 h-96    bg-radial   from-[#eb4d1d4f]  blur-3xl"></div>

          <div className=" w-96 h-96    bg-radial   from-[#19b7f543]  blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
