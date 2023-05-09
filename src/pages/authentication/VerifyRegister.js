import React, { useState } from "react";
import Background from "../../assets/background.png";
import Card from "../../components/FormRegistration/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyRegisterOtp } from "../../features/auth/authSlice";

const VerifyRegister = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(verifyRegisterOtp(otp));
      navigate("/login");
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* Background */}
      <div
        className="fixed inset-0"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div>
        <Card setOtp={setOtp} otp={otp} handleSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default VerifyRegister;
