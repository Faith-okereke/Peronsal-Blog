import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Signup } from "./Signup";
import BlogBg from "../assets/FormBg.jpg";

export default function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex h-full w-full overflow-hidden">
        <div
          style={{
            background: `url(${BlogBg}) no-repeat center center / cover, #C4D8E2`,
          }}
          className="w-[60%] max-h-screen bg-blend-multiply"
        />

        <div className="px-10 pt-10 ">
          <div className="flex gap-1 justify-center">
            <div
              className={`rounded-full px-3 py-1 text-xs cursor-pointer  ${
                login ? `bg-off-white` : `bg-primary text-white z-10 -mr-4`
              }`}
              onClick={() => {
                setLogin(false);
              }}
            >
              Sign up
            </div>
            <div
              className={`rounded-full px-4 py-1 text-xs cursor-pointer ${
                login ? `bg-secondary text-white -ml-4 z-10` : `bg-off-white`
              }`}
              onClick={() => {
                setLogin(true);
              }}
            >
              Login
            </div>
          </div>
          {login ? (
            <form
              className="bg-white rounded-lg p-5 flex flex-col items-start justify-normal"
              action=""
            >
              <h3 className="text-lg font-bold text-center w-full">
                Login to existing account
              </h3>
              <div className="flex flex-col gap-1">
                <label className="" htmlFor="email">
                  Email address
                </label>
                <input
                  className="border-b-2 border-gray-600  p-2 outline-none"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 py-2">
                <label className="" htmlFor="password">
                  Password
                </label>
                <input
                  className="border-b-2 border-gray-600 p-2 outline-none"
                  type="password"
                  required
                />
              </div>
              <a className="text-sm text-right w-full" href="/password-reset">
                Forgot password?
              </a>
              <div className="flex justify-center items-center w-full pt-7">
                <button
                  className="px-4 py-2 bg-secondary text-white rounded-lg border-transparent border-2 text-center w-full hover:bg-white hover:border-secondary hover:text-secondary transition-colors"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="flex flex-col justify-center items-center text-center w-full">
                <p className="font-bold text-xl py-2">OR</p>
                <p className="capitalize">Sign in with</p>
                <div className="flex justify-center items-center gap-2">
                  <FcGoogle className="cursor-pointer w-10 h-10" />
                  <FaApple className="cursor-pointer w-10 h-10" />
                  <FaFacebook className="cursor-pointer w-9 h-9" />
                </div>
              </div>
            </form>
          ) : (
            <Signup />
          )}
        </div>
      </div>
    </div>
  );
}