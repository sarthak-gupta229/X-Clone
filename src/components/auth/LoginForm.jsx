import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

function LoginForm() {
  const { login, user } = useContext(UserContext);
  const navigate = useNavigate();
  const [wrong, setWrong] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    const result = login(formData.username, formData.password);

    if (result.success) {
      setWrong(false);
      navigate("/app/home");
    } else {
      setError(result.message || "Invalid username or password.");
      setWrong(true);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/app/home");
    }
  }, [user]);

  return (
    <div className="flex justify-evenly items-center h-screen p-16 text-white flex-wrap">
      <img
        src="/logos/x-logo.png"
        alt="X Logo"
        className="invert md:h-80 h-40"
      ></img>

      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-8 ">
          <div className="flex flex-col gap-3">
            <h1 className=" font-extrabold  text-4xl md:text-7xl">
              Happening now
            </h1>
            <h1 className="font-bold text-4xl">Sign in to X</h1>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" border-[#2f3336] border-1 w-60 md:w-75 px-6 py-1 focus-within:border-blue-500 focus-within:ring-1  focus-within:ring-blue-500">
              <label htmlFor="username" className="text-[#2f3336] ">
                Username
              </label>
              <br />
              <input
                type="text"
                id="username"
                className="border-0 py-1 outline-none focus:ring-0"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </div>
            <div className=" border-[#2f3336] border-1 w-60 md:w-75 px-6 py-1  focus-within:border-blue-500 focus-within:ring-1  focus-within:ring-blue-500">
              <label htmlFor="password" className="text-[#2f3336]">
                Password
              </label>
              <br />
              <input
                type="password"
                id="password"
                className="border-0 py-1 outline-none focus:ring-0 text-gray-400 bg-black"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="border-[#2f3336] border-1 px-20 py-2 rounded-xl"
            >
              Sign in
            </button>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="font-bold">Dont't have an account?</h1>
            <div>
              <Link
                className="border-[#2f3336] border-1 px-20 py-2 rounded-xl"
                to="/signup"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
