import bgImage from "../assets/bg-ai.jpg.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

export default function Landing() {
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(cards, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
    });
  }, []);

  return (
    <div
  className="min-h-screen w-full relative overflow-x-hidden text-white"
  style={{
    backgroundImage: `linear-gradient(rgba(5,8,15,0.75), rgba(5,8,15,0.85)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}
>

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,199,255,0.15),transparent_70%)] pointer-events-none"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,255,180,0.08),transparent_70%)] pointer-events-none"></div>

  {/* MAIN CONTENT */}
  <div className="pt-48">

        {/* STATUS */}
        <div className="w-full flex justify-center mb-16 animate-pulse">
          <div className="px-8 py-3 border border-cyan-400 rounded-full bg-[rgba(0,255,255,0.05)] shadow-[0_0_25px_#00e5ff]">
            SYSTEM STATUS: ONLINE // v2.0.45
          </div>
        </div>

        {/* HERO */}
        
<div className="flex flex-col items-center text-center px-4">

  <h1 className="text-7xl font-extrabold leading-tight">

    <span className="text-white">
      Welcome to
    </span>

    <br />

    <span className="ai-title">
      AutoMock AI
    </span>

  </h1>

  <p className="text-gray-400 max-w-3xl mt-8 text-xl ai-subtitle">
    Practice AI-powered mock interviews with real-time coding evaluation,
    behavioral analysis, and performance insights designed to help you
    crack top tech company interviews.
  </p>

 <div className="flex gap-6 mt-12">

  <Link
    to="/new"
    className="px-10 py-4 bg-cyan-500 text-black font-bold text-lg rounded-lg 
    hover:bg-cyan-400 shadow-[0_0_40px_#00eaff] transition transform hover:scale-105"
  >
    START SIMULATION →
  </Link>

  <Link
    to="/protocols"
    className="px-10 py-4 border border-gray-500 text-gray-300 text-lg rounded-lg 
    hover:border-cyan-400 hover:text-cyan-400 transition"
  >
    VIEW PROTOCOLS
  </Link>

  <Link
    to="/login"
    className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg
    hover:bg-cyan-500 hover:text-black transition"
  >
    LOGIN
  </Link>

</div>

</div>
        {/* STATS */}
        <div className="grid grid-cols-4 gap-8 mt-32 mx-auto max-w-6xl text-center text-white">
          {[["24,901","ACTIVE NODES"], ["1.2M+","SIMULATIONS RUN"], ["94.2%","SUCCESS RATE"], ["<12ms","LATENCY"]]
            .map(([value,label],i) => (
              <div key={i} className="transform transition-all hover:scale-110">
                <h2 className="text-4xl font-extrabold text-white neon-glow">{value}</h2>
                <div className="text-gray-400 text-base mt-2">{label}</div>
              </div>
            ))}
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-3 gap-10 mt-32 max-w-7xl mx-auto px-10">
          {[{ title:"Live Code Execution", desc:"Integrated IDE supporting 20+ languages with real-time analysis.", icon:"💻"},
            {title:"Biometric Feedback", desc:"AI detects hesitation, vocal patterns, & confidence levels.", icon:"📹"},
            {title:"System Design", desc:"Collaborative diagrams for distributed systems interviews.", icon:"🛡️"}
          ].map((card,i)=>(
            <div key={i}
              className="tilt-card bg-[#0C0F18] p-10 rounded-2xl border border-white/10 
              hover:border-cyan-400 hover:shadow-[0_0_30px_#00eaff] transition-all cursor-pointer"
            >
              <div className="text-5xl mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-32 py-10 border-t border-white/10 text-center text-gray-400 relative">
          <div className="flex justify-center gap-6 text-2xl mb-4">
            <span className="hover:text-cyan-400 cursor-pointer">💼</span>
            <span className="hover:text-cyan-400 cursor-pointer">💬</span>
            <span className="hover:text-cyan-400 cursor-pointer">⚙️</span>
          </div>

          <p>© 2025 <span className="text-cyan-400">AutoMock.AI</span> — All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
