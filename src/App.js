import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import Details from "./components/details";
import Search from "./components/search";
import Login from "./components/login";
import RedirectPage from "./components/RedirectPage";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
              <Route index element={<Home/>} />
              <Route path="/redirect" element={<RedirectPage />} />
              <Route path="/profile/:profileId?" element={<Profile/>} />
              <Route path="/details/:did" element={<Details />}/>
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
