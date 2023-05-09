import React from "react";
import Background from "../../assets/background.png";
import { Label, TextInput, Button, Select } from "flowbite-react";
import { handleRegister } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toTitleCase } from "../../utils/Format";
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
      <div>
        {/* Background */}
        <div
          className="fixed inset-0"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
        {/* Content */}
        <div className="relative">
          <div className="flex justify-center items-center h-screen">
            <div className="block max-w-sm lg:w-1/3 px-8 py-6 bg-white  border-gray-200 rounded-lg">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-90">
                LOGO
              </h5>
              <p className="font-normal text-2xl text-gray-70">
                Daftar sebagai {toTitleCase(roles)}
              </p>

              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
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
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
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
                {/* <div className="mb-2">
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
                </div> */}
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
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
                <div className="mb-2">
                  <Label
                    className="block text-gray-700 text-sm font-medium mb-1"
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
                <Button type="submit" className="w-full" color={"purple"}>
                  Daftar
                </Button>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <p className="pr-1 text-xs text-right text-grey">
                      Sudah punya akun?
                    </p>
                    <Link
                      className="text-xs text-blue-700 hover:text-blue-800"
                      to="/login"
                    >
                      Masuk
                    </Link>
                  </div>
                  <p className="p-2 text-xs text-right text-grey hover:text-gray-700">
                    <Link to="/reset-password">Lupa Password?</Link>
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

export default Register4;
