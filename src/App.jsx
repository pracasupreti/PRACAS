import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { NavbarComponent } from "./components/Navbar";
import { Join } from "./pages/Join";
function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
