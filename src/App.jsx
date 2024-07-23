import "./style/style.css";
import Header from "./header";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";

import "./style/style.RWD.css";
import Main from "./project";
import Footer from "./component/footer";
import Content from "./content";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/projects" element={<Main />} />
        <Route path="/content" element={<Content />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
