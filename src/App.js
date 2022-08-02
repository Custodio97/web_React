import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Service from "./components/Services";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Service />
      <Experience />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
