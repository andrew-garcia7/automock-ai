import React, { useMemo, useState } from "react";
import { BuilderState, ExperienceItem, EducationItem, ProjectItem, ATSReport } from "../../types/resume";
import { ATSScoreGauge } from "./ATSScoreGauge";

interface Template {
  key: string;
  name: string;
  headline: string;
  skills: string[];
}

const templates: Template[] = [
  { key: "software_engineer", name: "Software Engineer", headline: "Full-Stack Engineer | Systems & APIs", skills: ["TypeScript", "Node.js", "React", "PostgreSQL", "AWS", "CI/CD"] },
  { key: "frontend_developer", name: "Frontend Developer", headline: "Frontend Developer | Design Systems", skills: ["React", "TypeScript", "Next.js", "Tailwind", "Accessibility", "Testing"] },
  { key: "backend_developer", name: "Backend Developer", headline: "Backend Developer | Microservices", skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Monitoring"] },
  { key: "data_analyst", name: "Data Analyst", headline: "Data Analyst | Insights & BI", skills: ["SQL", "Python", "Tableau", "Power BI", "Statistics", "ETL"] },
  { key: "student", name: "Fresher / Student", headline: "CS Student | Internships & Projects", skills: ["JavaScript", "Data Structures", "Git", "Projects", "Hackathons", "Teamwork"] },
];

export function builderToText(state: BuilderState): string {
  const skillLine = state.skills.join(", ");
  const exp = state.experience
    .map(e => `${e.role} at ${e.company} (${e.start} - ${e.end})\n${e.bullets.join("; ")}`)
    .join("\n");
  const edu = state.education.map(e => `${e.degree} - ${e.school} (${e.start}-${e.end}) ${e.details}`).join("\n");
  const projects = state.projects.map(p => `${p.name} (${p.link || "no link"}): ${p.description}. ${p.bullets.join("; ")}`).join("\n");

  return [
    state.personal.name,
    state.personal.headline,
    state.personal.summary,
    `Email: ${state.personal.email} | Phone: ${state.personal.phone} | Location: ${state.personal.location}`,
    `Links: ${state.personal.linkedin} ${state.personal.github}`,
    `Skills: ${skillLine}`,
    "Experience:",
    exp,
    "Education:",
    edu,
    "Projects:",
    projects,
  ]
    .filter(Boolean)
    .join("\n");
}

interface Props {
  state: BuilderState;
  setState: (next: BuilderState) => void;
  templateKey: string;
  onTemplateChange: (key: string, template: Template) => void;
  onSaveDraft: (text: string) => Promise<void>;
  onAnalyze: (text: string) => Promise<void>;
  atsFeedback?: ATSReport | null;
  saving: boolean;
  analyzing: boolean;
}

export function ResumeBuilder({
  state,
  setState,
  templateKey,
  onTemplateChange,
  onSaveDraft,
  onAnalyze,
  atsFeedback,
  saving,
  analyzing,
}: Props) {
  const [activeStep, setActiveStep] = useState<"personal" | "skills" | "experience" | "education" | "projects">("personal");

  const builderText = useMemo(() => builderToText(state), [state]);

  const updateExperience = (index: number, payload: Partial<ExperienceItem>) => {
    const next = [...state.experience];
    next[index] = { ...next[index], ...payload };
    setState({ ...state, experience: next });
  };

  const updateEducation = (index: number, payload: Partial<EducationItem>) => {
    const next = [...state.education];
    next[index] = { ...next[index], ...payload };
    setState({ ...state, education: next });
  };

  const updateProject = (index: number, payload: Partial<ProjectItem>) => {
    const next = [...state.projects];
    next[index] = { ...next[index], ...payload };
    setState({ ...state, projects: next });
  };

  return (
    <div className="bg-[#0a0f1f] border border-white/5 rounded-2xl p-5 space-y-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">Resume Builder</p>
          <h3 className="text-2xl font-semibold text-white">ATS-safe templates + structured editor</h3>
          <p className="text-gray-400 text-sm">Single-column, recruiter-ready output with autosave.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {templates.map(t => (
            <button
              key={t.key}
              onClick={() => onTemplateChange(t.key, t)}
              className={`px-3 py-2 rounded-lg text-sm border transition ${templateKey === t.key ? "border-cyan-500 bg-cyan-500/10 text-cyan-100" : "border-white/10 text-gray-300 hover:border-cyan-400/50"}`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        {(["personal", "skills", "experience", "education", "projects"] as const).map(step => (
          <button
            key={step}
            onClick={() => setActiveStep(step)}
            className={`px-4 py-2 rounded-full border transition ${activeStep === step ? "border-cyan-500 bg-cyan-500/10 text-cyan-100" : "border-white/10 text-gray-300 hover:border-cyan-400/50"}`}
          >
            {step.charAt(0).toUpperCase() + step.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          {activeStep === "personal" && (
            <div className="bg-white/5 rounded-xl p-4 space-y-3">
              <Field label="Name" value={state.personal.name} onChange={v => setState({ ...state, personal: { ...state.personal, name: v } })} />
              <Field label="Headline" value={state.personal.headline} onChange={v => setState({ ...state, personal: { ...state.personal, headline: v } })} />
              <Field label="Summary" value={state.personal.summary} onChange={v => setState({ ...state, personal: { ...state.personal, summary: v } })} multiline />
              <div className="grid md:grid-cols-2 gap-3">
                <Field label="Email" value={state.personal.email} onChange={v => setState({ ...state, personal: { ...state.personal, email: v } })} />
                <Field label="Phone" value={state.personal.phone} onChange={v => setState({ ...state, personal: { ...state.personal, phone: v } })} />
                <Field label="Location" value={state.personal.location} onChange={v => setState({ ...state, personal: { ...state.personal, location: v } })} />
                <Field label="LinkedIn" value={state.personal.linkedin} onChange={v => setState({ ...state, personal: { ...state.personal, linkedin: v } })} />
                <Field label="GitHub" value={state.personal.github} onChange={v => setState({ ...state, personal: { ...state.personal, github: v } })} />
              </div>
            </div>
          )}

          {activeStep === "skills" && (
            <div className="bg-white/5 rounded-xl p-4 space-y-2">
              <p className="text-sm text-gray-300">Comma separate or press Enter to add skills.</p>
              <textarea
                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm text-white"
                rows={4}
                value={state.skills.join(", ")}
                onChange={e => setState({ ...state, skills: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
              />
              <div className="flex flex-wrap gap-2">
                {state.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/10 text-cyan-200 rounded-full text-xs border border-cyan-500/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeStep === "experience" && (
            <div className="space-y-3">
              {state.experience.map((exp, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 space-y-2">
                  <Field label="Role" value={exp.role} onChange={v => updateExperience(idx, { role: v })} />
                  <Field label="Company" value={exp.company} onChange={v => updateExperience(idx, { company: v })} />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Start" value={exp.start} onChange={v => updateExperience(idx, { start: v })} />
                    <Field label="End" value={exp.end} onChange={v => updateExperience(idx, { end: v })} />
                  </div>
                  <Field
                    label="Bullets (semicolon separated)"
                    value={exp.bullets.join("; ")}
                    onChange={v => updateExperience(idx, { bullets: v.split(";").map(b => b.trim()).filter(Boolean) })}
                    multiline
                  />
                </div>
              ))}
              <button
                onClick={() =>
                  setState({
                    ...state,
                    experience: [...state.experience, { role: "", company: "", start: "", end: "Present", bullets: [] }],
                  })
                }
                className="px-4 py-2 rounded-lg border border-dashed border-cyan-500/40 text-cyan-200 text-sm"
              >
                + Add Experience
              </button>
            </div>
          )}

          {activeStep === "education" && (
            <div className="space-y-3">
              {state.education.map((edu, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 space-y-2">
                  <Field label="School" value={edu.school} onChange={v => updateEducation(idx, { school: v })} />
                  <Field label="Degree" value={edu.degree} onChange={v => updateEducation(idx, { degree: v })} />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Start" value={edu.start} onChange={v => updateEducation(idx, { start: v })} />
                    <Field label="End" value={edu.end} onChange={v => updateEducation(idx, { end: v })} />
                  </div>
                  <Field label="Details" value={edu.details} onChange={v => updateEducation(idx, { details: v })} multiline />
                </div>
              ))}
              <button
                onClick={() =>
                  setState({
                    ...state,
                    education: [...state.education, { school: "", degree: "", start: "", end: "", details: "" }],
                  })
                }
                className="px-4 py-2 rounded-lg border border-dashed border-cyan-500/40 text-cyan-200 text-sm"
              >
                + Add Education
              </button>
            </div>
          )}

          {activeStep === "projects" && (
            <div className="space-y-3">
              {state.projects.map((proj, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 space-y-2">
                  <Field label="Project" value={proj.name} onChange={v => updateProject(idx, { name: v })} />
                  <Field label="Link" value={proj.link} onChange={v => updateProject(idx, { link: v })} />
                  <Field label="Description" value={proj.description} onChange={v => updateProject(idx, { description: v })} multiline />
                  <Field
                    label="Bullets (semicolon separated)"
                    value={proj.bullets.join("; ")}
                    onChange={v => updateProject(idx, { bullets: v.split(";").map(b => b.trim()).filter(Boolean) })}
                    multiline
                  />
                </div>
              ))}
              <button
                onClick={() =>
                  setState({
                    ...state,
                    projects: [...state.projects, { name: "", link: "", description: "", bullets: [] }],
                  })
                }
                className="px-4 py-2 rounded-lg border border-dashed border-cyan-500/40 text-cyan-200 text-sm"
              >
                + Add Project
              </button>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="bg-white/5 rounded-xl p-4 space-y-2 text-sm text-gray-200">
            <p className="text-xs text-gray-400 uppercase tracking-wide">Template guidance</p>
            <p className="text-white font-semibold">{templates.find(t => t.key === templateKey)?.headline}</p>
            <p className="text-gray-300">Suggested skills:</p>
            <div className="flex flex-wrap gap-2">
              {templates
                .find(t => t.key === templateKey)
                ?.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-xs text-cyan-100">
                    {skill}
                  </span>
                ))}
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-4 text-xs text-gray-200 max-h-[340px] overflow-y-auto whitespace-pre-wrap">
            {builderText}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onSaveDraft(builderText)}
              className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white text-sm disabled:opacity-60"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Draft"}
            </button>
            <button
              onClick={() => onAnalyze(builderText)}
              className="flex-1 px-4 py-2 bg-white/10 border border-cyan-500/40 rounded-lg text-cyan-100 text-sm disabled:opacity-60"
              disabled={analyzing}
            >
              {analyzing ? "Analyzing..." : "ATS Check"}
            </button>
          </div>

          {atsFeedback && (
            <ATSScoreGauge score={atsFeedback.atsScore || 0} breakdown={atsFeedback.breakdown} />
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block text-sm text-gray-200">
      <span className="text-xs uppercase tracking-wide text-gray-400">{label}</span>
      {multiline ? (
        <textarea
          className="mt-1 w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm text-white"
          rows={3}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      ) : (
        <input
          className="mt-1 w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm text-white"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      )}
    </label>
  );
}

