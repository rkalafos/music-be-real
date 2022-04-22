import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import Details from "./components/details";
import Search from "./components/search";
import LoginRegister from "./components/login";
import RedirectPage from "./components/RedirectPage";
import MBRTheme from "./theme";

// import bootstrap,
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
  <ChakraProvider theme = {MBRTheme}>
      <BrowserRouter>
        <div className="container">
          <Routes>
              <Route index element={<Home/>} />
              <Route path="/redirect" element={<RedirectPage />} />
              //just for testing
              <Route path="/profile/" element={<Profile/>} />
              <Route path="/profile/:profileId?" element={<Profile/>} />
              <Route path="/details/:did" element={<Details />}/>
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<LoginRegister />} />
          </Routes>
        </div>
      </BrowserRouter>
  </ChakraProvider>
  );
}

export default App;
