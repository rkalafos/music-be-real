import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
              <Route index element={<Home/>} />
              <Route path="/profile/:profileId?" element={<Profile/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
