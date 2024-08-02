import "./App.css";
import Nav from "./components/Nav";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { NavList } from "./data/Lists";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        {NavList.map((link) => (
          <Route key={link.id} path={link.title} element={link.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
