import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyLoginOtp } from "../../features/auth/authSlice";

const VerifyLogin = () => {
  //dispatch
  const dispatch = useDispatch();
  //navigate
  const navigate = useNavigate();

  const [otpLogin, setOtpLogin] = useState("");

  const value = useSelector((state) => state.auth.value);
  // console.log("email", value.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyLoginOtp({ email: value.email, otp: otpLogin }));
    navigate("/homepage");
  };

  return (
    <div className="">
      <h1>Verify Login OTP</h1>
      <form onSubmit={handleSubmit}>
        <label>OTP :</label>
        <input
          type={"number"}
          name="otp"
          onChange={(e) => setOtpLogin(e.target.value)}
        />
        <br />
        <button>Submit OTP</button>
      </form>
    </div>
  );
};

export default VerifyLogin;
