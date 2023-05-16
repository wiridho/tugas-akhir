import React, { useEffect } from "react";
import LogoAmana from "../../assets/img/logo/LogoAmana2.svg";
import { Label, TextInput, Button } from "flowbite-react";
import { handleRegister } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toTitleCase } from "../../utils/Format";
import BackgroundAuth from "../../assets/img/background/login.svg";

const Register = () => {
  const { roles } = useParams();
  console.log("roles", roles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { messageError, hasError, isSuccessRegister, data } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccessRegister) {
      navigate("/register/success");
    }
  }, [isSuccessRegister, navigate]);

  const onSubmit = (data) => {
    try {
      data["roles"] = roles;
      dispatch(handleRegister(data));
    } catch (err) {
      console.error("masuk error");
    }
  };

  // calling useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      {/* {messageError ? (
        400 <= messageError.statusCode <= 499 ? (
          // true
          <div>{messageError.message}</div>
        ) : // false
        messageError.statusCode === 500 ? (
          <div>
            {" "}
            <p>
              Saat ini server sedang maintenance, coba lagi dalam beberapa saat
            </p>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )} */}

      {/* {messageError ? messageError.message : ""} */}

      <div className="h-screen grid grid-cols-1 sm:grid-cols-2 font-inter">
        {/* Background */}
        <div className="bg-primary justify-center items-center hidden  md:flex">
          <div className="flex sm:w-2/3  items-center  justify-center">
            <img src={BackgroundAuth} className="" alt="" />
          </div>
        </div>

        {/* Form */}
        <div className=" flex flex-col  justify-around bg-slate-100 ">
          <div className="max-w-[400px] w-full mx-auto sm:pb-4 pt-3 flex justify-center items-center">
            <img
              className="w-20 h-20 bg-primary p-2 rounded-full"
              src={LogoAmana}
              alt="Rounded avatar"
            />
          </div>
          <form
            className="max-w-[400px] w-full mx-auto bg-gray-50 p-6 px-8 shadow rounded-2xl "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <p className="font-sans text-2xl font-medium pb-3 text-slate-900 ">
                Daftar sebagai {toTitleCase("roles")}
              </p>
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
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

            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-[#146C94] "
              >
                Daftar
              </Button>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="pr-1 text-xs text-right text-grey">
                  Sudah punya akun?
                </p>
                <Link
                  className="text-xs text-primary hover:text-[#146C94]"
                  to="/login"
                >
                  Masuk
                </Link>
              </div>
              <p className="p-2 text-xs text-right text-grey hover:text-[#146C94]">
                <Link to="/reset-password">Lupa Password?</Link>
              </p>
            </div>
          </form>
          <div className="text-center text-sm text-[#959292] pt-7">
            <p className="">
              © AMANAH Fintech Syariah 2023. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
