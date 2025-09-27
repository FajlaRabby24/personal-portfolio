import { ToastContainer } from "react-toastify";
import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="min-h-screen">
      <ToastContainer autoClose={1500} position="top-left" />
      <header className="backdrop-blur-2xl sticky top-0  z-50 border-b border-[#ededed54]">
        <Navbar />
      </header>
      <main className=" space-y-40">
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
