import React from "react";
import { InsightGroup } from "../../types/resume";

interface Props {
  insights: InsightGroup[];
}

const severityColors: Record<string, string> = {
  high: "border-red-500/60 bg-red-500/10 text-red-100",
  medium: "border-amber-400/60 bg-amber-400/10 text-amber-50",
  low: "border-blue-400/60 bg-blue-400/10 text-blue-50",
};

export function InsightPanel({ insights }: Props) {
  if (!insights || insights.length === 0) return null;
  return (
    <div className="bg-[#0f172a] rounded-2xl border border-white/5 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">ATS Insights</h3>
        <span className="text-xs text-gray-400">Evidence-based suggestions</span>
      </div>
      <div className="space-y-3">
        {insights.map(group => (
          <div key={group.title} className={`rounded-xl p-4 border ${severityColors[group.severity] || severityColors.low}`}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">{group.title}</p>
              <span className="text-[10px] uppercase tracking-wide opacity-70">{group.severity}</span>
            </div>
            <ul className="text-sm space-y-2 text-white">
              {group.items.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-cyan-300 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

