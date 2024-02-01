import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Staffs from "./pages/Staffs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/rankedtower-web" element={<HomePage />}/>
            <Route path="/rankedtower-web/staffs" element={<Staffs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
