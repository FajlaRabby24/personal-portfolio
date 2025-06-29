import { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import Carousel from "./Carousel";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    images: projectImages,
    title: projectTitle,
    description: projectDescription,
    fetures: projectFeatures,
    technology: projectTech,
    links: projectLinks,
  } = project;

  return (
    <div className="bg-gradient-to-br from-[#1e1b38] to-[#291e40] border border-[#5e4ca7] rounded-lg flex flex-col md:flex-row shadow-lg p-4 space-y-4 md:space-y-0 md:space-x-6">
      {/* Image */}
      <div className="flex-1 overflow-hidden z-0">
        <Carousel images={projectImages} />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        <h2 className="text-2xl text-white font-bold">{projectTitle}</h2>
        <p className="text-sm text-gray-200">{projectDescription}</p>

        <ul className="text-sm list-none space-y-1">
          {projectFeatures.length > 4
            ? projectFeatures.slice(0, 3).map((feture, idx) => (
                <li className="text-white" key={idx}>
                  → {feture}
                </li>
              ))
            : projectFeatures.map((feture, idx) => (
                <li className="text-white" key={idx}>
                  → {feture}
                </li>
              ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {projectTech.length > 9
            ? projectTech.slice(0, 9).map((tech, idx) => (
                <div
                  className="badge badge-info text-white font-semibold "
                  key={idx}
                >
                  {tech}
                </div>
              ))
            : projectTech.map((tech, idx) => (
                <div
                  className="badge badge-info text-white font-semibold "
                  key={idx}
                >
                  {tech}
                </div>
              ))}
        </div>
        <a href=""></a>
        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {projectLinks.map((link, idx) => (
            <a href={link.url} target="_blank" key={idx}>
              <button className="btn s">
                {link.icon} {link.name}
              </button>
            </a>
          ))}
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn  rounded-md"
          >
            <TbListDetails size={20} /> Details
          </button>
        </div>
        {isModalOpen && (
          <ProjectDetailsModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            project={project}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
