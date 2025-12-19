import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-[#020617] text-white min-h-screen">

      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10">

          {/* Animated AutoMock Brand */}
          <h2 className="text-3xl font-extrabold tracking-wide select-none">
            <span className="animate-gradient">Auto</span>
            <span className="animate-gradient">Mock</span>
            <span className="text-gray-200">.AI</span>
          </h2>

          {/* Navigation Links */}
          <div className="flex gap-10 text-gray-300 text-lg">
            {[
              ["Home", "/"],
              ["New Interview", "/new"],
              ["Coding", "/coding"],
              ["Resume", "/resume"],
              ["History", "/history"],
            ].map(([label, link]) => (
              <Link
                key={label}
                to={link}
                className="relative group hover:text-cyan-400 transition select-none"
              >
                {label}

                {/* Hover underline animation */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 
                  transition-all duration-300 group-hover:w-full"
                ></span>
              </Link>
            ))}
          </div>

        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="pt-24">
        <Outlet />
      </div>

    </div>
  );
}
