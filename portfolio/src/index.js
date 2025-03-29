import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Art from "./pages/Art/Art";
import Recipies from "./pages/Recipies/Recipies";
import Friends from "./pages/Friends/Friends";
import Motorways from "./pages/Motorways/Motorways";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio/">
          <Route index element={<Home />} />
          <Route path="/Portfolio/Contact" element={<Contact />} />
          <Route path="/Portfolio/Projects" element={<Projects />} />
          <Route path="/Portfolio/Art" element={<Art />} />
          <Route path="/Portfolio/Recipies" element={<Recipies />} />
          <Route path="/Portfolio/Friends" element={<Friends />} />
          <Route path="/Portfolio/Motorways" element={<Motorways />} />
          <Route path="/Portfolio/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
