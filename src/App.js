import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Contactp2 from "./component/Contactp2";
import Portfolio from "./component/Portfolio";
import Portfolio2 from "./component/Portfolio2";
import Skills from "./component/Skills";
import Experience from "./component/Experience";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Portfolio2 />
      <Experience />
      <Skills />
      <Contact />
      <Contactp2 />
      <Footer />
    </>
  );
}

export default App;
