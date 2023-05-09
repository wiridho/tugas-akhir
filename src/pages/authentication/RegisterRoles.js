import React from "react";
import { Link } from "react-router-dom";
import Lender from "../../assets/lender2.png";
import Borrower from "../../assets/borrower2.png";

const Register2 = () => {
  return (
    <div className="relative font-sans md:min-h-screen bg-slate-100 ">
      <div className="container mx-auto p-4 md:p-1">
        {/* Header */}
        <div className=" text-center pt-5">
          <h1 className="text-3xl font-semibold mb-3 text-[#013c50]">LOGO</h1>
          <p className="text-3xl text-[#013c50]">
            Cara Syariah yang Aman.
            <br />
            Memberi Pendanaan dan Mendapatkan Pembiayaan.
          </p>
        </div>
        {/* End Header */}

        {/* Content */}
        <div className=" pt-6 text-center">
          <h1 className="mb-2 mt-0 text-lg font-medium  text-[#013c50]">
            Pilih jenis akun kamu
          </h1>
          <p className="text-sm text-grey mb-4">
            Pengguna hanya bisa memiliki satu jenis akun
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className=" bg-white w-[220px] p-[30px] md:flex justify-center shadow-md rounded-lg">
              <Link
                to={{
                  pathname: "/register/lender",
                  roles: "lender",
                }}
              >
                <img src={Lender} className="" alt="Lender_img" />
                <h1 className="text-lg text-[#33658A]">Pemberi Dana</h1>
                <p className="text-[#8b959e] md:text-xs">
                  Gabung sebagai <br /> pemberi Pembiayaan
                </p>
              </Link>
            </div>
            <div className=" bg-white w-[220px] p-[30px] md:flex justify-center shadow-md rounded-lg">
              <Link
                to={{
                  pathname: "/register/borrower",
                  roles: "borrower",
                }}
              >
                <img src={Borrower} className="" alt="Lender_img" />
                <h1 className="text-lg text-[#33658A] ">Penerima Dana</h1>
                <p className="text-[#8b959e] md:text-xs">
                  Gabung sebagai <br /> pemerima Pembiayaan
                </p>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[#9cb3c4] text-xs mt-3">
              Sudah memiliki akun?{" "}
              <Link to="#">
                <span className="text-[#007BFF] hover:text-[#3495fccc]">
                  {" "}
                  Masuk
                </span>
              </Link>
            </p>
          </div>
        </div>
        {/* End Content */}

        {/* Footer */}
        <div className=" text-center text-sm md:container md:mx-auto md:absolute md:left-0 md:right-0 md:bottom-0">
          <footer className="">
            <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center sm:flex sm:flex-row md:flex">
                <Link to="#">P2P LENDING SHARIA 2023™. </Link>
                <p> All Rights Reserved</p>
              </span>
              <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 text-center">
                <li>
                  <Link to={"#"} className="mr-4 hover:underline md:mr-6 ">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link to={"#"} className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        {/* End Footer */}
      </div>
    </div>
  );
};

export default Register2;
