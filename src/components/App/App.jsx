import { useEffect, useState } from "react"
import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback"
import Options from "../Options/Options"
import Notification from "../Notification/Notification";

export default function App() {

  const storedFeedback = localStorage.getItem("feedback");

  const [feedback, setFeedback] = useState(
    storedFeedback ? JSON.parse(storedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  useEffect(() => localStorage.setItem('feedback', JSON.stringify(feedback)), [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    })
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => setFeedback({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);


  return (
    <>
      <Description />
      <Options onUpdateFeedback={updateFeedback} onResetFeedback={resetFeedback} total={totalFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback feedback={feedback} total={totalFeedback} positive={positiveFeedback} />}

    </>
  )
}
