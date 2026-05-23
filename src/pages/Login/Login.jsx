import React, { useState } from "react";
import img from "../../assets/FOOTER-LOGO_IMG-1727781679723.png";
import useForm from "../../hooks/useForm";
import useAuthStore from "../../app/store/useAuthStore";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const login = useAuthStore((state) => state.login);

  const handleSubmit = () => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    const token = "fake jwt token";
    login(userData, token);
  };

  return (
    <>
    <Helmet>
      <title>Log in | Ulta Prod Web</title>
    </Helmet>
    <main className="flex flex-col items-center min-h-screen gap-3 py-3 px-4">
      <img src={img} alt="logo" className="w-20 lg:w-25 h-12 lg:h-16" />

      <div className="flex flex-col items-start gap-2 w-full max-w-[350px]">
        <span className="text-[24px] leading-[28px] text-[#2d333a] font-medium">
          Sign in
        </span>

        <p className="text-[14px] leading-[20px] text-[#6e6e6e] font-normal">
          Stay signed in and set up two-step authentication for an extra layer
          of security — you’ll verify your mobile number or email on the next
          screen.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col items-start gap-3 w-full"
        >
          <label className="w-full flex flex-col gap-1 text-[14px]">
            Email address*
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full outline-none p-2 focus:outline-black border border-[#333]"
            />
          </label>

          <label className="w-full flex flex-col gap-1 text-[14px]">
            Password*
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                className="w-full outline-none p-2 pr-10 focus:outline-black border border-[#333]"
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 -translate-y-1/2 z-20 cursor-pointer text-gray-500 hover:text-black"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          <button
            type="submit"
            className="w-full bg-black text-[16px] leading-[16px] cursor-pointer text-white rounded-full py-4"
          >
            Sign in
          </button>
        </form>
      </div>

      <div className="flex flex-col items-start w-full max-w-[350px] gap-2 mt-3">
        <span className="font-medium text-[24px] leading-[28px] text-[#000]">
          New here?
        </span>
        <p className="text-[14px] leading-[20px] text-[#6e6e6e] font-normal">
          Create an account in a few easy clicks. Rewards are waiting!
        </p>
        <button
          className="w-full text-[14px] leading-[21px] bg-white text-black py-3 border border-black hover:border-transparent cursor-pointer hover:text-white hover:bg-black transition-all duration-150 rounded-full"
          onClick={() => navigate("/signup")}
        >
          Create account
        </button>
      </div>
      <div className="flex flex-col items-start text-[16px] leading-[20px] text-[#000] font-normal gap-4 w-full mt-2 max-w-[350px]">
        <p>Unlock $5 off* just for joining</p>
        <p>Birthday Perks</p>
        <p>Points = $ off purchases at Ulta Beauty</p>
      </div>
    </main>
    </>
  );
};

export default Login;
