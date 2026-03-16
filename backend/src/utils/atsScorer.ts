// Deterministic ATS scoring, insights, and section detection

export interface SectionPresence {
  hasSkills: boolean;
  hasExperience: boolean;
  hasEducation: boolean;
  hasProjects: boolean;
  hasContact: boolean;
  hasLinks: boolean;
}

export interface ScoreBreakdown {
  // 0–25: how many relevant skills are explicitly listed
  skillsMatch: number;
  // 0–20: presence/strength of experience or internships
  experience: number;
  // 0–15: presence/strength of project work
  projects: number;
  // 0–15: education signals
  education: number;
  // 0–15: alignment with role-specific keywords
  keywords: number;
  // 0–10: email/phone plus links
  contact: number;
}

export interface ATSAnalysis {
  score: number;
  breakdown: ScoreBreakdown;
  detectedSkills: string[];
  role: string;
  keywordsNeeded: string[];
  missingSections: string[];
  suggestions: string[];
  sections: SectionPresence;
  wordCount: number;
}

const TECHNICAL_KEYWORDS = [
  "javascript",
  "typescript",
  "python",
  "java",
  "react",
  "node",
  "express",
  "sql",
  "mongodb",
  "postgres",
  "aws",
  "docker",
  "kubernetes",
  "git",
  "graphql",
  "rest",
  "ci/cd",
  "testing",
  "jest",
  "cypress",
  "html",
  "css",
  "tailwind",
  "next",
  "vue",
  "angular",
  "data",
  "analytics",
  "ml",
  "machine learning",
  "pandas",
  "numpy",
  "spark",
  "cloud",
  "microservices",
  "design system",
  "api",
  "serverless",
];

const ROLE_KEYWORDS: Record<string, string[]> = {
  software_engineer: ["software engineer", "full stack", "backend", "frontend", "api", "system design", "scalable"],
  frontend_developer: ["frontend", "ui", "ux", "react", "typescript", "javascript", "css", "tailwind", "accessibility"],
  backend_developer: ["backend", "api", "microservices", "node", "express", "database", "sql", "scalability"],
  data_analyst: ["data analyst", "analytics", "sql", "python", "tableau", "dashboard", "insights", "visualization"],
  student: ["student", "intern", "fresher", "graduate", "college", "university", "bachelor"],
};

const SECTION_KEYWORDS = {
  skills: ["skills", "technical skills", "technologies", "tools", "expertise"],
  // EXPERIENCE = Internship | Work Experience | Professional Experience
  experience: [
    "experience",
    "work experience",
    "work history",
    "employment",
    "professional experience",
    "career",
    "internship",
    "internships",
  ],
  // EDUCATION = Education | Academic Background
  education: ["education", "academic background", "academic", "university", "college", "degree", "bachelor", "master"],
  // PROJECTS = Projects | Personal Projects
  projects: ["projects", "personal projects", "project experience", "open source", "portfolio"],
  links: ["github", "linkedin", "portfolio", "website"],
};

const EMAIL_REGEX = /[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}/i;
// Allow international prefixes like +91 as well as US-style formats
const PHONE_REGEX = /(\+?\d{1,4}[-.\s()]*)?((\d{3}[-.\s()]?\d{3}[-.\s()]?\d{4})|(\d{4}[-.\s()]?\d{3}[-.\s()]?\d{3}))/;
const GITHUB_REGEX = /github\.com\/[A-Za-z0-9_.-]+/i;
const LINKEDIN_REGEX = /linkedin\.com\/[A-Za-z0-9\-_/]+/i;

export function cleanResumeText(text: string): string {
  if (!text) return "";
  const stripped = text
    .replace(/%PDF[^\n]*/g, "")
    .replace(/obj\s+\d+/g, "")
    .replace(/endobj/g, "")
    .replace(/stream[\s\S]*?endstream/g, "")
    .replace(/xref[\s\S]*?trailer/g, "")
    .replace(/\/Type\s*\/[^\s]+/g, "")
    .replace(/\/Filter\s*\/[^\s]+/g, "")
    .replace(/\/Length\s+\d+/g, "")
    .replace(/[^\w\s@.\-+()/:,']/g, " ");

  return stripped
    .replace(/\r\n/g, "\n")
    .replace(/([a-z0-9,:;])\n(?!\n)/gi, "$1 ")
    .replace(/(\w)-\n(\w)/g, "$1$2")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function detectSkills(text: string): string[] {
  const lowerText = text.toLowerCase();
  const found = new Set<string>();

  for (const keyword of TECHNICAL_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      found.add(keyword);
    }
  }

  const skillsMatch = text.match(/(?:skills?|technologies?|tools?)[:\s]+([^\n]+)/i);
  if (skillsMatch) {
    const skillsText = skillsMatch[1];
    const skillsList = skillsText
      .split(/[,;|•\-\n]/)
      .map(s => s.trim())
      .filter(s => s.length > 1);
    skillsList.forEach(s => found.add(s.toLowerCase()));
  }

  return Array.from(found).slice(0, 30).map(s => s.replace(/\b\w/g, c => c.toUpperCase()));
}

function detectSections(text: string): SectionPresence {
  const lower = text.toLowerCase();

  const hasSkills = SECTION_KEYWORDS.skills.some(kw => lower.includes(kw));

  // EXPERIENCE: header keywords or lines mixing verbs, orgs and dates
  const hasExperienceHeader = SECTION_KEYWORDS.experience.some(kw => lower.includes(kw));
  const hasYearRange = /(?:20\d{2}|19\d{2}).{0,20}(present|current|20\d{2}|19\d{2})/i.test(text);
  const hasExperience = hasExperienceHeader || hasYearRange;

  // EDUCATION: header equivalents + degree keywords
  const hasEducationHeader = SECTION_KEYWORDS.education.some(kw => lower.includes(kw));
  const hasDegree = /\b(b\.?sc|b\.?tech|bachelor|master|m\.tech|b\.e\.|m\.e\.|degree)\b/i.test(text);
  const hasEducation = hasEducationHeader || hasDegree;

  // PROJECTS: header equivalents or lines starting with project-style labels
  const hasProjects =
    SECTION_KEYWORDS.projects.some(kw => lower.includes(kw)) ||
    /\b(project|hackathon|case study)\b/i.test(text);

  const hasContact = EMAIL_REGEX.test(text) || PHONE_REGEX.test(text);
  const hasLinks =
    GITHUB_REGEX.test(text) ||
    LINKEDIN_REGEX.test(text) ||
    SECTION_KEYWORDS.links.some(kw => lower.includes(kw));

  return { hasSkills, hasExperience, hasEducation, hasProjects, hasContact, hasLinks };
}

function inferRole(text: string): { role: string; matched: number; missingKeywords: string[] } {
  const lower = text.toLowerCase();
  let bestRole = "software_engineer";
  let bestScore = -1;
  let missing: string[] = [];

  for (const [role, keywords] of Object.entries(ROLE_KEYWORDS)) {
    const matches = keywords.filter(kw => lower.includes(kw)).length;
    if (matches > bestScore) {
      bestScore = matches;
      bestRole = role;
      missing = keywords.filter(kw => !lower.includes(kw)).slice(0, 6);
    }
  }

  return { role: bestRole, matched: bestScore, missingKeywords: missing };
}

// 0–25: based purely on number of distinct skills detected
function scoreSkills(detected: string[]): number {
  if (detected.length >= 15) return 25;
  if (detected.length >= 10) return 21;
  if (detected.length >= 7) return 17;
  if (detected.length >= 4) return 12;
  if (detected.length >= 2) return 7;
  if (detected.length >= 1) return 4;
  return 0;
}

// 0–20: experience or internship strength
function scoreExperience(hasExperience: boolean, text: string): number {
  if (!hasExperience) return 0;
  const bulletLines = text.split("\n").filter(l => /^[-•]/.test(l.trim()));
  if (bulletLines.length >= 6) return 20;
  if (bulletLines.length >= 3) return 16;
  return 12;
}

// 0–15: projects
function scoreProjects(hasProjects: boolean, text: string): number {
  if (!hasProjects) return 0;
  const projectLines = text
    .split("\n")
    .filter(l => /project|hackathon|case study/i.test(l));
  if (projectLines.length >= 5) return 15;
  if (projectLines.length >= 2) return 11;
  return 8;
}

// 0–15: education
function scoreEducation(hasEducation: boolean, text: string): number {
  if (!hasEducation) return 0;
  const hasGpa = /\b(CGPA|GPA|percentage|%)/i.test(text);
  const hasMultipleDegrees = /(b\.?tech|bachelor|b\.sc).*(m\.tech|master|m\.sc)/i.test(text);
  if (hasMultipleDegrees || hasGpa) return 15;
  return 11;
}

// 0–15: role keyword relevance
function scoreKeywords(roleMatchCount: number): number {
  if (roleMatchCount >= 6) return 15;
  if (roleMatchCount >= 4) return 12;
  if (roleMatchCount >= 3) return 9;
  if (roleMatchCount >= 2) return 6;
  if (roleMatchCount >= 1) return 3;
  return 0;
}

// 0–10: contact & links
function scoreContactLinks(hasContact: boolean, hasLinks: boolean): number {
  if (hasContact && hasLinks) return 10;
  if (hasContact || hasLinks) return 6;
  return 0;
}

function buildSuggestions(sections: SectionPresence, wordCount: number, missingKeywords: string[], detectedSkills: string[]): string[] {
  const suggestions: string[] = [];
  if (!sections.hasSkills) suggestions.push("Add a clearly titled Skills section with 8-15 targeted keywords.");
  if (!sections.hasExperience) suggestions.push("Include a Work Experience section with quantifiable bullet points.");
  if (!sections.hasEducation) suggestions.push("Add an Education section with degree and graduation year.");
  if (!sections.hasContact) suggestions.push("Add both email and phone number in the header for quick contact.");
  if (!sections.hasProjects) suggestions.push("Add 1-2 Projects with outcomes and links if available.");
  if (!sections.hasLinks) suggestions.push("Include LinkedIn and GitHub URLs for ATS parsers and recruiters.");

  if (wordCount < 320) suggestions.push("Expand impact statements; aim for 400-800 words for completeness.");
  else if (wordCount > 1100) suggestions.push("Condense wording; keep resume concise (400-800 words ideal).");

  const missingSkillCount = Math.max(0, 6 - detectedSkills.length);
  if (missingSkillCount > 0) {
    suggestions.push(`Add ~${missingSkillCount} more hard skills relevant to your target role.`);
  }

  if (missingKeywords.length) {
    suggestions.push(`Incorporate missing role keywords: ${missingKeywords.slice(0, 4).join(", ")}.`);
  }

  return Array.from(new Set(suggestions)).slice(0, 8);
}

export function analyzeATS(text: string): ATSAnalysis {
  const cleanedText = cleanResumeText(text);
  const wordCount = cleanedText ? cleanedText.split(/\s+/).length : 0;

  if (!cleanedText || cleanedText.length < 50) {
    return {
      score: 0,
      breakdown: {
        skillsMatch: 0,
        experience: 0,
        education: 0,
        projects: 0,
        keywords: 0,
        contact: 0,
      },
      detectedSkills: [],
      role: "software_engineer",
      keywordsNeeded: [],
      missingSections: ["Skills", "Experience", "Education", "Contact Info"],
      suggestions: ["Resume text could not be extracted cleanly. Try re-exporting as PDF or DOCX."],
      sections: {
        hasSkills: false,
        hasExperience: false,
        hasEducation: false,
        hasProjects: false,
        hasContact: false,
        hasLinks: false,
      },
      wordCount,
    };
  }

  const sections = detectSections(cleanedText);
  const detectedSkills = detectSkills(cleanedText);
  const { role, matched, missingKeywords } = inferRole(cleanedText);

  const breakdown: ScoreBreakdown = {
    skillsMatch: scoreSkills(detectedSkills), // 0–25
    experience: scoreExperience(sections.hasExperience, cleanedText), // 0–20
    projects: scoreProjects(sections.hasProjects, cleanedText), // 0–15
    education: scoreEducation(sections.hasEducation, cleanedText), // 0–15
    keywords: scoreKeywords(matched), // 0–15
    contact: scoreContactLinks(sections.hasContact, sections.hasLinks), // 0–10
  };

  const totalScore = Object.values(breakdown).reduce((sum, n) => sum + n, 0);

  const missingSections: string[] = [];
  if (!sections.hasSkills) missingSections.push("Skills");
  if (!sections.hasExperience) missingSections.push("Experience / Internship");
  if (!sections.hasEducation) missingSections.push("Education / Academic Background");
  if (!sections.hasProjects) missingSections.push("Projects");
  if (!sections.hasContact) missingSections.push("Contact Details");
  if (!sections.hasLinks) missingSections.push("Links (GitHub / LinkedIn)");

  const suggestions = buildSuggestions(sections, wordCount, missingKeywords, detectedSkills);

  return {
    score: Math.round(Math.min(100, totalScore) * 10) / 10,
    breakdown,
    detectedSkills,
    role,
    keywordsNeeded: missingKeywords,
    missingSections,
    suggestions,
    sections,
    wordCount,
  };
}
