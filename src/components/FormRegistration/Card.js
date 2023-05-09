import React from "react";
import { Button } from "flowbite-react";
import OTPInput from "react-otp-input";

const Card = ({ setOtp, otp, handleSubmit }) => {
  return (
    <>
      <div>
        {/* Content */}
        <div className="relative">
          <div className="flex justify-center items-center h-screen">
            <div className="block max-w-sm md:w-1/3 	px-8 py-6 bg-white border-gray-200 rounded-lg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-90">
                LOGO
              </h5>
              <p className="text-2xl text-[#333333] py-5 font-bold ">
                Masukan kode OTP
              </p>
              <p>
                Kami telah mengirimkan kode konfirmasi ke nomor anda ke
                012332131
              </p>
              <form className="" onSubmit={handleSubmit}>
                <div>
                  <OTPInput
                    containerStyle={"flex justify-between my-6"}
                    inputStyle={
                      "!w-[50px] h-[50px] rounded-md border-none bg-purple-100"
                    }
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                <Button type="submit" className="w-full mt-2" color={"purple"}>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
