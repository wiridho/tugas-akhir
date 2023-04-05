import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import VerifyRegister from "./pages/authentication/VerifyRegister";
import VerifyLogin from "./pages/authentication/VerifyLogin";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifyregister" element={<VerifyRegister />} />
        <Route path="/verifylogin" element={<VerifyLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
