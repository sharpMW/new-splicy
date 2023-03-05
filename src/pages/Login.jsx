import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button"

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordType, setPasswordType] = useState()
  const handleSubmit = ()=>{

  }
  const togglePassword = (e)=>{
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");

  }
  const oAuth = ()=>{

  }
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="visible col-span-1 sm:col-span-2 mt-7">
          <div className="px-3 sm:py-5 sm:px-16 lg:py-7.5 lg:py-10 lg:px-48">
            <h1 className="font-bold text-center text-3xl pb-10 font-heading text-2xl">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col py-2 w-full">
                <label className="font-semibold py-2">Email</label>
                <input
                  autoComplete="on"
                  required
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="focus:outline-none border-2 text-black rounded py-3 px-4"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className=" font-semibold py-2">Password</label>
                <div className="flex flex-row border-2 rounded">
                  <input
                    className=" focus:outline-none px-4 py-3 w-full text-black"
                    type={passwordType}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div onClick={togglePassword} className="cursor-pointer">
                    {passwordType === "password" ? (
                      <img className="py-4 px-2" src="/fi_eye.svg" alt="Eye Icon" />
                    ) : (
                      <img
                        className="py-4 px-2"
                        src="/fi_eye-off.svg"
                        alt="Open Eye Icon"
                      />
                    )}
                  </div>
                </div>
              </div>
            </form>
            <div className="pt-8 pb-1 text-center ">
              <button
                className="bg-white text-black w-full font-bold mx-auto py-3 rounded "
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="w-fit text-bg-primary my-2 p-2">
              <Link to="/forgot">Forgot Password?</Link>
            </div>
            {/* <OrComponent isCaps={true} /> */}
            <div className="py-5">
              <GoogleButton style={{ width: "100%" }} onClick={oAuth} />
              <h6 className="text-sm text-grey py-2 mt-2">
                Don't have an account?
                <Link
                  to="/signup"
                  className="pl-2 text-bg-primary"
                >
                  Sign-Up
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login