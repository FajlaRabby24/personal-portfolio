import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaX } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import Reveal from "../Animation/Reveal";
import Container from "./Container";

const Contact = () => {
  const form = useRef();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_emailjs_server_id,
        import.meta.env.VITE_emailjs_template_id,
        form.current,
        {
          publicKey: "15JZ_CaN9OaulYRHr",
        }
      )
      .then(
        () => {
          setIsSubmiting(false);
          toast.success("Thanks for reaching out. I'll contact you soon!");
          form.current.reset();
        },
        (error) => {
          toast.error(`FAILED... ${error.text}`);
          setIsSubmiting(false);
        }
      );
  };

  return (
    <Container>
      <section
        id="contact"
        className=" px-3 xl:px-0 pb-24 scroll-mt-20 overflow-hidden w-full"
      >
        <h2 className="section-title">Contact</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Information */}
          <Reveal className="bg-gradient-to-br from-[#1e1b38] to-[#291e40] border border-[#5e4ca7] p-3 md:p-6 rounded-lg bg-base-100 shadow-md">
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
                <FaWhatsapp size={20} /> Phone/Whatsapp:{" "}
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
                  href="https://www.linkedin.com/in/FajlaRabby24"
                >
                  <FaLinkedin size={20} color="white" />
                </a>
                <a
                  className=" p-2 rounded-full bg-neutral"
                  target="_blank"
                  href="https://x.com/FajlaRabby24"
                >
                  <FaX size={20} color="white" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal className="bg-gradient-to-br from-[#1e1b38] to-[#291e40] border border-[#5e4ca7] p-3 md:p-6 rounded-lg bg-base-100 shadow-md">
            <form ref={form} className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone (optional)"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                required
                name="user_subject"
                placeholder="Subject"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Message..."
                name="message"
                required
                className="textarea textarea-bordered w-full "
              ></textarea>
              <button
                type="submit"
                className={`btn w-full ${
                  isSubmiting ? "cursor-not-allowed" : undefined
                } btn-info`}
              >
                {isSubmiting ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Send Email"
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
