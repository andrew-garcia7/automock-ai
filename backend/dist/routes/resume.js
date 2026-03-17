"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const db_1 = require("../db");
const resumeParser_1 = require("../utils/resumeParser");
const atsScorer_1 = require("../utils/atsScorer");
const resumeInsights_1 = require("../utils/resumeInsights");
const router = (0, express_1.Router)();
/* ===============================
   UPLOAD CONFIG
================================ */
const uploadsDir = path_1.default.join(process.cwd(), "src", "uploads");
if (!fs_1.default.existsSync(uploadsDir)) {
    fs_1.default.mkdirSync(uploadsDir, { recursive: true });
}
const upload = (0, multer_1.default)({
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
        const resumeText = await (0, resumeParser_1.extractResumeText)(req.file.path);
        // ATS analysis
        const atsAnalysis = (0, atsScorer_1.analyzeATS)(resumeText);
        // ⏸ Resume Summary temporarily disabled (SAFE)
        const summary = EMPTY_SUMMARY;
        // Clean insights
        const insights = (0, resumeInsights_1.buildInsights)(resumeText, atsAnalysis);
        // Save resume
        const resume = await db_1.prisma.resume.create({
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
    }
    catch (err) {
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
        const atsAnalysis = (0, atsScorer_1.analyzeATS)(resumeText);
        // ⏸ Resume Summary temporarily disabled (SAFE)
        const summary = EMPTY_SUMMARY;
        const insights = (0, resumeInsights_1.buildInsights)(resumeText, atsAnalysis);
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
    }
    catch (err) {
        console.error("RESUME ANALYZE TEXT ERROR:", err);
        return res.status(500).json({
            success: false,
            error: err.message || "Text analysis failed",
        });
    }
});
exports.default = router;
