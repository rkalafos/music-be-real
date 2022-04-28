import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./components/details";
import Search from "./components/search";
import MBRTheme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <ChakraProvider theme={MBRTheme}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/profile/:profileId" element={<ProfilePage />} />
            <Route path="/details/:did" element={<Details />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
