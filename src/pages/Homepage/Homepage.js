import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-2 mx-2 flex justify-center items-center">
        <h1 className="font-inter text-3xl">INI HOMEPAGE</h1>
      </div>
    </>
  );
};

export default Homepage;
