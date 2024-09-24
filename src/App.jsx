import React, {useState, useEffect} from "react"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClick = (event) => {
      const targetElement = event.target.closest("[data-id='nav-bar']"); // Find the closest ancestor with data-id="nav-bar"

      if (!targetElement) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
      </div>
      
      <div className="container mx-auto px-8 max-w-8xl">
        <div data-id="nav-bar">
          <Navbar isOpen={isOpen} handleOpen={handleOpen} />
        </div>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}