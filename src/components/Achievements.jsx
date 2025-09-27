import { useState } from "react";
import { MdClear } from "react-icons/md";
import Container from "./Container";

const achievements = [
  {
    title: "Hackathon Participation – Technovation’25",
    issuer: "Josephite IT Club, presented by Programming Hero",
    project:
      "Smart Salon – a queue management system to reduce salon customer waiting time",
    date: "September 2025",
    highlight:
      "Collaborated as part of Team Quadruple R, showcasing creativity, problem-solving, and coding spirit in a competitive environment.",
    image: "/hackathon.png", // replace with your file path
  },
  {
    title:
      "Certificate of Completion with Excellence – Complete Web Development Course",
    issuer: "Programming Hero",
    instructor: "Jhankar Mahbub",
    date: "2025 (Batch 11)",
    highlight:
      "Successfully completed an intensive full-stack development course covering JavaScript, HTML, CSS, React, and project building. Recognized for dedication, quick learning, and on-time task completion.",
    image: "/webdev-course.jpg", // replace with your file path
  },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className=" scroll-mt-24">
      <Container>
        <h2 className="section-title">Achievements & Certificates</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1e1b38] to-[#291e40] border border-[#5e4ca7] rounded-lg p-5 flex flex-col "
            >
              {/* Certificate Image */}
              <img
                src={item.image}
                alt={item.title}
                onClick={() => setSelectedImage(item.image)}
                className="w-full max-h-[404px]  object-cover cursor-pointer rounded-lg mb-4 border"
              />

              {/* Certificate Info */}
              <h3 className="text-xl text-white font-semibold">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.issuer}</p>
              <p className="text-gray-200 text-sm">{item.date}</p>

              {/* Optional fields */}
              {item.project && (
                <p className="mt-2 text-gray-200 text-sm">
                  <span className="text-white font-medium">Project: </span>
                  {item.project}
                </p>
              )}
              {item.instructor && (
                <p className="mt-2 text-gray-200 text-sm">
                  <span className="text-white font-medium">Instructor: </span>
                  {item.instructor}
                </p>
              )}

              <p className="mt-3 text-gray-200 text-sm">{item.highlight}</p>
            </div>
          ))}
        </div>
        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              />
              <button
                className="absolute top-2 right-2 bg-neutral cursor-pointer rounded-full p-2 text-white font-bold"
                onClick={() => setSelectedImage(null)}
              >
                <MdClear />
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Achievements;
