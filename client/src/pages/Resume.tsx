import React, { useEffect, useState } from "react";
import axios from "axios";
import { ATSReport, BuilderState } from "../types/resume";
import { ATSScoreGauge } from "../components/resume/ATSScoreGauge";
import { InsightPanel } from "../components/resume/InsightPanel";
import { SummaryGrid } from "../components/resume/SummaryGrid";
import { TextPreview } from "../components/resume/TextPreview";
import { ResumeBuilder } from "../components/resume/ResumeBuilder";
import { AssistantPanel } from "../components/resume/AssistantPanel";

const initialBuilder: BuilderState = {
  personal: {
    name: "",
    email: "",
    phone: "",
    location: "",
    headline: "",
    summary: "",
    linkedin: "",
    github: "",
  },
  skills: ["JavaScript", "TypeScript", "React", "Node.js"],
  experience: [
    { role: "Software Engineer", company: "Acme Inc.", start: "2022", end: "Present", bullets: ["Built APIs", "Improved reliability"] },
  ],
  education: [{ school: "University", degree: "B.Tech Computer Science", start: "2018", end: "2022", details: "CGPA 8.5/10" }],
  projects: [{ name: "Project Aurora", link: "", description: "Web app for analytics", bullets: ["React, Node, PostgreSQL", "Improved latency by 30%"] }],
};

type TabKey = "analyzer" | "builder" | "assistant";

export default function Resume() {
  const [file, setFile] = useState<File | null>(null);
  const [report, setReport] = useState<ATSReport | null>(null);
  const [builderState, setBuilderState] = useState<BuilderState>(initialBuilder);
  const [templateKey, setTemplateKey] = useState("software_engineer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<TabKey>("analyzer");
  const [savingDraft, setSavingDraft] = useState(false);
  const [analyzingBuilder, setAnalyzingBuilder] = useState(false);
  const [draftId, setDraftId] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("resume_builder_state");
      const savedTemplate = localStorage.getItem("resume_builder_template");
      if (saved) setBuilderState(JSON.parse(saved));
      if (savedTemplate) setTemplateKey(savedTemplate);
    } catch (err) {
      console.warn("Failed to load builder state", err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("resume_builder_state", JSON.stringify(builderState));
    localStorage.setItem("resume_builder_template", templateKey);
  }, [builderState, templateKey]);

  const upload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }
    setLoading(true);
    setError("");
    setReport(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const r = await axios.post("http://localhost:4000/resume/upload", fd);
      setReport(r.data);
      setActiveTab("assistant");
    } catch (err: any) {
      setError(err?.response?.data?.error || err?.message || "Failed to upload resume");
    } finally {
      setLoading(false);
    }
  };

  const saveDraft = async (text: string) => {
    setSavingDraft(true);
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post("http://localhost:4000/resume-builder/draft", {
        id: draftId,
        title: builderState.personal.headline || "Untitled Resume",
        payload: builderState,
        templateKey,
        atsScore: report?.atsScore,
        userId: userId ? Number(userId) : null,
      });
      setDraftId(response.data?.draft?.id ?? draftId);
    } catch (err: any) {
      setError(err?.response?.data?.error || err?.message || "Could not save draft");
    } finally {
      setSavingDraft(false);
    }
  };

  const analyzeBuilder = async (text: string) => {
    setAnalyzingBuilder(true);
    setError("");
    try {
      const r = await axios.post("http://localhost:4000/resume/analyze-text", { text });
      setReport(r.data);
      setActiveTab("assistant");
    } catch (err: any) {
      setError(err?.response?.data?.error || err?.message || "Failed to analyze");
    } finally {
      setAnalyzingBuilder(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050b1a] text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">AutoMock.AI</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Resume Intelligence & Builder</h1>
              <p className="text-sm text-cyan-100">Optimized for FAANG & product companies • ATS-safe templates • Deterministic scoring</p>
            </div>
            <div className="flex gap-2">
              {(["analyzer", "builder", "assistant"] as TabKey[]).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm border ${activeTab === tab ? "border-white bg-white/10" : "border-white/30 text-white/80"}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/40 text-red-100 p-3 rounded-xl text-sm">{error}</div>}

        {activeTab === "analyzer" && (
          <div className="space-y-4">
            <div className="bg-[#0f172a] rounded-2xl p-5 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Resume ATS Analyzer</h2>
                  <p className="text-sm text-gray-400">Upload PDF, DOCX, or TXT. We parse real text and score deterministically.</p>
                </div>
                <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">ATS-safe</span>
              </div>
              <input
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={e => {
                  setFile(e.target.files?.[0] || null);
                  setError("");
                }}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600"
              />
              <button
                onClick={upload}
                disabled={loading || !file}
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded transition-colors text-white font-medium"
              >
                {loading ? "Analyzing..." : "Upload & Analyze"}
              </button>
            </div>

            {report && (
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-4">
                  <ATSScoreGauge score={report.atsScore || 0} breakdown={report.breakdown} />
                  <InsightPanel insights={report.insights} />
                  <SummaryGrid summary={report.summary} wordCount={report.wordCount} filename={report.filename} />
                  <TextPreview text={report.text} />
                </div>
                <div className="space-y-4">
                  <div className="bg-[#0f172a] rounded-2xl border border-white/5 p-4">
                    <p className="text-sm text-gray-300 mb-2">Detected Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {report.detectedSkills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-cyan-500/10 text-cyan-200 border border-cyan-500/30 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#0f172a] rounded-2xl border border-white/5 p-4">
                    <p className="text-sm text-gray-300 mb-2">Missing Sections</p>
                    <div className="flex flex-wrap gap-2">
                      {report.missingSections.map(section => (
                        <span key={section} className="px-3 py-1 bg-yellow-500/10 text-yellow-200 border border-yellow-500/30 rounded-full text-xs">
                          {section}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "builder" && (
          <ResumeBuilder
            state={builderState}
            setState={setBuilderState}
            templateKey={templateKey}
            onTemplateChange={(key, template) => {
              setTemplateKey(key);
              setBuilderState(prev => ({
                ...prev,
                personal: { ...prev.personal, headline: template.headline },
                skills: template.skills,
              }));
            }}
            onSaveDraft={saveDraft}
            onAnalyze={analyzeBuilder}
            atsFeedback={report}
            saving={savingDraft}
            analyzing={analyzingBuilder}
          />
        )}

        {activeTab === "assistant" && (
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              {report ? (
                <>
                  <ATSScoreGauge score={report.atsScore || 0} breakdown={report.breakdown} />
                  <InsightPanel insights={report.insights} />
                  <SummaryGrid summary={report.summary} wordCount={report.wordCount} filename={report.filename} />
                </>
              ) : (
                <div className="bg-[#0f172a] border border-white/5 rounded-2xl p-5 text-sm text-gray-300">Upload or build a resume to see ATS guidance.</div>
              )}
            </div>
            <AssistantPanel ats={report} builder={builderState} />
          </div>
        )}
      </div>
    </div>
  );
}
