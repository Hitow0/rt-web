import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Staffs from "./pages/Staffs";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/rt-web" element={<HomePage />}/>
            <Route path="/*" element={<HomePage />}/>

            <Route path="/rt-web/staffs" element={<Staffs />}/>
            <Route path="/rt-web/leaderboard" element={<LeaderBoard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
