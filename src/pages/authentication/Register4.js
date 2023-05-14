import React from "react";
import LogoAmana from "../../assets/img/logo/LogoAmana2.svg";
import { Label, TextInput, Button, Avatar } from "flowbite-react";
import { handleRegister } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toTitleCase } from "../../utils/Format";
import Carousel from "../../components/Carousel/Carousel";

const Register4 = () => {
  const { roles } = useParams();
  console.log("roles", roles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    data["roles"] = roles;
    console.log("register", data);
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
      <div className="h-screen grid grid-cols-2">
        {/* Background */}
        <div className="bg-primary md:flex sm:block items-center">
          {/* <p className="text-white">AMANAH</p> */}
          <Carousel />
        </div>

        {/* Form */}
        <div className=" flex flex-col  justify-center bg-slate-100 ">
          <div className="max-w-[400px] w-full mx-auto pb-4 flex justify-center items-center">
            <img
              className="w-20 h-20 bg-primary p-2 rounded-full"
              src={LogoAmana}
              alt="Rounded avatar"
            />
          </div>
          <form
            className="max-w-[400px] w-full mx-auto bg-gray-50 p-6 px-8 rounded-2xl "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <p className="font-sans text-2xl font-medium pb-3 text-slate-900 ">
                Daftar sebagai {toTitleCase("roles")}
              </p>
            </div>
            <div className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-medium pb-1"
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
            <div className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-medium pb-1"
                htmlFor="Name"
                value="Name"
              />
              <TextInput
                type={"text"}
                placeholder="Masukkan Nama"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red text-xs">This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-medium pb-1"
                htmlFor="Password"
                value="Password"
              />

              <TextInput
                type={"password"}
                placeholder="Masukkan Password"
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
            <div className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-medium pb-1"
                htmlFor="phone number"
                value="Phone Number"
              />

              <TextInput
                type={"number"}
                placeholder="Masukkan nomor handphone"
                {...register("phoneNumber", {
                  required: "This field is required",
                })}
              />
              {errors?.phoneNumber?.message && (
                <p className="text-red text-xs">This field is required</p>
              )}
            </div>
            <div className="">
              <Button type="submit" className="w-full bg-primary ">
                Daftar
              </Button>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="pr-1 text-xs text-right text-grey">
                  Sudah punya akun?
                </p>
                <Link
                  className="text-xs text-primary hover:text-blue-800"
                  to="/login"
                >
                  Masuk
                </Link>
              </div>
              <p className="p-2 text-xs text-right text-grey hover:text-primary">
                <Link to="/reset-password">Lupa Password?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register4;
