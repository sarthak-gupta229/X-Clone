import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function SignupForm() {
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.username.trim()) {
      setError("Username is required.");
      return;
    }
    if (formData.password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = signup(formData.username.trim(), formData.password);
    if (result.success) {
      navigate("/app/home");
    } else {
      setError(result.message);
    }
  }

  return (
    <div className="flex justify-evenly items-center h-screen p-16 text-white flex-wrap">
      <img
        src="/logos/x-logo.png"
        alt="X Logo"
        className="invert md:h-80 h-40"
      />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="font-extrabold text-4xl md:text-7xl">
              Happening now
            </h1>
            <h1 className="font-bold text-4xl">Join today.</h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="border-[#2f3336] border w-60 md:w-75 px-6 py-1 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <label
                htmlFor="signup-username"
                className="text-[#71767b] text-sm"
              >
                Username
              </label>
              <br />
              <input
                type="text"
                id="signup-username"
                name="username"
                className="border-0 py-1 outline-none focus:ring-0 bg-black w-full"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="border-[#2f3336] border w-60 md:w-75 px-6 py-1 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <label
                htmlFor="signup-password"
                className="text-[#71767b] text-sm"
              >
                Password
              </label>
              <br />
              <input
                type="password"
                id="signup-password"
                name="password"
                className="border-0 py-1 outline-none focus:ring-0 bg-black text-gray-400 w-full"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="border-[#2f3336] border w-60 md:w-75 px-6 py-1 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <label
                htmlFor="signup-confirm"
                className="text-[#71767b] text-sm"
              >
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                id="signup-confirm"
                name="confirmPassword"
                className="border-0 py-1 outline-none focus:ring-0 bg-black text-gray-400 w-full"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="border-[#2f3336] border px-20 py-2 rounded-xl hover:bg-white hover:text-black transition-colors"
            >
              Sign up
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-bold">Already have an account?</h1>
            <div>
              <Link
                className="border-[#2f3336] border px-20 py-2 rounded-xl"
                to="/"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
