import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { NavbarComponent } from "./components/Navbar";
import { Join } from "./pages/Join";
import {Carrer} from "./pages/Carrer";
function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/carrer" element={<Carrer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
