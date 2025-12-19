import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Webcam from "react-webcam";

export default function InterviewRoom() {
  const { id } = useParams();
  const interviewId = Number(id);
  const location = useLocation();
  const navigate = useNavigate();

  const initialQuestions = location.state?.questions || null;

  const [questions, setQuestions] = useState(initialQuestions);
  const [loading, setLoading] = useState(!initialQuestions);
  const [error, setError] = useState("");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [scores, setScores] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const webcamRef = useRef(null);

  /* ================= LOAD QUESTIONS ================= */
  useEffect(() => {
    async function loadInterview() {
      if (questions && questions.length) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          `http://localhost:4000/interview/${interviewId}`
        );

        if (Array.isArray(res.data?.questions)) {
          setQuestions(res.data.questions);
        } else {
          setError("No questions found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load interview.");
      } finally {
        setLoading(false);
      }
    }

    loadInterview();
  }, [interviewId]);

  const currentQuestion =
    questions && questions[index] ? questions[index] : "";

 /* ================= SUBMIT ANSWER ================= */
const submitAnswer = async ({ autoNext = false } = {}) => {
  if (!questions || !Array.isArray(questions) || !questions[index]) {
    alert("Question not ready yet.");
    return;
  }

  if (!answer.trim()) {
    alert("Please type your answer first.");
    return;
  }

  const rawQuestion = questions[index];
  const question =
    typeof rawQuestion === "string"
      ? rawQuestion
      : rawQuestion.text ||
        rawQuestion.question ||
        JSON.stringify(rawQuestion);

  console.log("Submitting:", {
    interviewId,
    question,
    answer,
    typeofQuestion: typeof question,
  });

  try {
    const res = await axios.post(
      `http://localhost:4000/interview/${interviewId}/answer`,
      { question, answer }
    );

    if (!res.data?.success) {
      throw new Error("Backend rejected answer");
    }

    setScores((p) => [...p, res.data.score]);
    setFeedback({
      score: res.data.score,
      fb: res.data.feedback,
    });

    if (autoNext) setTimeout(goNext, 800);
  } catch (err) {
    console.error("Submit failed:", err);
    alert("Failed to submit answer.");
  }
};


  /* ================= NEXT ================= */
  const goNext = () => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
      setAnswer("");
      setFeedback(null);
    } else {
      endInterview();
    }
  };

  /* ================= END ================= */
  const endInterview = async () => {
    if (!window.confirm("End interview?")) return;

    try {
      const res = await axios.post(
        `http://localhost:4000/interview/${interviewId}/end`
      );
      
      if (res.data?.success) {
        setShowSummary(true);
      } else {
        alert("Failed to end interview: " + (res.data?.error || "Unknown error"));
      }
    } catch (err) {
      console.error("End interview error:", err);
      alert("Failed to end interview: " + (err?.response?.data?.error || err?.message || "Network error"));
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading interview...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white p-10">
      <div className="grid grid-cols-3 gap-8">
        {/* CAMERA */}
        <div className="col-span-2 bg-black rounded-xl h-[550px] overflow-hidden relative">
          <Webcam
            ref={webcamRef}
            audio={false}
            videoConstraints={{
              facingMode: "user",
              width: 1280,
              height: 720,
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* QUESTION */}
        <div className="bg-[#111829] p-6 rounded-xl">
          <h1 className="text-xl mb-4">
            Question {index + 1} / {questions.length}
          </h1>

          <h2 className="text-2xl mb-6">{currentQuestion}</h2>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full h-40 p-4 rounded bg-[#1a2337]"
            placeholder="Type your answer..."
          />

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => submitAnswer({ autoNext: true })}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded transition-colors"
              disabled={!answer.trim()}
            >
              Submit & Next
            </button>

            <button
              onClick={() => submitAnswer()}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors"
              disabled={!answer.trim()}
            >
              Submit Only
            </button>

            <button
              onClick={endInterview}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded transition-colors"
            >
              End Interview
            </button>
          </div>

          {feedback && (
            <div className="mt-4 p-4 bg-black/40 rounded">
              <p>Score: {feedback.score}</p>
              <p>{feedback.fb}</p>
            </div>
          )}
        </div>
      </div>

      {/* SUMMARY */}
      {showSummary && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#1a2337] p-8 rounded-xl text-center">
            <h2 className="text-2xl mb-4">Interview Summary</h2>

            <p>
              Avg Score:{" "}
              {scores.length
                ? (
                    scores.reduce((a, b) => a + b, 0) / scores.length
                  ).toFixed(2)
                : "-"}
            </p>

            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={() => setShowSummary(false)}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/history")}
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded transition-colors text-white font-medium"
              >
                View History
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors text-white font-medium"
              >
                Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
