import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
      <div className=" rounded-lg w-[95vw] z-50 space-y-4 max-w-5xl overflow-y-auto max-h-[90vh]">
        <h1 className="text-2xl md:text-3xl  font-semibold text-center">
          {projectTitle}
        </h1>
        <p>
          <span className="font-bold">Description:</span> {projectDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          <p className="font-bold">Technology: </p>
          {projectTech.map((tech, idx) => (
            <div
              className="badge badge-info text-white font-semibold "
              key={idx}
            >
              {tech}
            </div>
          ))}
        </div>
        <ul className="text-sm list-none space-y-1">
          <p className="font-bold">Fetures:</p>
          {projectFeatures.map((feture, idx) => (
            <li key={idx}>→ {feture}</li>
          ))}
        </ul>
        <div className="flex justify-between">
          <div className="flex gap-3 pt-2">
            {projectLinks.map((link, idx) => (
              <a href={link.url} target="_blank" key={idx}>
                <button className="btn btn-neutral">
                  {link.icon} {link.name}
                </button>
              </a>
            ))}
          </div>
          <button
            onClick={closeModal}
            className="btn btn-outline btn-neutral rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
