export type ATSSeverity = "high" | "medium" | "low";

export interface ATSBreakdown {
  skillsMatch: number;
  roleRelevance: number;
  experience: number;
  education: number;
  projectsLinks: number;
  lengthQuality: number;
  contactQuality: number;
}

export interface ATSSectionStatus {
  hasSkills: boolean;
  hasExperience: boolean;
  hasEducation: boolean;
  hasProjects: boolean;
  hasContact: boolean;
  hasLinks: boolean;
}

export interface ResumeSummary {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  address: string;
}

export interface InsightGroup {
  title: string;
  severity: ATSSeverity;
  items: string[];
}

export interface ATSReport {
  success?: boolean;
  atsScore: number;
  filename?: string;
  text: string;
  summary: ResumeSummary;
  wordCount: number;
  detectedSkills: string[];
  missingSections: string[];
  suggestions: string[];
  sectionStatus: ATSSectionStatus;
  breakdown: ATSBreakdown;
  keywordsNeeded: string[];
  insights: InsightGroup[];
  resumeId?: number;
}

export interface ExperienceItem {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  start: string;
  end: string;
  details: string;
}

export interface ProjectItem {
  name: string;
  link: string;
  description: string;
  bullets: string[];
}

export interface BuilderState {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    headline: string;
    summary: string;
    linkedin: string;
    github: string;
  };
  skills: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
}

export interface ResumeDraft {
  id?: number;
  title: string;
  payload: BuilderState;
  templateKey: string;
  atsScore?: number;
  updatedAt?: string;
}

