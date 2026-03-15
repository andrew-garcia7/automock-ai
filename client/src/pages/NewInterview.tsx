import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewInterview() {

  const navigate = useNavigate();

  const [category, setCategory] = useState("technical");
  const [level, setLevel] = useState("junior");
  const [duration, setDuration] = useState(15);
  const [resume, setResume] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const startInterview = async () => {

    if (loading) return;

    setLoading(true);

    try {

      const form = new FormData();

      form.append("userId", "1");
      form.append("category", category);
      form.append("level", level);
      form.append("duration", String(duration));
      form.append("count", "4");

      if (resume) {
        form.append("resume", resume);
      }

      const res = await axios.post(
        "http://localhost:4000/interview/start",
        form,
        { timeout: 60000 }
      );

      if (res.data?.success) {

        const questions = res.data.questions || [];
        const interviewId = res.data.interviewId;

        try {
          localStorage.setItem(
            `interview_${interviewId}_questions`,
            JSON.stringify(questions)
          );
        } catch {}

        navigate(`/room/${interviewId}`, {
          state: { questions, interviewId }
        });

      } else {

        alert("Could not start interview");

      }

    } catch (err:any) {

      const msg =
        err?.response?.data?.error ||
        err?.message ||
        "Unknown error";

      alert("Start failed: " + msg);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="min-h-screen pt-28 pb-28 flex justify-center items-start text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,8,15,0.85), rgba(5,8,15,0.9)), url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >

      {/* Glass Card */}
      <div className="relative w-full max-w-3xl p-1 rounded-[30px] shadow-[0_0_40px_#00eaff66] bg-gradient-to-br from-[#00eaff33] to-[#0066ff33]">

        <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-10 shadow-[0_0_60px_rgba(0,255,255,0.15)]">

          {/* TITLE */}
          <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 drop-shadow-[0_0_20px_#00eaff]">
            Initialize Simulation
          </h1>

          <p className="text-gray-300 mb-10">
            Configure your interview parameters. The AI will adapt questions
            in real-time based on your performance.
          </p>

          {/* CATEGORY */}
          <label className="text-gray-300 text-sm">
            Category
          </label>

          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className="w-full p-3 mt-2 bg-black/40 rounded-xl text-white border border-white/10 backdrop-blur-md"
          >
            <option value="technical">Technical</option>
            <option value="hr">HR</option>
            <option value="system-design">System Design</option>
            <option value="behavioral">Behavioral</option>
            <option value="dsa">DSA + Coding</option>
          </select>

          {/* LEVEL */}
          <label className="text-gray-300 text-sm mt-6 block">
            Level
          </label>

          <select
            value={level}
            onChange={(e)=>setLevel(e.target.value)}
            className="w-full p-3 mt-2 bg-black/40 rounded-xl text-white border border-white/10 backdrop-blur-md"
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
            onChange={(e)=>setDuration(Number(e.target.value))}
            className="w-full p-3 mt-2 bg-black/40 rounded-xl text-white border border-white/10 backdrop-blur-md"
          >
            <option value={10}>10 Minutes</option>
            <option value={15}>15 Minutes</option>
            <option value={20}>20 Minutes</option>
            <option value={30}>30 Minutes</option>
          </select>

          {/* RESUME */}
          <label className="text-gray-300 text-sm mt-6 block">
            Upload Resume
          </label>

          <input
            type="file"
            accept=".pdf,.docx,.doc,.txt"
            onChange={(e)=>
              setResume(
                e.target.files ? e.target.files[0] : null
              )
            }
            className="w-full p-3 mt-2 bg-black/40 rounded-xl text-gray-300 border border-white/10"
          />

          {/* BUTTON */}
          <button
            onClick={startInterview}
            disabled={loading}
            className={`mt-10 w-full py-4 ${
              loading ? "bg-gray-400" : "bg-cyan-400"
            } text-black font-bold rounded-xl text-lg shadow-[0_0_40px_#00eaff] hover:scale-105 transition`}
          >
            {loading ? "Starting..." : "Start Simulation →"}
          </button>

        </div>

      </div>

    </div>

  );

}