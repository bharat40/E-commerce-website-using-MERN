import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <form className="flex flex-col bg-gray-900 h-[350px] w-[400px] gap-5 p-5">
        <span className="text-white text-center font-extrabold text-2xl mb-3">
          Login
        </span>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-white font-semibold">
            User
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="bg-gray-300 px-2 text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-white font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="bg-gray-300 px-2 text-black"
          />
        </div>
        <Link to="/register" className="text-green-500 hover:underline">
          New here?
        </Link>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-1 hover:bg-green-600 "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
