import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./components/profile";
import Details from "./components/details";
import Search from "./components/search";
import LoginRegister from "./components/login";
import RedirectPage from "./pages/RedirectPage";
import MBRTheme from "./theme";
import { ChakraProvider } from "@chakra-ui/react"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
  <ChakraProvider theme = {MBRTheme}>
      <BrowserRouter>
        <div className="container">
          <Routes>
              <Route index element={<HomePage/>} />
              <Route path="/redirect" element={<RedirectPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage/>} />
              //just for testing
              <Route path="/profile/" element={<Profile/>} />
              <Route path="/profile/:profileId?" element={<Profile/>} />
              <Route path="/details/:did" element={<Details />}/>
              <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
  </ChakraProvider>
  );
}

export default App;
