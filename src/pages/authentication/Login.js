import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../features/auth/authSlice";
import { TextInput, Label, Button } from "flowbite-react";

import Background from "../../assets/background.png";

//icon
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const TogglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  //toggle password
  function togglePasswordVisibility() {
    setIsPasswordVisible(true);
  }

  return (
    <div onClick={() => togglePasswordVisibility()}>
      {isPasswordVisible ? (
        <EyeSlashIcon className="h-6 w-6" />
      ) : (
        <EyeIcon className="h-6 w-6" />
      )}
    </div>
  );
};

const Login = () => {
  //dispatch
  const dispatch = useDispatch();
  //navigate
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login", data);
    dispatch(handleLogin(data));
    navigate("/verifylogin");
  };

  // calling useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div>
        {/* Background */}
        <div
          className="fixed inset-0"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
        {/* Content */}
        <div className="relative">
          <div className="flex justify-center items-center h-screen">
            <div
              class="block max-w-sm md:w-1/3
             px-8 py-6 bg-white border-gray-200 rounded-lg"
            >
              <h5 class="text-2xl font-bold tracking-tight text-gray-90">
                LOGO
              </h5>
              <p class="text-2xl text-[#333333] py-5 font-bold">
                Welcome back!
              </p>

              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="py-[10px]">
                  <Label
                    className="block text-[#828282] text-sm font-medium mb-[10px]"
                    htmlFor="email"
                    value="Email Address"
                  />
                  <TextInput
                    type={"text"}
                    placeholder="you@example.com"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red text-xs">This field is required</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="text-red text-xs">Invalid email address</p>
                  )}
                </div>

                <div className="py-[10px]">
                  <Label
                    className="block text-[#828282] text-sm font-medium mb-[10px]"
                    htmlFor="Password"
                    value="Password"
                  />

                  <TextInput
                    type={"password"}
                    placeholder="enter 8 character or more"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
                    rightIcon={TogglePassword}
                    // onClick={() => togglePasswordVisibility}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red text-xs">This field is required</p>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                    <p className="text-red text-xs">
                      Password cannot be more than 20 characters long
                    </p>
                  )}
                  {errors.password && errors.password.type === "pattern" && (
                    <p className="text-red text-xs">
                      "Password must be 8 characters long, contain at least one
                      uppercase letter, one lowercase letter, and one special
                      character"
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full mt-2" color={"purple"}>
                  Submit
                </Button>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <p className="pr-1 text-xs text-right text-grey">
                      Need an account?
                    </p>
                    <Link
                      className="text-xs text-blue-700 hover:text-blue-800"
                      to="/register"
                    >
                      Register
                    </Link>
                  </div>
                  <p className="p-2 text-xs text-right text-grey hover:text-gray-700">
                    <Link to="/reset-password">Forgot Password?</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
