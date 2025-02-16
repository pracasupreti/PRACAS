import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { NavbarComponent } from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
