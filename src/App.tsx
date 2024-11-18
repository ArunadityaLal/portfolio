import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Header />
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:underline"
                }
              >
                Summary
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:underline"
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:underline"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:underline"
                }
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:underline"
                }
              >
                Skills
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
