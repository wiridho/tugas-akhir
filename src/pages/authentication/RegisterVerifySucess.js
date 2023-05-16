import React, { useEffect, useState } from "react";
// import Background from "../../assets/background.png";
import Card from "../../components/FormRegistration/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyRegisterOtp } from "../../features/auth/authSlice";
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";

const RegisterVerifySucess = () => {
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isVerified } = useSelector((state) => state.auth);

  const userId = data._id;
  console.log(data._id);
  console.log("isVerified", isVerified);

  // useEffect(() => {
  //   if (isVerified) {
  //     navigate("/login");
  //   }
  // }, [navigate, isVerified]);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(verifyRegisterOtp({ otp: otp, userId: data._id }));
  // };

  const handleResend = () => {
    console.log("button clicked");
  };

  return (
    <>
      <div className="">
        <div>
          {/* Background */}
          {/* <div className="fixed inset-0 bg-primary"></div> */}
          <div>
            <div className="bg-black">
              <p className="text-white">register success</p>
            </div>
            {/* <Card
              setOtp={setOtp}
              otp={otp}
              handleSubmit={onSubmit}
              handleResend={handleResend}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterVerifySucess;
