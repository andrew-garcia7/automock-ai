import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-10 py-6 flex items-center justify-between border-b border-[#0c2a33]">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-md bg-cyan-400 shadow-[0_0_20px_#00eaff]" />
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          <span className="text-cyan-400">AutoMock</span>.AI
        </h1>
      </div>

      <div className="flex items-center gap-8 text-gray-300 text-sm">
        <Link to="/" className="hover:text-cyan-400 transition">
          Home
        </Link>
        <Link to="/new" className="hover:text-cyan-400 transition">
          New Interview
        </Link>
        <Link to="/coding" className="hover:text-cyan-400 transition">
          Coding
        </Link>
        <Link to="/resume" className="hover:text-cyan-400 transition">
          Resume ATS
        </Link>
        <Link to="/history" className="hover:text-cyan-400 transition">
          History
        </Link>
      </div>
    </nav>
  );
}
