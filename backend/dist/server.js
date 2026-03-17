"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interview_js_1 = __importDefault(require("./routes/interview.js"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
process.on("uncaughtException", (err) => {
    console.error("UNCAUGHT EXCEPTION:", err);
});
process.on("unhandledRejection", (err) => {
    console.error("UNHANDLED REJECTION:", err);
});
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/test", (req, res) => {
    res.send("TEST OK");
});
app.get("/", (req, res) => {
    res.send("🚀 AutoMock AI Backend Running");
});
// 
app.get("/api", (req, res) => {
    res.send("API root working 🚀");
});
app.get("/api/interview", (req, res) => {
    res.send("Interview API working 🚀");
});
app.use("/api/interview", interview_js_1.default);
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
});
