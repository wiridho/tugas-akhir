import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../features/auth/authSlice";
import loginImg from "../../assets/authImg.png";
import { TextInput, Label, Button } from "flowbite-react";

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

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setData({ ...data, [name]: value });
  };

  const onSubmit = (data) => {
    console.log("Login", data);
    // dispatch(handleLogin(data));
    // navigate("/verifylogin");
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
      <div className="px-20 py-2">
        <h1 className="text-3xl text-blue-700 font-bold">LOGO</h1>
      </div>
      <div className="flex mx-auto justify-between max-w-[1220px]">
        {/* Register */}
        <div className="w-[454px]">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <h1 className="text-3xl font-medium mb-3 ">Login Page</h1>
            </div>
            <div className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
                value="Email Address"
              />
              <TextInput
                type={"text"}
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
            <div className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Password"
                value="Password"
              />

              {/* Password */}
              <div>
                <TextInput
                  // type={isPasswordVisible ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                  })}
                  // onClick={togglePasswordVisibility}
                  rightIcon={TogglePassword}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red text-xs">This field is required</p>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <p className="text-red text-xs">
                    Password cannot be more than 20 characters long
                  </p>
                )}
              </div>
              {/* End Password */}
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
        {/* End Register */}
        {/* Image */}
        <div className="h-[739px] w-[653px]">
          <img src={loginImg} alt="" />
        </div>
        {/* End Image */}
      </div>
    </>
  );
};

export default Login;
