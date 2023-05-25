import React from "react";
import jwtDecode from "jwt-decode";
import DashboardBorrower from "../Borrower/DashboardBorrower";
import DashboardLender from "../Lender/DashboardLender";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { userRole } = useSelector((state) => state.auth);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZkYzFiNDk1MDg1NmMzOGFiOWZlNzciLCJyb2xlcyI6ImxlbmRlciIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2ODQ5MTQ4MzcsImV4cCI6MTY4NTUxOTYzN30.aFOvdgguKGvhPX16jxhjNZCMeElU5BjvdAlzrOVrzvk";

  const decoded = jwtDecode(token);
  const roles = decoded?.roles;
  console.log("roles", roles);

  if (userRole === "lender") {
    return <DashboardLender />;
  } else {
    return <DashboardBorrower />;
  }
};

export default Homepage;
