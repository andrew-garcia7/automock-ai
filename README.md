# AutoMock – AI Mock Interview & Resume Analyzer (Demo MVP)

AutoMock is an AI-powered mock interview and resume analysis platform designed to help candidates prepare for technical interviews using resume-driven question generation, ATS-style evaluation, and structured feedback.

This project focuses on **explainable interview preparation**, simulating real interview flows while remaining fully extensible for advanced AI upgrades.

> ⚠️ Note: This is a **Demo / MVP version**. AI responses and scoring are currently simulated, with a production-ready architecture designed for future LLM, voice, and real-time evaluation upgrades.

---

## 🚀 Problem Statement

- Candidates struggle to prepare for real interviews without structured feedback.
- Resume weaknesses often go unnoticed due to lack of ATS awareness.
- Traditional mock interviews lack personalization and scalability.

---

## 💡 Solution

AutoMock solves this by:
- Parsing resume content to personalize interview questions
- Simulating interview environments with real-time camera access
- Evaluating resumes using ATS-style heuristics
- Delivering structured, actionable feedback

---

## ✨ Key Features

- **Resume-Driven AI Mock Interviews**  
  Dynamically generates interview questions based on parsed resume content and target job roles.

- **ATS-Style Resume Analysis & Scoring**  
  Evaluates keyword coverage, role alignment, and resume structure with improvement suggestions.

- **Real-Time Interview Room**  
  Browser-based interview room using `getUserMedia` for live camera interaction.

- **Structured AI Feedback Pipeline**  
  Simulates interviewer-style evaluation across communication, technical depth, and clarity.

- **Demo-Mode MVP with Extensible AI Architecture**  
  Modular AI layer designed for seamless integration of real LLMs, voice AI, and scoring engines.

---

## 🧠 System Architecture

[ Resume Upload ]
↓
[ Resume Parser ]
↓
[ Interview Question Engine ]
↓
[ Interview Room (Camera + TTS) ]
↓
[ Feedback & Evaluation Engine ]
↓
[ Resume ATS Scoring ]


### Architecture Highlights
- Modular AI pipeline (easy LLM replacement)
- Frontend-first MVP design
- Scalable backend hooks planned
- Clear separation of interview, scoring, and feedback layers

---

## 🛠 Tech Stack

### Frontend
- React (TypeScript)
- Vite
- Tailwind CSS

### Backend (Planned / AI-Ready)
- Node.js
- Express
- OpenAI / LLM-ready architecture

---

## 📌 Project Status

| Feature | Status |
|------|------|
Resume Parsing | ✅ Completed |
Interview Room | ✅ Completed |
Resume ATS Scoring | ✅ Demo Mode |
AI Interview Logic | ⚠️ Demo / Mock |
Voice AI | 🔜 Planned |
Advanced LLM Integration | 🔜 Planned |

---

## 📷 Screenshots

> Screenshots demonstrating:
- Interview Room UI
- Resume Analysis Flow
- Feedback & Scoring Screens

See `/screenshots` folder below.

---

## 🚧 Future Enhancements

- Real-time LLM-powered interviews
- Voice-based AI interviewer
- Multi-round interview simulations
- Advanced ATS benchmarking
- Role-specific scoring models

---

## 👨‍💻 Author

**Ajoy Debnath**  
- GitHub: https://github.com/andrew-garcia7  
- LinkedIn: https://linkedin.com/in/ajoy-debnath-795774252  

---

## 📄 License

This project is intended for educational, demo, and portfolio purposes.
