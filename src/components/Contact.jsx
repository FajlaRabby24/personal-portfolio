import { FaGithub, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaX } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Container from "./Container";

const Contact = () => {
  return (
    <Container>
      <section id="contact" className=" px-4 py-10 scroll-mt-20">
        <h2 className="section-title">Contact</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-[#1e1b38] to-[#291e40] border border-[#5e4ca7] p-6 rounded-lg bg-base-100 shadow-md">
            <h3 className="text-xl text-white font-semibold mb-4">
              Contact Information
            </h3>
            <div className="bg-base-200 space-y-2 px-3 py-3 rounded-lg ">
              <p className="flex items-center gap-2 font-semibold">
                <MdEmail size={20} /> Email:{" "}
                <span className="font-normal">fajlarabby.dev@gmail.com</span>
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <FaLocationDot size={20} /> Location:{" "}
                <span className="font-normal">Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <FaPhoneAlt size={20} /> Phone:{" "}
                <span className="font-normal">+8801857796312</span>
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <FaWhatsapp size={20} /> Whatsapp:{" "}
                <span className="font-normal">+8801307495864</span>
              </p>
              {/* social icons  */}
              <div className="flex mt-6 items-center  gap-3">
                <a
                  className=" p-2 rounded-full bg-neutral"
                  target="_blank"
                  href="https://github.com/FajlaRabby24"
                >
                  <FaGithub size={25} color="white" />
                </a>
                <a
                  className=" p-2 rounded-full bg-neutral"
                  target="_blank"
                  href="https://github.com/FajlaRabby24"
                >
                  <FaLinkedin size={20} color="white" />
                </a>
                <a
                  className=" p-2 rounded-full bg-neutral"
                  target="_blank"
                  href="https://github.com/FajlaRabby24"
                >
                  <FaX size={20} color="white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#1e1b38] to-[#291e40] border border-[#5e4ca7] p-6 rounded-lg bg-base-100 shadow-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Phone (optional)"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Message..."
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
              <button className="btn btn-accent w-full">Send Email</button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
