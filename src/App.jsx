import "./style/style.css";
import Home from "./header";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";

import "./style/style.RWD.css";
import Project from "./project";
import Footer from "./component/footer";
import Contact from "./contact";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
