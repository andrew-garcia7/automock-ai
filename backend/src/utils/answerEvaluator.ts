// src/utils/answerEvaluator.ts
// 🚀 AI-FREE FALLBACK ANSWER EVALUATOR
// No OpenAI key required, works completely offline.

export async function evaluateAnswer(
  questionText: string,
  userAnswer: string,
  expectedDifficulty = "medium"
): Promise<{ score: number; feedback: string }> {

  // If no answer provided
  if (!userAnswer || userAnswer.trim().length < 5) {
    return {
      score: 10,
      feedback: "Your answer is too short. Try explaining your thought process in detail.",
    };
  }

  const answer = userAnswer.toLowerCase();

  // Penalize “I don't know”
  if (answer.includes("i don't know") || answer.includes("idk")) {
    return {
      score: 5,
      feedback: "Try giving some approach instead of saying 'I don't know'.",
    };
  }

  // If answer looks medium length → medium score
  if (userAnswer.length < 80) {
    return {
      score: 55,
      feedback: "Decent answer! Try adding examples or deeper explanation.",
    };
  }

  // Good detailed answer → high score
  if (userAnswer.length < 200) {
    return {
      score: 75,
      feedback: "Good answer! You covered the main points. Add real project experience to improve.",
    };
  }

  // Very detailed → excellent
  return {
    score: 90,
    feedback:
      "Excellent answer. Well-structured and clear explanation. Mention edge cases for perfection.",
  };
}
