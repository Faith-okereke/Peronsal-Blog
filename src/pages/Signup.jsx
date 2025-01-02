import React from "react";

export const Signup = () => {
  return (
    <div>
      <form className="bg-white rounded-lg px-5 pt-2 pb-5 flex flex-col items-start justify-normal">
        <h1 className="text-lg font-bold text-center w-full">
          Create a new account
        </h1>
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
        <div className="flex flex-col gap-1">
          <label className="" htmlFor="username">
            Username
          </label>
          <input
            className="border-b-2 border-gray-600  p-2 outline-none"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="password">Password</label>
          <input
            className="border-b-2 border-gray-600 p-2 outline-none"
            type="password"
            required
          />
        </div>
        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="password">Confirm Password</label>
          <input
            className="border-b-2 border-gray-600 p-2 outline-none"
            type="password"
            required
          />
        </div>
        <div className="flex justify-center items-center w-full pt-7">
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg border-transparent border-2 text-center w-full hover:bg-white hover:border-primary hover:text-primary transition-transform"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
