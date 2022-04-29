import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MBRTheme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import AdminPage from "./pages/AdminPage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

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
            <Route path="/details/:did" element={<Details />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<AdminPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );1
}

export default App;
