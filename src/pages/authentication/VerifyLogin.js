import React, { useEffect, useState } from "react";
import Card from "../../components/FormRegistration/Card";
import Background from "../../assets/background.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// function slice
import { verifyLoginOtp } from "../../features/auth/authSlice";

const VerifyLogin = () => {
  const [otp, setOtp] = useState("");
  //dispatch
  const dispatch = useDispatch();
  //navigate
  const navigate = useNavigate();

  const value = useSelector((state) => state.auth.value);

  const onSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(verifyLoginOtp({ email: value.email, otp: otp }));
      navigate("/homepage");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
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
    </div>
  );
};

export default VerifyLogin;
