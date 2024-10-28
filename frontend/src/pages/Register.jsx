import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/login");
        } else {
          console.log("Registration failed");
        }
      })
      .catch((err) => {
        console.log("Error during registration: ", err);
      });
  };
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-gray-900 h-[350px] w-[400px] gap-5 p-5"
      >
        <span className="text-white text-center font-extrabold text-2xl mb-3">
          Register
        </span>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-white font-semibold">
            User
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
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
            placeholder="Enter password"
            className="bg-gray-300 px-2 text-black"
          />
        </div>
        <Link to="/login" className="text-green-500 hover:underline">
          Already have an account?{" "}
        </Link>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-1 hover:bg-green-600 "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
