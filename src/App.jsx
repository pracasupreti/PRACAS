import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { NavbarComponent } from "./components/Navbar";
import { Join } from "./pages/Join";
import { Carrer } from "./pages/Carrer";
import Sample from "./pages/Sample";
import Cv from "./components/cv";
import Samples from "./components/Samples";
function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/carrer" element={<Carrer />} />
          <Route path="/cv" element={<Cv/>}/>
          <Route path="/samples" element={<Samples />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
