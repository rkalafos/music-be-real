import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./components/details";
import Search from "./components/search";
import RedirectPage from "./pages/RedirectPage";
import MBRTheme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <ChakraProvider theme={MBRTheme}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/redirect" element={<RedirectPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/profile/:profileId" element={<ProfilePage />} />
            <Route path="/details/:did" element={<Details />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
