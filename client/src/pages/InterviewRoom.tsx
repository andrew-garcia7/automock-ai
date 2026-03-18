import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { API } from "../api";
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
  const [cameraReady, setCameraReady] = useState(false);

  const webcamRef = useRef(null);

  /* ================= CAMERA PERMISSION ================= */

  useEffect(() => {

    async function enableCamera() {

      try {

        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });

      } catch (err) {

        alert("Please allow camera permission.");

      }

    }

    enableCamera();

  }, []);

  /* ================= LOAD QUESTIONS ================= */

  useEffect(() => {

    async function loadInterview() {

      if (questions && questions.length) {

        setLoading(false);
        return;

      }

      try {

        const res = await API.get(`/api/interview/${interviewId}`);

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

    if (!questions || !questions[index]) {

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

    try {

      const res = await API.post(`/api/interview/${interviewId}/answer`, {
        question,
        answer
      });

      if (!res.data?.success) {

        throw new Error("Backend rejected answer");

      }

      setScores((p) => [...p, res.data.score]);

      setFeedback({
        score: res.data.score,
        fb: res.data.feedback
      });

      if (autoNext) setTimeout(goNext, 900);

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

      const res = await API.post(
  `/api/interview/${interviewId}/end`
);

      if (res.data?.success) {

        setShowSummary(true);

      }

    } catch (err) {

      alert("Failed to end interview.");

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

    <div
      className="min-h-screen text-white p-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,8,15,0.9), rgba(5,8,15,0.95)), url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <div className="grid grid-cols-3 gap-8">

        {/* CAMERA */}

        <div className="col-span-2 bg-black/50 backdrop-blur-xl rounded-xl h-[550px] overflow-hidden relative border border-white/10 shadow-[0_0_30px_#00eaff55]">

          {!cameraReady && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
              Starting Camera...
            </div>
          )}

          <Webcam
            ref={webcamRef}
            audio={true}
            mirrored={true}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: "user"
            }}
            onUserMedia={() => setCameraReady(true)}
            onUserMediaError={(err) => {
              console.error("Camera error:", err);
              alert("Camera not accessible.");
            }}
            className="w-full h-full object-cover"
          />

        </div>

        {/* QUESTION PANEL */}

        <div className="bg-[#111829]/80 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-[0_0_20px_#00eaff44]">

          <h1 className="text-xl mb-4 text-cyan-400">
            Question {index + 1} / {questions.length}
          </h1>

          <h2 className="text-2xl mb-6">{currentQuestion}</h2>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full h-40 p-4 rounded bg-[#1a2337] border border-white/10"
            placeholder="Type your answer..."
          />

          <div className="flex gap-4 mt-6 flex-wrap">

            <button
              onClick={() => submitAnswer({ autoNext: true })}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded shadow-[0_0_20px_#00eaff]"
            >
              Submit & Next
            </button>

            <button
              onClick={() => submitAnswer()}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded"
            >
              Submit Only
            </button>

            <button
              onClick={endInterview}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded"
            >
              End Interview
            </button>

          </div>

          {feedback && (

            <div className="mt-4 p-4 bg-black/40 rounded">

              <p className="text-cyan-400">
                Score: {feedback.score}
              </p>

              <p>{feedback.fb}</p>

            </div>

          )}

        </div>

      </div>

      {/* SUMMARY */}

      {showSummary && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

          <div className="bg-[#1a2337] p-8 rounded-xl text-center w-[400px]">

            <h2 className="text-2xl mb-4 text-cyan-400">
              Interview Summary
            </h2>

            <p className="text-lg">

              Avg Score:

              {scores.length
                ? (
                    scores.reduce((a, b) => a + b, 0) /
                    scores.length
                  ).toFixed(2)
                : "-"}

            </p>

            <div className="mt-6 flex gap-4 justify-center">

              <button
                onClick={() => navigate("/history", { state: { refresh: true } })}
                className="px-6 py-2 bg-cyan-500 rounded"
              >
                History
              </button>

              <button
                onClick={() => navigate("/")}
                className="px-6 py-2 bg-blue-500 rounded"
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