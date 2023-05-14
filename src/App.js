import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/authentication/Register";
import RegisterRoles from "./pages/authentication/RegisterRoles";
import Login from "./pages/authentication/Login";
import VerifyRegister from "./pages/authentication/VerifyRegister";
import VerifyLogin from "./pages/authentication/VerifyLogin";
import Homepage from "./pages/Homepage/Homepage";
import ForgotPassword from "./pages/authentication/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterRoles />} />
        <Route path="/register/:roles" element={<Register />} />
        <Route path="/verifyregister" element={<VerifyRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifylogin" element={<VerifyLogin />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
