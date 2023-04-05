import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth);
  console.log("token", token);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logOut);
    navigate("/");
  };

  return (
    <div>
      <h1>INI HOMEPAGE</h1>
      <br />
      <br />
      <button onClick={handleLogout} className="border bg-red-600 text-white">
        LOGOUT
      </button>
    </div>
  );
};

export default Homepage;
