import React from "react";
import { ATSBreakdown } from "../../types/resume";

interface Props {
  score: number;
  breakdown?: ATSBreakdown;
}

const bands = [
  { max: 40, color: "bg-red-500", label: "Poor" },
  { max: 60, color: "bg-yellow-400", label: "Fair" },
  { max: 80, color: "bg-blue-400", label: "Good" },
  { max: 101, color: "bg-emerald-400", label: "Excellent" },
];

export function ATSScoreGauge({ score, breakdown }: Props) {
  const band = bands.find(b => score < b.max) || bands[0];
  return (
    <div className="bg-[#0f172a] border border-cyan-500/20 rounded-2xl p-5 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">ATS Compatibility</p>
          <p className="text-sm text-gray-400">Deterministic scoring model</p>
        </div>
        <div className="text-4xl font-semibold text-cyan-300 drop-shadow-[0_0_20px_#22d3ee]">{score.toFixed(1)}</div>
      </div>
      <div className="relative w-full h-3 rounded-full bg-gray-800 overflow-hidden">
        <div
          className={`h-3 transition-all duration-700 ease-out ${band.color}`}
          style={{ width: `${Math.min(100, score)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-3">
        {bands.map(b => (
          <span key={b.label}>{b.label}</span>
        ))}
      </div>

      {breakdown && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5 text-xs text-gray-300">
          {Object.entries(breakdown).map(([key, value]) => (
            <div key={key} className="bg-white/5 rounded-lg p-3">
              <div className="text-[10px] uppercase text-gray-500 tracking-wide">{key.replace(/([A-Z])/g, " $1")}</div>
              <div className="text-base font-semibold text-white">{value.toFixed(1)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

