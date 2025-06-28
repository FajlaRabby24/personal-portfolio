import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-primary min-h-screen">
      <header className="backdrop-blur-2xl sticky top0 border-b border-[#ededed54]">
        <Navbar />
      </header>
      <main className=" space-y-28">
        <Banner />
        <AboutMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
