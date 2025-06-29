import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { MdOutlineVibration } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import bg from "../assets/images/bg1.png";
import image from "../assets/images/image.png";

const words = [
  "UI/UX Designer",
  "React.js Enthusiast",
  "Clean Code Advocate",
  "Frontend Engineer",
  "RESTful API Builder",
];

const Banner = () => {
  return (
    <section
      id="home"
      className="h-[700px] px-3 xl:px-0  relative flex flex-col items-center  justify-center scroll-mt-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="flex flex-col sm:items-end sm:flex-row gap-2 ">
          {/* image  */}
          <div className="avatar">
            <div className="bg-radial from-primary from-40% to-secondary w-32 rounded-full ">
              <img className="object-contain" src={image} />
            </div>
          </div>
          {/* title  */}
          <h2 className="text-white font-bold text-4xl md:text-6xl  md:leading-16">
            HEY, I'M <span className="title">FAJLA</span> 🪄 <br /> A{" "}
            <span className="title text-3xl sm:text-4xl md:text-5xl">
              {/* API Integration Specialist */}
              <Typewriter loop={true} words={words} />
            </span>
          </h2>
        </div>
        <p className="text-white py-5 text-lg max-w-4xl mx-auto">
          <span className="font-semibold">A MERN stack developer</span> with
          sciid foundations in design. passionate about crafting seamless user
          experiences I thrive at the intersection of creativity and
          functionality.
        </p>
        <div className="flex z-50 flex-wrap items-center gap-7 pt-1">
          <button className="btn bg-white">
            <GoDownload size={20} /> Resume
          </button>
          <a href="#projects">
            {" "}
            <button className="btn bg-white">
              <MdOutlineVibration size={20} /> View Projects
            </button>
          </a>
          <p className="text-white">|</p>
          <a target="_blank" href="https://github.com/FajlaRabby24">
            <FaGithub size={30} color="white" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fajla-rabby-99297b361"
          >
            <FaLinkedin size={30} color="white" />
          </a>
          <a target="_blank" href="https://x.com/FajlaRabby24">
            <FaX size={30} color="white" />
          </a>
        </div>
        {/* gradient box  */}
        {/* <div className="absolute z-0 flex flex-col md:flex-row top-0 ">
          <div className="w-48 md:w-96 h-48 md:h-96    bg-radial   from-[#eb4d1d4f]  blur-3xl"></div>

          <div className=" w-48 md:w-96 h-48 md:h-96    bg-radial   from-[#19b7f543]  blur-3xl"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
