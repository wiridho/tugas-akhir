import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Register from "./pages/authentication/Register";
import RegisterRoles from "./pages/authentication/RegisterRoles";
import Login from "./pages/authentication/Login";
import VerifyLogin from "./pages/authentication/VerifyLogin";
import Homepage from "./pages/Homepage/Homepage";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import VerifyEmail from "./pages/authentication/VerifyEmail";
import RegisterVerifySucess from "./pages/authentication/RegisterVerifySucess";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Homepage />
            </PrivateRoute>
          }
        />

        {/* VERIFY EMAIL ACCOUNT FROM EMAIL LINK */}
        <Route
          path="/authentication/verification/email/:userId/:token"
          element={<VerifyEmail />}
        />
        {/* END */}
        <Route path="/register" element={<RegisterRoles />} />
        <Route path="register/:roles" element={<Register />} />
        <Route path="/register/success" element={<RegisterVerifySucess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifylogin" element={<VerifyLogin />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
