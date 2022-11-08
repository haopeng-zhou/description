// import "./App.css";
import "./css/app.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Transcendence from "./components/Transcendence";
import RedTetris from "./components/RedTetris";
import { createContext } from "react";
import { useState } from "react";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Switch } from "@mui/material";

export const ThemeContext = createContext(null);

function App() {
  const [theme, settheme] = useState("dark");

  const toggleTheme = () => {
    settheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <BrowserRouter>
          <Navigation />
          <div className="formGroup">
            <FormGroup>
              <FormControlLabel
                control={<Switch color="secondary" onChange={toggleTheme} defaultChecked />}
                label={theme === "light" ? "Light mode" : "Dark mode"}
              />
            </FormGroup>
          </div>
          <Routes>
            <Route path="/description/about" element={<About />}></Route>
            <Route path="/description/projects" element={<Projects />}></Route>
            <Route
              path="/description/transcendence"
              element={<Transcendence />}
            ></Route>
            <Route
              path="/description/red-tetris"
              element={<RedTetris />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
