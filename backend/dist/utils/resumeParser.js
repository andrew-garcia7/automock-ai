"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractResumeText = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const mammoth_1 = __importDefault(require("mammoth"));
function detectFileKind(filePath) {
    const ext = path_1.default.extname(filePath || "").toLowerCase();
    if (ext === ".pdf")
        return "pdf";
    if (ext === ".docx")
        return "docx";
    return "txt";
}
/**
 * REMOVE PDF INTERNAL GARBAGE (critical)
 */
function hardPdfClean(text) {
    return text
        .replace(/%PDF[\s\S]*?endstream/gi, " ")
        .replace(/endobj|xref|trailer|startxref/gi, " ")
        .replace(/\b(obj|kids|ref|stream)\b/gi, " ")
        .replace(/\/[A-Za-z0-9#]+/g, " ")
        .replace(/[^\w@\n.+\-:/ ]/g, " ")
        .replace(/\r\n/g, "\n")
        .replace(/\n{2,}/g, "\n")
        .replace(/[ \t]{2,}/g, " ")
        .trim();
}
/**
 * COLUMN → LINE NORMALIZATION
 */
function normalizeLayout(text) {
    return text
        .replace(/\s*\|\s*/g, "\n")
        .replace(/[•\u2022]/g, "\n- ")
        .replace(/(\S) {2,}(\S)/g, "$1\n$2")
        .replace(/(?:^|\n)\s*(Email|Phone|LinkedIn|GitHub|Contact)\s*[:\-]/gi, "\n$1: ")
        .trim();
}
async function extractResumeText(filePath) {
    try {
        const buffer = fs_1.default.readFileSync(filePath);
        const kind = detectFileKind(filePath);
        if (kind === "pdf") {
            const parsed = await (0, pdf_parse_1.default)(buffer);
            return normalizeLayout(hardPdfClean(parsed.text || ""));
        }
        if (kind === "docx") {
            const raw = await mammoth_1.default.extractRawText({ buffer });
            return normalizeLayout(raw.value || "");
        }
        return normalizeLayout(buffer.toString("utf-8"));
    }
    catch (err) {
        console.error("resumeParser error:", err);
        return "";
    }
}
exports.extractResumeText = extractResumeText;
