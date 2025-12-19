import React from "react";
import { ATSReport, BuilderState } from "../../types/resume";

interface Props {
  ats?: ATSReport | null;
  builder: BuilderState;
}

const actionVerbs = ["Built", "Designed", "Optimized", "Automated", "Delivered", "Reduced", "Improved", "Launched"];

function deriveBuilderInsights(builder: BuilderState): string[] {
  const insights: string[] = [];
  if (builder.skills.length < 6) insights.push("Add 6-12 hard skills tailored to the target template.");
  if (builder.experience.some(e => !e.bullets.length)) insights.push("Each experience should have 2-4 quantified bullets.");
  if (builder.projects.length === 0) insights.push("Include at least one project with tech stack and outcome.");
  if (!builder.personal.linkedin) insights.push("Add LinkedIn URL for recruiter validation.");
  if (!builder.personal.github && builder.projects.length > 0) insights.push("Link GitHub/portfolio for code samples.");
  return insights;
}

function generateBulletExamples(builder: BuilderState): string[] {
  const skills = builder.skills.slice(0, 3).join(", ");
  return [
    `${actionVerbs[builder.skills.length % actionVerbs.length]} a feature using ${skills || "modern stack"} that improved reliability by 20%.`,
    `${actionVerbs[(builder.skills.length + 2) % actionVerbs.length]} deployment pipeline reducing release time by 30%.`,
  ];
}

export function AssistantPanel({ ats, builder }: Props) {
  const builderInsights = deriveBuilderInsights(builder);
  const bulletExamples = generateBulletExamples(builder);

  return (
    <div className="bg-[#0f172a] border border-cyan-500/20 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">AI-lite Assistant</p>
          <h3 className="text-lg font-semibold text-white">Rule-based improvements</h3>
        </div>
        <span className="text-xs text-gray-400">No external API</span>
      </div>

      {ats && (
        <div className="bg-white/5 rounded-lg p-3 text-sm text-gray-200 space-y-1">
          <div className="flex justify-between">
            <span>ATS Score</span>
            <span className="text-cyan-300">{ats.atsScore.toFixed(1)}</span>
          </div>
          <div className="text-gray-400 text-xs">Missing: {ats.missingSections.join(", ") || "None"}</div>
          <div className="text-gray-400 text-xs">Keywords needed: {ats.keywordsNeeded.slice(0, 5).join(", ") || "Covered"}</div>
        </div>
      )}

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-white">Immediate fixes</h4>
        <ul className="text-sm text-gray-200 space-y-2">
          {(ats?.suggestions || []).slice(0, 4).map((s, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-cyan-300 mt-0.5">•</span>
              <span>{s}</span>
            </li>
          ))}
          {builderInsights.map((s, idx) => (
            <li key={`b-${idx}`} className="flex gap-2">
              <span className="text-cyan-300 mt-0.5">•</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-white">Bullet rewrites</h4>
        <div className="space-y-2 text-sm text-gray-200">
          {bulletExamples.map((ex, idx) => (
            <div key={idx} className="bg-white/5 rounded-lg p-3">{ex}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

