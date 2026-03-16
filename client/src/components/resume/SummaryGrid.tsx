import React from "react";
import { ResumeSummary } from "../../types/resume";

interface Props {
  summary: ResumeSummary;
  wordCount: number;
  filename?: string;
}

export function SummaryGrid({ summary, wordCount, filename }: Props) {
  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Resume Summary</p>
          <p className="text-xs text-gray-400">Parsed from your document</p>
        </div>
        <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">{filename || "Uploaded file"}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-3 text-sm">
        <InfoCard label="Name" value={summary.name || "Not detected"} />
        <InfoCard label="Email" value={summary.email || "Not detected"} />
        <InfoCard label="Phone" value={summary.phone || "Not detected"} />
        <InfoCard label="LinkedIn" value={summary.linkedin || "Not detected"} />
        <InfoCard label="GitHub" value={summary.github || "Not detected"} />
        <InfoCard label="Location" value={summary.address || "Not detected"} />
        <InfoCard label="Word Count" value={`${wordCount}`} highlight={wordCount >= 400 && wordCount <= 800} />
      </div>
    </div>
  );
}

function InfoCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`p-3 rounded-lg ${highlight ? "bg-emerald-500/10 border border-emerald-400/40" : "bg-white/5"}`}>
      <p className="text-[11px] uppercase tracking-wide text-gray-500">{label}</p>
      <p className={`text-sm mt-1 ${value === "Not detected" ? "text-red-300" : "text-white"}`}>{value}</p>
    </div>
  );
}

