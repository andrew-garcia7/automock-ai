import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e:any)=>{
    e.preventDefault();

    const user = {name,email,password};

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/login");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')"
      }}
    >

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-10 w-[420px] text-white">

        <h1 className="text-3xl font-bold text-center mb-8">
          REGISTER
        </h1>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 mb-6 placeholder-white"
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 mb-6 placeholder-white"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 mb-6 placeholder-white"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold hover:underline">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}