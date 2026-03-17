"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
});
