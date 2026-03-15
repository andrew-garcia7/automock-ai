import { ATSAnalysis } from "./atsScorer";
import { extractResumeSummary } from "./resumeSummary";

export interface InsightGroup {
  title: string;
  severity: "high" | "medium" | "low";
  items: string[];
}

/* ================================
   SAFE & READABLE IMPACT TEXT
================================ */
function quantifyImpactSafe(): string[] {
  return [
    "Add measurable results such as percentages, numbers, or time saved.",
    "Mention performance improvements, accuracy increase, or efficiency gains.",
    "Include metrics like users impacted, response time reduced, or revenue influenced.",
    "Quantified achievements make your resume more credible and ATS-friendly.",
  ];
}

export function buildInsights(text: string, analysis: ATSAnalysis) {
  const summary = extractResumeSummary(text);

  const missingSections: InsightGroup = {
    title: "Missing Sections",
    severity: "high",
    items: analysis.missingSections,
  };

  const keywordGaps: InsightGroup = {
    title: "Missing Keywords",
    severity: "medium",
    items: analysis.keywordsNeeded
      .slice(0, 6)
      .map(kw => `Add role keyword: ${kw}`),
  };

  const metricGaps: InsightGroup = {
    title: "Quantify Impact",
    severity: "low",
    items: quantifyImpactSafe(), // ✅ CLEAN TEXT ONLY
  };

  const contactIssues: InsightGroup = {
    title: "Contact & Links",
    severity: "medium",
    items: [
      !summary.email ? "Add a professional email address." : "",
      !summary.phone ? "Add a reachable phone number with country code." : "",
      !summary.linkedin ? "Include a LinkedIn profile URL." : "",
      !summary.github && analysis.role !== "data_analyst"
        ? "Add GitHub or portfolio link for technical roles."
        : "",
    ].filter(Boolean),
  };

  return [missingSections, keywordGaps, metricGaps, contactIssues].filter(
    g => g.items.length
  );
}
