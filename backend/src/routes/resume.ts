import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

import { prisma } from "../db";
import { extractResumeText } from "../utils/resumeParser";
import { analyzeATS } from "../utils/atsScorer";
import { buildInsights } from "../utils/resumeInsights";

const router = Router();

/* ===============================
   UPLOAD CONFIG
================================ */
const uploadsDir = path.join(process.cwd(), "src", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const upload = multer({
  dest: uploadsDir,
  limits: { fileSize: 10 * 1024 * 1024 },
});

/* ===============================
   SAFE EMPTY SUMMARY (DO NOT BREAK UI)
================================ */
const EMPTY_SUMMARY = {
  name: "",
  email: "",
  phone: "",
  github: "",
  linkedin: "",
  address: "",
};

/* ===============================
   UPLOAD & ANALYZE RESUME
================================ */
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "No file uploaded",
      });
    }

    // Resume text already normalized by parser
    const resumeText = await extractResumeText(req.file.path);

    // ATS analysis
    const atsAnalysis = analyzeATS(resumeText);

    // ⏸ Resume Summary temporarily disabled (SAFE)
    const summary = EMPTY_SUMMARY;

    // Clean insights
    const insights = buildInsights(resumeText, atsAnalysis);

    // Save resume
    const resume = await prisma.resume.create({
      data: {
        filename: req.file.originalname || req.file.filename,
        text: resumeText,
        atsScore: atsAnalysis.score,
      },
    });

    const sections = {
      email: "Skipped",
      phone: "Skipped",
      skills: atsAnalysis.detectedSkills.join(", ") || "Not specified",
      experience: atsAnalysis.sections.hasExperience
        ? "Detected"
        : "Not detected",
    };

    return res.json({
      success: true,

      resumeId: resume.id,
      filename: resume.filename,

      text: resumeText,
      wordCount: resumeText.split(/\s+/).length,

      summary, // ✅ SAFE STRUCTURE

      sections,

      atsScore: atsAnalysis.score,
      detectedSkills: atsAnalysis.detectedSkills,
      missingSections: atsAnalysis.missingSections,
      suggestions: atsAnalysis.suggestions,
      sectionStatus: atsAnalysis.sections,
      breakdown: atsAnalysis.breakdown,
      keywordsNeeded: atsAnalysis.keywordsNeeded,

      insights,
    });
  } catch (err: any) {
    console.error("RESUME UPLOAD ERROR:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Resume upload failed",
    });
  }
});

/* ===============================
   ANALYZE RAW TEXT (NO FILE)
================================ */
router.post("/analyze-text", async (req, res) => {
  try {
    const { text } = req.body || {};

    if (!text || typeof text !== "string" || text.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: "Provide valid resume text to analyze.",
      });
    }

    const resumeText = text;

    const atsAnalysis = analyzeATS(resumeText);

    // ⏸ Resume Summary temporarily disabled (SAFE)
    const summary = EMPTY_SUMMARY;

    const insights = buildInsights(resumeText, atsAnalysis);

    const sections = {
      email: "Skipped",
      phone: "Skipped",
      skills: atsAnalysis.detectedSkills.join(", ") || "Not specified",
      experience: atsAnalysis.sections.hasExperience
        ? "Detected"
        : "Not detected",
    };

    return res.json({
      success: true,

      text: resumeText,
      wordCount: resumeText.split(/\s+/).length,

      summary,

      sections,

      atsScore: atsAnalysis.score,
      detectedSkills: atsAnalysis.detectedSkills,
      missingSections: atsAnalysis.missingSections,
      suggestions: atsAnalysis.suggestions,
      sectionStatus: atsAnalysis.sections,
      breakdown: atsAnalysis.breakdown,
      keywordsNeeded: atsAnalysis.keywordsNeeded,

      insights,
    });
  } catch (err: any) {
    console.error("RESUME ANALYZE TEXT ERROR:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Text analysis failed",
    });
  }
});

export default router;
