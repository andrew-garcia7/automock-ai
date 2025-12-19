import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewInterview() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("technical");
  const [level, setLevel] = useState("junior"); // backend expects `level`
  const [duration, setDuration] = useState(15); // number
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const startInterview = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const form = new FormData();
      form.append("userId", "1"); // string ok
      form.append("category", category);
      form.append("level", level); // must match backend's field name
      form.append("duration", String(duration));
      form.append("count", "4"); // optional — how many questions to generate

      if (resume) {
        form.append("resume", resume);
      }

      // DEBUG: what we are sending
      console.log("Starting interview — payload:", {
        category,
        level,
        duration,
        resumeName: resume ? resume.name : null,
      });

      // Let axios set Content-Type and boundary
      const res = await axios.post("http://localhost:4000/interview/start", form, {
        timeout: 60000,
      });

      console.log("Start response:", res.data);

      if (res.data?.success) {
        const questions = res.data.questions || [];
        const interviewId = res.data.interviewId;

        // Save questions to localStorage as fallback (so refresh won't lose them)
        try {
          localStorage.setItem(`interview_${interviewId}_questions`, JSON.stringify(questions));
        } catch (e) {
          console.warn("Could not save questions to localStorage:", e);
        }

        // Navigate to interview room and pass questions in state (primary path)
        navigate(`/room/${interviewId}`, {
          state: { questions, interviewId },
        });
      } else {
        console.error("Backend returned failure on start:", res.data);
        alert("Could not start interview: " + (res.data?.error || JSON.stringify(res.data)));
      }
    } catch (err) {
      console.error("Start Interview failed:", err);
      const msg = err?.response?.data?.error || err?.message || "Unknown error";
      alert("Start failed: " + msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen pt-28 pb-28 flex justify-center items-start 
      bg-gradient-to-b from-[#020617] via-[#03101f] to-[#020617]"
    >
      {/* 💠 Glowing wrapper */}
      <div
        className="relative w-full max-w-3xl p-1 rounded-[30px] 
        shadow-[0_0_40px_#00eaff66] bg-gradient-to-br 
        from-[#00eaff33] to-[#0066ff33]"
      >
        {/* Glass Card */}
        <div className="w-full bg-black/40 backdrop-blur-2xl rounded-[30px] p-10">
          <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-xl">
            Initialize Simulation
          </h1>

          <p className="text-gray-300 mb-10">
            Configure your interview parameters. The AI (or fallback generator) will adapt questions in real-time based on your performance.
          </p>

          {/* CATEGORY */}
          <label className="text-gray-300 text-sm">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 mt-2 bg-black/40 rounded-xl text-white border border-white/10"
          >
            <option value="technical">Technical</option>
            <option value="hr">HR</option>
            <option value="system-design">System Design</option>
            <option value="behavioral">Behavioral</option>
            <option value="dsa">DSA + Coding</option>
          </select>

          {/* LEVEL */}
          <label className="text-gray-300 text-sm mt-6 block">Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-3 mt-2 bg-black/40 rounded-xl text-white border border-white/10"
          >
            <option value="junior">Junior</option>
            <option value="medium">Medium</option>
            <option value="senior">Senior</option>
            <option value="expert">Expert</option>
          </select>

          {/* DURATION */}
          <label className="text-gray-300 text-sm mt-6 block">
            Duration (Minutes)
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full p-3 mt-2 bg-black/40 rounded-xl text-white border border-white/10"
          >
            <option value={10}>10 Minutes</option>
            <option value={15}>15 Minutes</option>
            <option value={20}>20 Minutes</option>
            <option value={30}>30 Minutes</option>
          </select>

          {/* RESUME */}
          <label className="text-gray-300 text-sm mt-6 block">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.docx,.doc,.txt"
            onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
            className="w-full p-3 mt-2 bg-black/40 rounded-xl text-gray-300 border border-white/10"
          />

          {/* BUTTON */}
          <button
            onClick={startInterview}
            disabled={loading}
            className={`mt-10 w-full py-4 ${loading ? "bg-gray-400" : "bg-cyan-400"} text-black font-bold 
            rounded-xl text-lg shadow-[0_0_30px_#00eaff] hover:bg-white transition`}
          >
            {loading ? "Starting..." : "Start Simulation →"}
          </button>
        </div>
      </div>
    </div>
  );
}
