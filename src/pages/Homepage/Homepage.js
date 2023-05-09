import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { Button } from "flowbite-react";

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
    <>
      <div className="mt-2 mx-2 flex justify-center items-center">
        <h1>INI HOMEPAGE</h1>
        <Button type="submit" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};

export default Homepage;
