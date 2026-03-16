import React from "react";

export default function Protocols() {
  const steps = [
    {
      title: "AI Interview Simulation",
      desc: "Start a realistic AI-powered interview session designed to mimic real technical interviews."
    },
    {
      title: "Live Coding Evaluation",
      desc: "Solve coding problems in the integrated IDE with real-time code analysis."
    },
    {
      title: "Behavioral Analysis",
      desc: "AI analyzes speech patterns, hesitation, and confidence levels."
    },
    {
      title: "Performance Insights",
      desc: "Receive detailed feedback including strengths, weaknesses, and improvement tips."
    }
  ];

  return (
    <div className="min-h-screen bg-[#05080F] text-white px-8 py-24">

      <h1 className="text-5xl font-bold text-center mb-16 text-cyan-400">
        Interview Protocols
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-[#0C0F18] p-8 rounded-xl border border-white/10
            hover:border-cyan-400 hover:shadow-[0_0_20px_#00eaff]
            transition"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {i + 1}. {step.title}
            </h2>

            <p className="text-gray-400">
              {step.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}