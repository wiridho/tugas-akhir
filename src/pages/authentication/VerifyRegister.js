import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyRegisterOtp } from "../../features/auth/authSlice";
import { TextInput, Label, Button } from "flowbite-react";

const VerifyRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Useform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      console.log("data", data);
      dispatch(verifyRegisterOtp(data));
      // navigate("/login");
      // localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>Verify OTP Register</p>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="otp"
          value="OTP"
        />
        <TextInput
          type="number"
          {...register("otp", {
            required: true,
            // minLength: 5,
            maxLength: 5,
          })}
        />
        {errors.otp?.type === "required" && (
          <p className="text-red text-xs">This field is required</p>
        )}
        {errors.otp?.type === "maxLength" && (
          <p className="text-red text-xs">OTP must be 5 digit</p>
        )}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default VerifyRegister;
