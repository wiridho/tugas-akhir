import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleVerify } from "../../features/auth/authSlice";

const Verify = () => {
  const [otp, setOtp] = useState("");

  console.log(otp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleVerify(otp));
    navigate("/");
    localStorage.clear();
  };

  return (
    <div>
      <p>Verify Page</p>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Masukkan Kode OTP :
        </label>
        <br />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={"number"}
          name="otp"
          onChange={(e) => setOtp(e.target.value)}
        />
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Verify;
