import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "../../features/auth/authSlice";
import registerImg from "../../assets/authImg.png";
import { TextInput, Label, Button } from "flowbite-react";
import group23 from "../../assets/Group 234.png";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [data, setData] = useState({
  //   email: "",
  //   name: "",
  //   roles: "",
  //   password: "",
  //   phoneNumber: "",
  // });

  // const handleChange = (event) => {
  //   let value = event.target.value;
  //   let name = event.target.name;
  //   setData({ ...data, [name]: value });
  // };

  const onSubmit = (data) => {
    console.log("Register", data);
    dispatch(handleRegister(data));
    navigate("/verifyregister");
  };

  // calling useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="fixed inset-0 flex  ">
        <div className="bg-white-600 grow "></div>
        <div className=" w-[455px]">
          <img src={group23} alt="" />
        </div>
      </div>
      <div className="min-h-screen">
        <div className="relative ">
          <div className="flex mx-auto justify-center items-center max-w-[1220px]">
            {/* Register */}
            <div className="w-[454px]">
              <form
                className="bg-white border shadow-md rounded px-7 pt-8 pb-8 "
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <h1 className="text-2xl font-semibold mb-3 ">
                    Register Page
                  </h1>
                </div>
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
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
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
                    htmlFor="Name"
                    value="Name"
                  />
                  <TextInput
                    type={"text"}
                    {...register("name", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red text-xs">This field is required</p>
                  )}
                </div>
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
                    htmlFor="roles"
                    value="Roles"
                  />
                  <TextInput
                    type={"text"}
                    {...register("roles", {
                      required: true,
                    })}
                  />
                  {errors.roles?.type === "required" && (
                    <p className="text-red text-xs">This field is required</p>
                  )}
                </div>
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
                    htmlFor="Password"
                    value="Password"
                  />

                  <TextInput
                    type={"password"}
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
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
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
                    htmlFor="Password"
                    value="Phone Number"
                  />
                  <TextInput
                    type={"number"}
                    {...register("phoneNumber", {
                      required: "This field is required",
                    })}
                  />
                  {errors?.phoneNumber?.message && (
                    <p className="text-red text-xs">This field is required</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
            {/* End Register */}

            {/* Image */}
            <div className="h-[465px] w-[409px] ml-6">
              <img src={registerImg} alt="" />
            </div>
            {/* End Image */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
