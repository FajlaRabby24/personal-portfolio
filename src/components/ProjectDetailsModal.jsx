import Modal from "react-modal";

const customStyles = {
  content: {
    top: "10vh",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translateX(-50%)",
    maxHeight: "80vh", 
    overflowY: "auto",
    padding: "0",
    borderRadius: "12px",
    border: "none",
  },
};

Modal.setAppElement("#root");

const ProjectDetailsModal = ({ isModalOpen, setIsModalOpen, project }) => {
  const {
    title: projectTitle,
    description: projectDescription,
    fetures: projectFeatures,
    technology: projectTech,
    links: projectLinks,
  } = project;

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="rounded-lg w-[95vw] max-w-5xl space-y-4 p-6 z-50">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          {projectTitle}
        </h1>

        <p>
          <span className="font-bold">Description:</span> {projectDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          <p className="font-bold">Technology:</p>
          {projectTech.map((tech, idx) => (
            <div
              className="badge badge-info text-white font-semibold"
              key={idx}
            >
              {tech}
            </div>
          ))}
        </div>

        <ul className="text-sm list-none space-y-1">
          <p className="font-bold">Features:</p>
          {projectFeatures.map((feature, idx) => (
            <li key={idx}>→ {feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap gap-3 pt-2">
            {projectLinks.map((link, idx) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" key={idx}>
                <button className="btn btn-neutral flex items-center gap-1">
                  {link.icon} {link.name}
                </button>
              </a>
            ))}
          </div>
          <button
            onClick={closeModal}
            className="btn btn-warning rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
