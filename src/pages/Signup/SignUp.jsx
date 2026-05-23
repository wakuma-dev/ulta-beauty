import React, {useState} from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from '../../assets/FOOTER-LOGO_IMG-1727781679723.png'
import { Helmet } from 'react-helmet-async'
import useForm from "../../hooks/useForm";
import useAuthStore from "../../app/store/useAuthStore";
import { useNavigate  } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const signup = useAuthStore((state) => state.signup);
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phonenumber: ""
  });
  const handleSubmit = () => {
    const userData = {
      email: values.email,
      password: values.password,
      firstname: values.firstname,
      lastname: values.lastname,
      phonenumber: values.phonenumber
    };
    const token = "fake jwt token";
    signup(userData, token);
  }
  return (
    <>
      <Helmet>
        <title>Sign up | Ulta Prod Web</title>
      </Helmet>
      <main className="flex flex-col items-center gap-3 px-4 py-3 h-screen lg:min-h-screen">
        <img src={img} alt="logo" className="w-20 lg:w-25 h-12 lg:h-16" />
        <div className="flex flex-col items-start w-full max-w-[350px]">
          <span className="text-[24px] leading-[28px] font-medium text-[#1e212a]">
            Create an account
          </span>
          <p className="text-[14px] text-[#6e6e6e] leading-[21px] font-normal">
            Start racking up points, redeeming rewards and saving your faves!
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault(e);
            handleSubmit();
          }}
          className="flex flex-col items-start w-full gap-2 max-w-[350px] mt-4"
        >
          <p className="text-[12px] leading-[16px] font-normal text-[#000]">
            *Indicates a required field
          </p>
          <label className="w-full flex flex-col gap-1 text-[14px]">
            First name
            <input
              type="text"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              className="w-full outline-none p-2 focus:outline-black border border-[#333]"
            />
          </label>
          <label className="w-full flex flex-col gap-1 text-[14px]">
            Last name
            <input
              type="text"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              className="w-full outline-none p-2 focus:outline-black border border-[#333]"
            />
          </label>
          <label className="w-full flex flex-col gap-1 text-[14px]">
            Mobile number
            <input
              type="tel"
              name="phonenumber"
              value={values.phonenumber}
              onChange={handleChange}
              className="w-full outline-none p-2 focus:outline-black border border-[#333]"
            />
            <p className="text-[12px] leading-[16px] font-normal text-[#6e6e6e]">
              Used to look up your rewards and enhance login security.
            </p>
          </label>
          <label className="w-full flex flex-col gap-1 text-[14px]">
            Email address
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full outline-none p-2 focus:outline-black border border-[#333]"
            />
          </label>
          <label className="w-full flex flex-col gap-1 text-[14px]">
            Password
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                className="outline-none w-full p-2 focus:outline-black border border-[#333]"
              />
              <button
                className="absolute top-1/2 -translate-y-1/2 right-4 z-20 cursor-pointer text-gray-500 hover:text-black"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-[16px] leading-[16px] font-normal text-[#6e6e6e]">
              Keep me signed in
            </p>
          </div>
          <p className='text-[12px] leading-[16px] font-normal text-[#6e6e6e]'>
            For your security, two-step authentication is required. Verify your
            mobile number on the next screen.
          </p>
          <button className="w-full text-[14px] leading-[14px] bg-black text-white p-3 rounded-full"
           onClick={() => navigate("/login")}
          >Create account</button>
          <p className="text-[12px] leading-[16px] font-normal text-[#6e6e6e] mt-3">
            *Email opt-in required in order to receive welcome offer; offer will
            be delivered via email. By entering my phone number, I agree to
            receive recurring automated marketing messages from Ulta Beauty on
            my mobile phone. Consent is not a condition of purchase. Reply STOP
            to cancel or HELP for help to 95637. Customer Service: 866-983-8582.
            Standard message and data rates may apply. View Mobile Terms &
            Conditions and Privacy Policy for details.
          </p>
        </form>
      </main>
    </>
  );
}

export default SignUp