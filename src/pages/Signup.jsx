import React,{useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import GoogleButton from "react-google-button";


const Signup = () => {
  const [userDetails, setUserDetails] = useState()
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
  const [passwordType, setPasswordType] = useState("password");

  return (
    <div className="max-w-4xl mx-auto">
    <div className="visible col-span-1 sm:col-span-2 mt-7">
      <div className="flex h-full items-center  w-full">
        <div className="px-3 sm:py-2 sm:px-16 lg:py-3.5 lg:px-24  w-full">
          <h1 className="font-bold text-center text-3xl pb-5">Sign-Up</h1>
          <GoogleButton style={{ width: "100%" }} onClick={oAuth} />
          <div className="my-4">
            {/* <OrComponent isCaps={true} /> */}
          </div>
          <form>
            <div className="flex flex-col py-2 w-full">
              <label className="font-semibold py-1">Name</label>
              <input
                className="focus:outline-none border-2 rounded py-3 px-4 text-black"
                id="name"
                autoComplete="off"
                type="text"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col py-2 w-full">
              <label className="font-semibold py-1">Email</label>
              <input
                autoComplete="false"
                className="focus:outline-none border-2 rounded py-3 px-4 text-black"
                id="email"
                type="email"
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value.toLocaleLowerCase(),
                  })
                }
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <label className=" font-semibold py-1">Password</label>
              <div className="flex flex-row border-2 rounded">
                <input
                  autoComplete="false"
                  className=" focus:outline-none px-4 py-3 w-full text-black"
                  type={passwordType}
                  id="password"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    })
                  }
                  required
                />
                <div className="cursor-pointer" onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <img
                      className="py-4 px-2"
                      src="/fi_eye.svg"
                      alt="Eye Icon"
                    />
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
            <Link to="/timetable">
              <button
                className="bg-white text-black w-full font-bold mx-auto py-2 rounded"
                // disabled={loading}
                onClick={handleSubmit}
              >
                Next
              </button>
            </Link>
          </div>

          <div className="py-3">
            <h6 className="text-sm text-grey py-2">
              Already have an account?
              <Link
                to="/login"
                className="pl-2 text-bg-primary"
              >
                Login
              </Link>
            </h6>
          </div>
        </div>
      </div>{" "}
    </div>
  </div>
  )
}

export default Signup