import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../features/auth/authSlice";
import LogoAmana from "../../assets/img/logo/LogoAmana2.svg";
import Carousel from "../../components/Carousel/Carousel";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Label, TextInput } from "flowbite-react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Login = () => {
  //dispatch
  const dispatch = useDispatch();
  //navigate
  const navigate = useNavigate();

  // calling useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit
  const onSubmit = (data) => {
    dispatch(handleLogin(data));
  };

  // Access state form store
  const { isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      navigate("/verifylogin");
    }
  }, [isSuccess, navigate]);

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

  return (
    <>
      <div className="h-screen grid grid-cols-1 sm:grid-cols-2 font-inter">
        {/* Left Wrapper */}
        <div className="hidden bg-primary md:flex sm:block items-center">
          {/* <Carousel /> */}
        </div>
        {/* Right Wrapper */}
        <div className="flex flex-col  justify-between p-2 bg-slate-100">
          {/* Logo  */}
          <div className="max-w-[400px] w-full mx-auto pt-6 flex justify-center items-center">
            <img
              className="w-20 h-20 bg-primary p-2 rounded-full flex justify-center items-end"
              src={LogoAmana}
              alt="Rounded avatar"
            />
          </div>

          {/* Form */}
          <div className="max-w-[400px] w-full mx-auto bg-gray-50 p-6 px-8 shadow rounded-2xl">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h1 className="text-xl">Masuk</h1>
              </div>
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
              <Button type="submit" className="w-full mt-2 bg-primary">
                Submit
              </Button>
              <div className="flex justify-between text-primary">
                <div className="flex items-center">
                  <p className="pr-1 text-xs text-right text-grey">
                    Belum punya akun?
                  </p>
                  <Link className="text-xs  hover:text-blue-800" to="/register">
                    Daftar Disini!
                  </Link>
                </div>
                <p className="p-2 text-xs text-right text-grey hover:text-gray-700">
                  <Link to="/reset-password">Forgot Password?</Link>
                </p>
              </div>
            </form>
          </div>
          <div className="text-center text-sm text-[#959292] pb-2">
            <p className="">
              © AMANAH Fintech Syariah 2023. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
