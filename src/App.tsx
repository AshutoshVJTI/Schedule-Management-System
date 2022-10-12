import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import UserPage from "./pages/User/index";
import RoomsPage from "./pages/Rooms/index";
import MeetingPage from "./pages/Meeting";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="user" element={<UserPage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="meeting" element={<MeetingPage />} />
        </Routes>
      </div>
  );
}

export default App;
