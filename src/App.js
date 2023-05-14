import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/authentication/Register';
import RegisterRoles from './pages/authentication/RegisterRoles';
import Login from './pages/authentication/Login';
import VerifyRegister from './pages/authentication/VerifyRegister';
import VerifyLogin from './pages/authentication/VerifyLogin';
import Homepage from './pages/Homepage/Homepage';
import ForgotPassword from './pages/authentication/ForgotPassword';
import VerifyEmail from './pages/authentication/VerifyEmail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />

                {/* VERIFY EMAIL ACCOUNT FROM EMAIL LINK */}
                <Route
                    path="/authentication/verification/email/:userId/:token"
                    element={<VerifyEmail />}
                />
                {/* END */}

                <Route path="/register">
                    <Route index element={<RegisterRoles />} />
                    <Route path=":roles" element={<Register />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/verifyregister" element={<VerifyRegister />} />
                <Route path="/verifylogin" element={<VerifyLogin />} />
                <Route path="/reset-password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
