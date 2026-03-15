import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", email);
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Login Card */}
      <div className="relative backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-10 w-[420px] text-white">

        <h1 className="text-3xl font-bold text-center mb-8 tracking-wide">
          LOGIN
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <a className="hover:underline cursor-pointer">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center mt-6 text-sm">
            Don’t have an Account?{" "}
            <Link to="/register" className="font-semibold hover:underline">
              Register
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}